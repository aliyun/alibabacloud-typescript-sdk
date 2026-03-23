// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApAddressByMacRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mac?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      language: 'Language',
      mac: 'Mac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      language: 'string',
      mac: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

