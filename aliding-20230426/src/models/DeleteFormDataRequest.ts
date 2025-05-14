// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFormDataRequest extends $dara.Model {
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
   * FORM_INST_12345
   */
  formInstanceId?: string;
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
      formInstanceId: 'FormInstanceId',
      language: 'Language',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formInstanceId: 'string',
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

