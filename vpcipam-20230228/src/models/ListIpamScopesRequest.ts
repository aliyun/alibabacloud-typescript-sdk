// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamScopesRequestTags } from "./ListIpamScopesRequestTags";


export class ListIpamScopesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPAM.
   * 
   * @example
   * ipam-ccxbnsbhew0d6t****
   */
  ipamId?: string;
  /**
   * @remarks
   * The IDs of IPAM scopes.
   */
  ipamScopeIds?: string[];
  /**
   * @remarks
   * The name of the IPAM scope.
   * 
   * It must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  ipamScopeName?: string;
  /**
   * @remarks
   * The type of the IPAM scope. Valid values:
   * 
   * *   **public**
   * *   **private**
   * 
   * @example
   * private
   */
  ipamScopeType?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPAM instance is hosted. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the IPAM scope.
   * 
   * @example
   * rg-aek2sermdd6****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag list.
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

