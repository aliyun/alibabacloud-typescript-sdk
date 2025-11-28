// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceGroupRequest extends $dara.Model {
  authorizedCount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  productKey?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedCount: 'AuthorizedCount',
      productKey: 'ProductKey',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedCount: 'number',
      productKey: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

