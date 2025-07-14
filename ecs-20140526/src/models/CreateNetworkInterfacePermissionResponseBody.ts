// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud partner (a certified ISV).
   * 
   * @example
   * 1234567890
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-bp14v2sdd3v8htln****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ID of the permission on the ENI.
   * 
   * @example
   * eni-perm-bp1cs4lwn56lfb****
   */
  networkInterfacePermissionId?: string;
  /**
   * @remarks
   * The permission on the ENI.
   * 
   * @example
   * InstanceAttach
   */
  permission?: string;
  /**
   * @remarks
   * The state of the permission on the ENI. Valid values:
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

export class CreateNetworkInterfacePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about permissions on the ENI.
   */
  networkInterfacePermission?: CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FCD3DEF-63D3-4605-A818-805C8BD7DB87
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfacePermission: 'NetworkInterfacePermission',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfacePermission: CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkInterfacePermission && typeof (this.networkInterfacePermission as any).validate === 'function') {
      (this.networkInterfacePermission as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

