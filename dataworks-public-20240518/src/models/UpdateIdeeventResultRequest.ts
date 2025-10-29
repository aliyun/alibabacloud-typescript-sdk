// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIDEEventResultRequest extends $dara.Model {
  /**
   * @remarks
   * The check status of the extension for this extension point event. Valid values:
   * 
   * *   OK: The extension passed the check for this event.
   * *   FAIL: The extension failed the check for this event. You need to review and resolve the error promptly to avoid affecting subsequent program execution.
   * *   WARN: The extension passed the check for this event, but with warnings.
   * 
   * @example
   * OK
   */
  checkResult?: string;
  /**
   * @remarks
   * A summary of the check result for this extension point event. This message is displayed on your current development page. When the check fails or has warnings, you can use this summary to quickly identify the cause.
   * 
   * @example
   * Succeeded
   */
  checkResultTip?: string;
  /**
   * @remarks
   * The unique identifier of the extension. You can obtain the identifier from the Extensions tab on Open Platform in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  extensionCode?: string;
  /**
   * @remarks
   * The OpenEvent message ID from DataWorks. When an extension point event is triggered, you can obtain the message ID from the event message.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
      checkResultTip: 'CheckResultTip',
      extensionCode: 'ExtensionCode',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'string',
      checkResultTip: 'string',
      extensionCode: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

