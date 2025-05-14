// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNavigationByFormTypeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKTxxx
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * receipt
   */
  formType?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formType: 'FormType',
      language: 'Language',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formType: 'string',
      language: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

