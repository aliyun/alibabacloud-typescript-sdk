// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterApAssetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apGroupUUId?: string;
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
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  static names(): { [key: string]: string } {
    return {
      apGroupUUId: 'ApGroupUUId',
      appCode: 'AppCode',
      appName: 'AppName',
      id: 'Id',
      mac: 'Mac',
      serialNo: 'SerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apGroupUUId: 'string',
      appCode: 'string',
      appName: 'string',
      id: 'number',
      mac: 'string',
      serialNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

