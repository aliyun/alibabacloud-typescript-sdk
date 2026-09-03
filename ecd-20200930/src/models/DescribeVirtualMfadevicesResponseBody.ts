// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualMFADevicesResponseBodyVirtualMFADevicesAdUser extends $dara.Model {
  /**
   * @remarks
   * The display name of the AD account.
   * 
   * @example
   * aduser
   */
  displayName?: string;
  /**
   * @remarks
   * The new display name of the user.
   * 
   * @example
   * 张三
   */
  displayNameNew?: string;
  /**
   * @remarks
   * The username of the AD account.
   * 
   * @example
   * aduser
   */
  endUser?: string;
  /**
   * @remarks
   * The user principal name (UPN).
   * 
   * @example
   * alice@example.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      displayNameNew: 'DisplayNameNew',
      endUser: 'EndUser',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      displayNameNew: 'string',
      endUser: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBodyVirtualMFADevices extends $dara.Model {
  /**
   * @remarks
   * The AD domain user information.
   */
  adUser?: DescribeVirtualMFADevicesResponseBodyVirtualMFADevicesAdUser;
  /**
   * @remarks
   * The number of consecutive failures to bind or authenticate the virtual MFA device.
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
   * The username of the AD account that uses the virtual MFA device.
   * 
   * @example
   * usertest
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the virtual MFA device was enabled. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-20T14:52:28Z
   */
  gmtEnabled?: string;
  /**
   * @remarks
   * The automatic unlock time after the virtual MFA device is locked. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-12-21T15:21:28Z
   */
  gmtUnlock?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-269345****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device.
   * 
   * @example
   * a25f297f-f2e1-4a44-bbf1-5f48a6e5****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The status of the virtual MFA device.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adUser: 'AdUser',
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
      adUser: DescribeVirtualMFADevicesResponseBodyVirtualMFADevicesAdUser,
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
    if(this.adUser && typeof (this.adUser as any).validate === 'function') {
      (this.adUser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL23as
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB550AAB-FB36-4A91-93F6-F4374AF65403
   */
  requestId?: string;
  /**
   * @remarks
   * The information about virtual MFA devices.
   */
  virtualMFADevices?: DescribeVirtualMFADevicesResponseBodyVirtualMFADevices[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      virtualMFADevices: 'VirtualMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      virtualMFADevices: { 'type': 'array', 'itemType': DescribeVirtualMFADevicesResponseBodyVirtualMFADevices },
    };
  }

  validate() {
    if(Array.isArray(this.virtualMFADevices)) {
      $dara.Model.validateArray(this.virtualMFADevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

