// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApThirdAppRequest extends $dara.Model {
  addStyle?: number;
  apAssetId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  appData?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  category?: number;
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mac?: string;
  thirdAppName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addStyle: 'AddStyle',
      apAssetId: 'ApAssetId',
      appCode: 'AppCode',
      appData: 'AppData',
      appName: 'AppName',
      category: 'Category',
      id: 'Id',
      mac: 'Mac',
      thirdAppName: 'ThirdAppName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addStyle: 'number',
      apAssetId: 'number',
      appCode: 'string',
      appData: 'string',
      appName: 'string',
      category: 'number',
      id: 'number',
      mac: 'string',
      thirdAppName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

