// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIDEEventResultRequest extends $dara.Model {
  /**
   * @remarks
   * The check status of the extension for this extension point event. Valid values:
   * 
   * - OK: The extension check for this extension point event passed.
   * - FAIL: The extension check for this extension point event failed. View and resolve the error promptly to avoid affecting the normal execution of subsequent programs.
   * - WARN: The extension check for this extension point event passed, but warnings exist.
   * 
   * @example
   * OK
   */
  checkResult?: string;
  /**
   * @remarks
   * The summary of the check performed by the extension on this extension point event.
   * This information is displayed on your current development page. If the check has warnings or fails, you can use this summary to quickly identify the cause.
   * 
   * @example
   * Succeeded
   */
  checkResultTip?: string;
  /**
   * @remarks
   * The unique identifier of the extension.
   * You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and view the identifier on the Extensions tab of the Open Platform page.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  extensionCode?: string;
  /**
   * @remarks
   * The message ID of the DataWorks open message. After an extension point event is triggered, you can obtain the message ID from the received event message.
   * 
   * 
   * <props="china">For more information about the message format, see [Message format](https://help.aliyun.com/document_detail/215367.html).
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

