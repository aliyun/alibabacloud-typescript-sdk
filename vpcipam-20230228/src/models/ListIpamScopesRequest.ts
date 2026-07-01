// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamScopesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It must start with a letter. It can contain digits, periods (.), underscores (_), and hyphens (-). The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot contain `http://` or `https://`.
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

export class ListIpamScopesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the IPAM.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @remarks
   * The instance IDs of the IPAM scopes.
   */
  ipamScopeIds?: string[];
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
   * The type of the IPAM scope. Valid values:
   * 
   * - **public**: the public scope.
   * 
   * - **private**: the private scope.
   * 
   * @example
   * private
   */
  ipamScopeType?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * - You do not need to specify this parameter for the first query.
   * 
   * - For a subsequent query, set this parameter to the NextToken value returned from the last query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM instance is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListIpamScopesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      ipamId: 'IpamId',
      ipamScopeIds: 'IpamScopeIds',
      ipamScopeName: 'IpamScopeName',
      ipamScopeType: 'IpamScopeType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamId: 'string',
      ipamScopeIds: { 'type': 'array', 'itemType': 'string' },
      ipamScopeName: 'string',
      ipamScopeType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamScopesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ipamScopeIds)) {
      $dara.Model.validateArray(this.ipamScopeIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

