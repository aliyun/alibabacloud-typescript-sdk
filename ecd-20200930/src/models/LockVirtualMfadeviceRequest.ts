// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockVirtualMFADeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device, which is also its unique identifier. You can call [DescribeVirtualMFADevices](~~DescribeVirtualMFADevices~~) to query the serial number of the virtual MFA device bound to an AD account.
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

