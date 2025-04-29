// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfacePermissionsResponseBodyNetworkInterfacePermissionsNetworkInterfacePermission extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud partner (a certified ISV) or individual user.
   * 
   * @example
   * 1234567890
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of ENI N.
   * 
   * @example
   * eni-bp14v2sdd3v8htln****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the ENI permission.
   * 
   * @example
   * eni-perm-bp1cs4lwn56lfb****
   */
  networkInterfacePermissionId?: string;
  /**
   * @remarks
   * The ENI permission.
   * 
   * @example
   * InstanceAttach
   */
  permission?: string;
  /**
   * @remarks
   * The status of the ENI permission. Valid values:
   * 
   * *   Pending: The permission is being granted.
   * *   Granted: The permission is granted.
   * *   Revoking: The permission is being revoked.
   * *   Revoked: The permission is revoked.
   * 
   * @example
   * Granted
   */
  permissionState?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfacePermissionId: 'NetworkInterfacePermissionId',
      permission: 'Permission',
      permissionState: 'PermissionState',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      networkInterfaceId: 'string',
      networkInterfacePermissionId: 'string',
      permission: 'string',
      permissionState: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

