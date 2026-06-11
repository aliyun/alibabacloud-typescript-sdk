// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceName?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deviceName: 'DeviceName',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deviceName: 'string',
      remark: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

