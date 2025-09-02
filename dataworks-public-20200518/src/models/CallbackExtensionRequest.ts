// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallbackExtensionRequest extends $dara.Model {
  /**
   * @remarks
   * The check message of the extension point event. If CheckResult is set to FAIL, you must provide the failure cause.
   * 
   * @example
   * The xxx rule is hit. Modify it and try again.
   */
  checkMessage?: string;
  /**
   * @remarks
   * The check status of the extension point event. Valid values:
   * 
   * *   OK: The event passes the check.
   * *   FAIL: The event fails to pass the check. You must check and handle the reported error at the earliest opportunity to ensure that your program is run as expected.
   * *   WARN: The event passes the check, but an alert is reported.
   * 
   * This parameter is required.
   * 
   * @example
   * FAIL
   */
  checkResult?: string;
  /**
   * @remarks
   * The unique code of the extension.
   * 
   * This parameter is required.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  extensionCode?: string;
  /**
   * @remarks
   * The message ID in DataWorks OpenEvent. You can obtain the ID from a received message when an extension point event is triggered.
   * 
   * This parameter is required.
   * 
   * @example
   * 03400b03-b721-4c34-8727-2d6884077091
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

