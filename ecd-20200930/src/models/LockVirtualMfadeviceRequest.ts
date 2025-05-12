// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockVirtualMFADeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device, which is a unique identifier.
   * 
   * You can call the [DescribeVirtualMFADevices](https://help.aliyun.com/document_detail/206210.html) operation to query the serial number of the virtual MFA device bound to AD users.
   * 
   * This parameter is required.
   * 
   * @example
   * a25f297f-f2e1-4a44-bbf1-5f48a6e5****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

