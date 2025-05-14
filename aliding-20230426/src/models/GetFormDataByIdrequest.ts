// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFormDataByIDRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKT0MFBEBTDO8T7SLVP
   */
  appType?: string;
  /**
   * @example
   * FORM_INST_12345
   */
  id?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      id: 'Id',
      language: 'Language',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      id: 'string',
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

