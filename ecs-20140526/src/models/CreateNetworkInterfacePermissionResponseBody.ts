// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission extends $dara.Model {
  /**
   * @remarks
   * The account ID of the Alibaba Cloud Partner (certified ISV).
   * 
   * @example
   * 1234567890
   */
  accountId?: number;
  /**
   * @remarks
   * The elastic network interface ID.
   * 
   * @example
   * eni-bp14v2sdd3v8htln****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The network interface permission ID.
   * 
   * @example
   * eni-perm-bp1cs4lwn56lfb****
   */
  networkInterfacePermissionId?: string;
  /**
   * @remarks
   * The permission for the elastic network interface.
   * 
   * @example
   * InstanceAttach
   */
  permission?: string;
  /**
   * @remarks
   * The state of the network interface permission. Possible values:
   * 
   * - Pending: The permission is being granted.
   * 
   * - Granted: The permission is granted.
   * 
   * - Revoking: The permission is being revoked.
   * 
   * - Revoked: The permission is revoked.
   * 
   * @example
   * Granted
   */
  permissionState?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service that is granted the permission.
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
   * Details of the network interface permission.
   */
  networkInterfacePermission?: CreateNetworkInterfacePermissionResponseBodyNetworkInterfacePermission;
  /**
   * @remarks
   * The request ID.
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

