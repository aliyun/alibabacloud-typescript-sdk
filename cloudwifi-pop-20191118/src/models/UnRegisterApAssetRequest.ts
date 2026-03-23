// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnRegisterApAssetRequest extends $dara.Model {
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
  assetApgroupId?: number;
  category?: number;
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mac?: string;
  serialNo?: string;
  useFor?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      assetApgroupId: 'AssetApgroupId',
      category: 'Category',
      id: 'Id',
      mac: 'Mac',
      serialNo: 'SerialNo',
      useFor: 'UseFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      assetApgroupId: 'number',
      category: 'number',
      id: 'number',
      mac: 'string',
      serialNo: 'string',
      useFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

