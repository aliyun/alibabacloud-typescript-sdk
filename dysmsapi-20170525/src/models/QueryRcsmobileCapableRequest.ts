// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRCSMobileCapableRequest extends $dara.Model {
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
   * 示例值示例值
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
  static names(): { [key: string]: string } {
    return {
      phoneNumbers: 'PhoneNumbers',
      signName: 'SignName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumbers: 'string',
      signName: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

