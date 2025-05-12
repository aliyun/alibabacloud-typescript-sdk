// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualMFADevicesResponseBodyVirtualMFADevices extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failures to bind the virtual MFA device, or the number of failures on the verification of the virtual MFA device.
   * 
   * @example
   * 1
   */
  consecutiveFails?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * cn-hangzhou+dir-gx2x1dhsmu52rd****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the AD user who uses the virtual MFA device.
   * 
   * @example
   * usertest
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the virtual MFA device was started. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-20T14:52:28Z
   */
  gmtEnabled?: string;
  /**
   * @remarks
   * The time when a locked virtual MFA device was automatically unlocked. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-21T15:21:28Z
   */
  gmtUnlock?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * cn-hangzhou+dir-269345****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device, which is a unique identifier.
   * 
   * @example
   * a25f297f-f2e1-4a44-bbf1-5f48a6e5****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The status of the virtual MFA device.
   * 
   * Valid values:
   * 
   * *   LOCKED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   UNBOUND
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NORMAL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveFails: 'ConsecutiveFails',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      gmtEnabled: 'GmtEnabled',
      gmtUnlock: 'GmtUnlock',
      officeSiteId: 'OfficeSiteId',
      serialNumber: 'SerialNumber',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveFails: 'number',
      directoryId: 'string',
      endUserId: 'string',
      gmtEnabled: 'string',
      gmtUnlock: 'string',
      officeSiteId: 'string',
      serialNumber: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

