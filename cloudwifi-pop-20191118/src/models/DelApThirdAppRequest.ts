// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelApThirdAppRequest extends $dara.Model {
  apAssetId?: number;
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
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mac?: string;
  static names(): { [key: string]: string } {
    return {
      apAssetId: 'ApAssetId',
      appCode: 'AppCode',
      appName: 'AppName',
      id: 'Id',
      mac: 'Mac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apAssetId: 'number',
      appCode: 'string',
      appName: 'string',
      id: 'number',
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

