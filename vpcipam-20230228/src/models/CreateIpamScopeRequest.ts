// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpamScopeRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It must start with a letter and can contain digits, periods (.), underscores (_), and hyphens (-). The tag key cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpamScopeRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Sends a check request but does not create the IPAM scope. The request is checked for valid AccessKeys, RAM user permissions, and required parameters. If the check fails, a corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, a 2xx HTTP status code is returned and the IPAM scope is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the IPAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @remarks
   * The description of the IPAM scope.
   * 
   * The description must be 1 to 256 characters in length and must start with a letter. It cannot start with `http://` or `https://`. The default value is an empty string.
   * 
   * @example
   * test description
   */
  ipamScopeDescription?: string;
  /**
   * @remarks
   * The name of the IPAM scope.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  ipamScopeName?: string;
  /**
   * @remarks
   * The type of the IPAM scope: **private**.
   * 
   * > Currently, you can create only private scopes.
   * 
   * @example
   * private
   */
  ipamScopeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM instance is hosted. Call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to get the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPAM scope belongs.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateIpamScopeRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipamId: 'IpamId',
      ipamScopeDescription: 'IpamScopeDescription',
      ipamScopeName: 'IpamScopeName',
      ipamScopeType: 'IpamScopeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ipamId: 'string',
      ipamScopeDescription: 'string',
      ipamScopeName: 'string',
      ipamScopeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateIpamScopeRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

