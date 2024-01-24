# @react-native-ui-design/dialog

@react-native-ui-design/dialog have lots of predefined customizations & features

## Installation

```sh
npm install @react-native-ui-design/dialog
```

## Required dependencies
```sh
npm i @react-native-ui-design/button react-native-paper react-native-responsive-helper react-native-safe-area-context react-native-vector-icons
```

## Usage

```js
import Dialog from '@react-native-ui-design/dialog';

return (
    // ...
    <Dialog
        visible={true}
        title="@react-native-ui-design/dialog"
        message="@react-native-ui-design/dialog have lots of predefined customizations & features"
        onPressClose={() => void}
        acceptText="Accept"
        rejectText="Reject"
        onAccept={() => void}
        onReject={() => void}
        shouldReverseActionButton={true}
        isDismissable={true}
        onDismiss={() => void}
    />
    // ...
)

```

## User Guide

#### Props
| Prop name                     | Description                                                 | Default Value    | Example Value                    | Required |
| ----------------------------- | ----------------------------------------------------------- | ---------------- | -------------------------------- | -------- |
| visible                       | Show or hide Dialog                                         | N/A              | `true`                           | ✅       |
| title                         | Title of the dialog                                         | N/A              | "Dialog Title"                   | ❌       |
| message                       | Content of the dialog                                       | N/A              | "Dialog description"             | ❌       |
| messageStyle                  | Dialog message style (ViewStyle)                            | N/A              | `{height: 100}`                  | ❌       |
| acceptText                    | Accept action button title                                  | N/A              | "Accept"                         | ❌       |
| onAccept                      | Function call on press Accept                               | N/A              | () => void                       | ❌       |
| rejectText                    | Reject action button title                                  | N/A              | "Dialog Title"                   | ❌       |
| onReject                      | Function call on press Reject                               | N/A              | () => void                       | ❌       |
| isDismissable                 | Determines whether clicking outside the dialog dismiss it   | `false`          | `true`                           | ❌       |
| onDismiss                     | Function call on clicking outside the dialog dismiss it     | N/A              | () => void                       | ❌       |
| acceptButtonProps             | Accept button props                                         | N/A              | `mode="contained"`               | ❌       |
| rejectButtonProps             | Reject button props                                         | N/A              | `mode="contained"`               | ❌       |
| contentStyle                  | Dialog message content style (ViewStyle)                    | N/A              | `{height: 100}`                  | ❌       |
| actionContainerStyle          | Dialog action button container style (ViewStyle)            | N/A              | `{height: 100}`                  | ❌       |
| actionContentStyle            | Dialog action button content style (ViewStyle)              | N/A              | `{height: 100}`                  | ❌       |
| onPressClose                  | Function call on press dialog close button                  | N/A              | () => void                       | ❌       |
| testID                        | Test id for testing purpose                                 | N/A              | "dialogID"                       | ❌       |
| children                      | Dialog childen (ReactNode)                                  | N/A              | `<Text>Dialog children</Text>`   | ❌       |
| shouldReverseActionButton     | Reverse the action button position                          | `false`          | `true`                           | ❌       |

---

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/41302126?v=4" width="64" height="64" alt="Abiraman K">
    </td>
    <td>
      <a href="https://github.com/Abiraman K">Abiraman K</a>
    </td>
  </tr>
</table>

## Thank you

### Sponsors

Thank you to all our sponsors! [Become a sponsor](https://opencollective.com/react-native-ui-design-dialog#sponsor) and get your image on our README on GitHub.

<a href="https://opencollective.com/react-native-ui-design-dialog#sponsors" target="_blank"><img src="https://opencollective.com/react-native-ui-design-dialog/sponsors.svg?width=890" alt="@react-native-ui-design/dialog"></a>


---
