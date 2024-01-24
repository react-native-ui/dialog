import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { Button } from '@react-native-ui-design/button';
import { responsiveSize } from 'react-native-responsive-helper';

import Dialog from '@react-native-ui-design/dialog';

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onPressOpenDialog() {
    openDialog();
  }

  function openDialog() {
    setIsOpen(true);
  }

  function closeDialog() {
    setIsOpen(false);
  }

  function onPressAccept() {
    closeDialog();
    Alert.alert('Presssed Accept');
  }

  function onPressReject() {
    closeDialog();
    Alert.alert('Presssed Reject');
  }

  return (
    <Provider>
      <View style={styles?.container}>
        <View style={styles?.content}>
          <Button onPress={onPressOpenDialog} mode="contained">
            Open Dialog
          </Button>
        </View>
        <Dialog
          visible={isOpen}
          title="@react-native-ui-design/dialog"
          message="@react-native-ui-design/dialog have lots of predefined customizations & features"
          onPressClose={closeDialog}
          acceptText="Accept"
          rejectText="Reject"
          onAccept={onPressAccept}
          onReject={onPressReject}
          shouldReverseActionButton={true}
          isDismissable={true}
          onDismiss={closeDialog}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: responsiveSize(30),
  },
});
