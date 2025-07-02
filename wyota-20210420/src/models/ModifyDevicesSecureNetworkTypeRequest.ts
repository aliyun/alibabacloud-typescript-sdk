// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDevicesSecureNetworkTypeRequest extends $dara.Model {
  allDevices?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  secureNetworkType?: string;
  serialNos?: string;
  static names(): { [key: string]: string } {
    return {
      allDevices: 'AllDevices',
      secureNetworkType: 'SecureNetworkType',
      serialNos: 'SerialNos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDevices: 'number',
      secureNetworkType: 'string',
      serialNos: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

