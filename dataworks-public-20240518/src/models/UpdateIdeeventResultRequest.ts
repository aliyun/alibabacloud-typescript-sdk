// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIDEEventResultRequest extends $dara.Model {
  /**
   * @example
   * OK
   */
  checkResult?: string;
  /**
   * @example
   * Succeeded
   */
  checkResultTip?: string;
  /**
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  extensionCode?: string;
  /**
   * @remarks
   * 扩展点消息UUID
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

