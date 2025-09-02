// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkbenchEventResultRequest extends $dara.Model {
  /**
   * @remarks
   * The check result of the extension point event. Valid values: OK and Fail.
   * 
   * This parameter is required.
   * 
   * @example
   * FAIL
   */
  checkResult?: string;
  /**
   * @remarks
   * The cause of the check failure.
   * 
   * @example
   * SQL is too long
   */
  checkResultTip?: string;
  /**
   * @remarks
   * The code of the extension.
   * 
   * This parameter is required.
   * 
   * @example
   * 58e95e2acd6f408e8707f1bf2591f9e9
   */
  extensionCode?: string;
  /**
   * @remarks
   * The ID of the message received when the related extension point event is triggered after you enable message subscription by using the OpenEvent module.
   * 
   * This parameter is required.
   * 
   * @example
   * 03400b03-b721-4c34-8727-2d6884077091
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

