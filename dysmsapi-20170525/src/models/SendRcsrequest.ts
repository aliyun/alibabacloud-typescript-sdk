// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRCSRequest extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  outId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  phoneNumbers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  templateCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      outId: 'OutId',
      phoneNumbers: 'PhoneNumbers',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outId: 'string',
      phoneNumbers: 'string',
      signName: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

