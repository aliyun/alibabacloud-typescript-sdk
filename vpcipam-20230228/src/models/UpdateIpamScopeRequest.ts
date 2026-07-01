// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpamScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a value for this parameter that is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the request as the ClientToken. The RequestId of each request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run. The system checks the request for potential issues, including missing required parameters, incorrect request format, and instance status. If the request fails the dry run, an error is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * 
   * - **false** (Default): Sends a normal request. After the request passes the check, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the IPAM scope.
   * 
   * The description must be 1 to 256 characters long. It must start with a letter and cannot start with `http://` or `https://`. If you do not specify this parameter, the value is not modified.
   * 
   * @example
   * test description
   */
  ipamScopeDescription?: string;
  /**
   * @remarks
   * The ID of the IPAM scope.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The name of the IPAM scope.
   * 
   * The name must be 1 to 128 characters long and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  ipamScopeName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM is hosted. Call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to get the region ID.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamScopeDescription: 'IpamScopeDescription',
      ipamScopeId: 'IpamScopeId',
      ipamScopeName: 'IpamScopeName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamScopeDescription: 'string',
      ipamScopeId: 'string',
      ipamScopeName: 'string',
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

