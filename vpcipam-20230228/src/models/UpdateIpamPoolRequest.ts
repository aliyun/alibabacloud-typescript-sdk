// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpamPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The new default network mask for the IPAM pool.
   * 
   * Valid values: **0 to 32**.
   * 
   * @example
   * 28
   */
  allocationDefaultCidrMask?: number;
  /**
   * @remarks
   * The new maximum network mask for the IPAM pool.
   * 
   * Valid values: **0 to 32**.
   * 
   * @example
   * 32
   */
  allocationMaxCidrMask?: number;
  /**
   * @remarks
   * The new minimum network mask for the IPAM pool.
   * 
   * Valid values: **0 to 32**.
   * 
   * @example
   * 8
   */
  allocationMinCidrMask?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto import feature for the address pool.
   * 
   * @example
   * true
   */
  autoImport?: boolean;
  /**
   * @remarks
   * Specifies whether to clear the default network mask of the IPAM pool. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  clearAllocationDefaultCidrMask?: boolean;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. Generate a unique token for each request. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request without modifying the IPAM pool. The system checks for required parameters, request format, and service limits. If the check fails, an error message is returned. If the check succeeds, the \\`DryRunOperation\\` error code is returned.
   * 
   * - **false** (default): Sends a normal request. After the request passes the check, a 2xx HTTP status code is returned and the IPAM pool is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new description of the IPAM pool.
   * 
   * The description must be 1 to 256 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. If you do not specify this parameter, the value is not changed. By default, the value is empty.
   * 
   * @example
   * test description
   */
  ipamPoolDescription?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The new name of the IPAM pool.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  ipamPoolName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the hosted region of the IPAM. Call [DescribeRegions](https://help.aliyun.com/document_detail/448570.html) to get the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationDefaultCidrMask: 'AllocationDefaultCidrMask',
      allocationMaxCidrMask: 'AllocationMaxCidrMask',
      allocationMinCidrMask: 'AllocationMinCidrMask',
      autoImport: 'AutoImport',
      clearAllocationDefaultCidrMask: 'ClearAllocationDefaultCidrMask',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamPoolDescription: 'IpamPoolDescription',
      ipamPoolId: 'IpamPoolId',
      ipamPoolName: 'IpamPoolName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationDefaultCidrMask: 'number',
      allocationMaxCidrMask: 'number',
      allocationMinCidrMask: 'number',
      autoImport: 'boolean',
      clearAllocationDefaultCidrMask: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      ipamPoolDescription: 'string',
      ipamPoolId: 'string',
      ipamPoolName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

