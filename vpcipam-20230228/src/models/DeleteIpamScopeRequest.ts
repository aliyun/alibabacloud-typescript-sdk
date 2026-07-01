// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpamScopeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a value for this parameter on your client to make sure that the value is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the request as the ClientToken. The RequestId of each request is different.
   * 
   * @example
   * 88144bdb-b190-4813-a3f5-66cc86694162
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends the request. If the request passes the check, an HTTP 2xx status code is returned and the IPAM scope is deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the IPAM scope.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
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
      ipamScopeId: 'IpamScopeId',
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
      ipamScopeId: 'string',
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

