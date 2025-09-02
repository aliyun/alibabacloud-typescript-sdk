// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIDEEventResultRequest extends $dara.Model {
  /**
   * @remarks
   * The check status of the extension point event. Valid values:
   * 
   * *   OK: The event passes the check.
   * *   FAIL: The event fails to pass the check. You must check and handle the reported error at the earliest opportunity to ensure that your program is run as expected.
   * *   WARN: The event passes the check, but an alert is reported.
   * 
   * @example
   * OK
   */
  checkResult?: string;
  /**
   * @remarks
   * The summary information of the check result. The information is displayed in DataStudio. If an alert is reported or the event fails the check, you can troubleshoot errors based on the information.
   * 
   * @example
   * Succeeded
   */
  checkResultTip?: string;
  /**
   * @remarks
   * The unique identifier of the extension. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Extensions tab of the Open Platform page to view the identifier.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  extensionCode?: string;
  /**
   * @remarks
   * The message ID. You can obtain the ID from a received message when an extension point event is triggered.
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

