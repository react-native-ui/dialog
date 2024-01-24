import React, { type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { Portal, Dialog as RNPDialog, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, type ButtonProps } from '@react-native-ui-design/button';
import {
  responsiveHeight,
  responsiveSize,
} from 'react-native-responsive-helper';
import { View } from 'react-native';

export interface DialogProps {
  visible: boolean;
  title?: string;
  message?: string | ReactNode;
  messageStyle?: StyleProp<TextStyle>;
  acceptText?: string;
  onAccept?: () => void;
  rejectText?: string;
  onReject?: () => void;
  isDismissable?: boolean;
  onDismiss?: () => void;
  acceptButtonProps?: ButtonProps;
  rejectButtonProps?: ButtonProps;
  contentStyle?: StyleProp<ViewStyle>;
  actionContainerStyle?: StyleProp<ViewStyle>;
  actionContentStyle?: StyleProp<ViewStyle>;
  onPressClose?: () => void;
  testID?: string;
  children?: ReactNode;
  shouldReverseActionButton?: boolean;
}

function Dialog(props: DialogProps) {
  function onDismiss() {
    if (props?.onDismiss!) {
      props?.onDismiss();
    }
  }

  function onAccept() {
    if (props?.onAccept!) {
      props?.onAccept();
    }
  }

  function onReject() {
    if (props?.onReject!) {
      props?.onReject();
    }
  }

  function onPressClose() {
    if (props?.onPressClose!) {
      props?.onPressClose();
    }
  }

  return (
    <Portal>
      <RNPDialog
        testID={`${props?.testID}.dialog.container`}
        visible={props?.visible}
        onDismiss={onDismiss}
        style={styles?.container}
        dismissable={true}
      >
        {props?.title! && (
          <RNPDialog.Title style={styles?.text}>{props?.title}</RNPDialog.Title>
        )}

        <RNPDialog.Content
          testID={`${props?.testID}.dialog.content`}
          style={props?.contentStyle}
        >
          {props?.message! && (
            <Text
              testID={`${props?.testID}.dialog.content.message`}
              variant="bodyLarge"
              style={[styles?.text, props?.messageStyle]}
            >
              {props?.message}
            </Text>
          )}
          {props?.children}
        </RNPDialog.Content>

        {(props?.acceptText! || props?.rejectText!) && (
          <RNPDialog.Actions
            testID={`${props?.testID}.dialog.actions`}
            style={[props?.actionContainerStyle]}
          >
            <View
              style={[
                {
                  flexDirection: props?.shouldReverseActionButton
                    ? 'row-reverse'
                    : 'row',
                },
                props?.actionContentStyle,
                styles?.actionContentStyle,
              ]}
            >
              {props?.acceptText! && (
                <Button
                  testID={`${props?.testID}.dialog.actions.accept`}
                  onPress={onAccept}
                  {...props?.acceptButtonProps}
                >
                  {props?.acceptText}
                </Button>
              )}
              {props?.rejectText! && (
                <Button
                  testID={`${props?.testID}.dialog.actions.reject`}
                  onPress={onReject}
                  {...props?.rejectButtonProps}
                >
                  {props?.rejectText}
                </Button>
              )}
            </View>
          </RNPDialog.Actions>
        )}
        {props?.onPressClose! && (
          <Pressable
            testID={`${props?.testID}.dialog.close`}
            style={styles?.closeIconContainer}
            onPress={onPressClose}
          >
            <Ionicons
              testID={`${props?.testID}.dialog.close.icon`}
              name="close-circle"
              style={styles?.closeIcon}
            />
          </Pressable>
        )}
      </RNPDialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: responsiveSize(10),
    paddingVertical: responsiveSize(15),
  },
  closeIconContainer: {
    position: 'absolute',
    top: responsiveHeight(5),
    right: responsiveHeight(5),
  },
  closeIcon: {
    color: '#D11A2A',
    fontSize: responsiveSize(32),
  },
  text: {
    color: '#141823',
  },
  actionContentStyle: {
    gap: responsiveSize(10),
  },
});

export default Dialog;
