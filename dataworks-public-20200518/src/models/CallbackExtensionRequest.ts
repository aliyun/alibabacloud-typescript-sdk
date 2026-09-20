// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallbackExtensionRequest extends $dara.Model {
  /**
   * @remarks
   * The reason for the failure when CheckResult is set to FAIL.
   * 
   * @example
   * The xxx rule is hit. Modify it and try again.
   */
  checkMessage?: string;
  /**
   * @remarks
   * The check status of the extension program for the extension point event. Valid values:
   * - OK: The extension program check for the extension point event passed.
   * - FAIL: The extension program check for the extension point event failed. View and resolve the error promptly to avoid affecting the normal execution of subsequent programs.
   * - WARN: The extension program check for the extension point event passed, but warnings exist.
   * 
   * This parameter is required.
   * 
   * @example
   * FAIL
   */
  checkResult?: string;
  /**
   * @remarks
   * The unique code of the extension program.
   * 
   * This parameter is required.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2****
   */
  extensionCode?: string;
  /**
   * @remarks
   * The message ID of the DataWorks open message. After an extension point event is triggered, you can obtain the message ID from the received event message.
   * 
   * <props="china">For more information about the message format, see [Message format](https://help.aliyun.com/document_detail/215367.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 034********091
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      checkMessage: 'CheckMessage',
      checkResult: 'CheckResult',
      extensionCode: 'ExtensionCode',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkMessage: 'string',
      checkResult: 'string',
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

