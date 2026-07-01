// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamScopesResponseBodyIpamScopesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * FinanceDept
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

export class ListIpamScopesResponseBodyIpamScopes extends $dara.Model {
  /**
   * @remarks
   * The time when the IPAM scope was created.
   * 
   * @example
   * 2022-04-18T03:12:37Z
   */
  createTime?: string;
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
   * The description of the IPAM scope.
   * 
   * @example
   * test description
   */
  ipamScopeDescription?: string;
  /**
   * @remarks
   * The instance ID of the IPAM scope.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The name of the IPAM scope.
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
   * Indicates whether the scope is the default scope. Valid values:
   * 
   * - **true**: The scope is the default scope.
   * 
   * - **false**: The scope is not the default scope.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the IPAM scope belongs.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The number of IPAM pools in the IPAM scope.
   * 
   * @example
   * 2
   */
  poolCount?: number;
  /**
   * @remarks
   * The region ID of the IPAM scope.
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
  /**
   * @remarks
   * The status of the IPAM scope. Valid values:
   * 
   * - **Creating**: The IPAM scope is being created.
   * 
   * - **Created**: The IPAM scope is created.
   * 
   * - **Deleting**: The IPAM scope is being deleted.
   * 
   * - **Deleted**: The IPAM scope is deleted.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListIpamScopesResponseBodyIpamScopesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ipamId: 'IpamId',
      ipamScopeDescription: 'IpamScopeDescription',
      ipamScopeId: 'IpamScopeId',
      ipamScopeName: 'IpamScopeName',
      ipamScopeType: 'IpamScopeType',
      isDefault: 'IsDefault',
      ownerId: 'OwnerId',
      poolCount: 'PoolCount',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ipamId: 'string',
      ipamScopeDescription: 'string',
      ipamScopeId: 'string',
      ipamScopeName: 'string',
      ipamScopeType: 'string',
      isDefault: 'boolean',
      ownerId: 'number',
      poolCount: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListIpamScopesResponseBodyIpamScopesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamScopesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * A list of IPAM scopes.
   */
  ipamScopes?: ListIpamScopesResponseBodyIpamScopes[];
  /**
   * @remarks
   * The maximum number of entries returned per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next page of results. Valid values:
   * 
   * - If **NextToken** is empty, no next page exists.
   * 
   * - If a value is returned for **NextToken**, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8859C501-97E7-53D4-B94B-2A9E16003B22
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamScopes: 'IpamScopes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamScopes: { 'type': 'array', 'itemType': ListIpamScopesResponseBodyIpamScopes },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamScopes)) {
      $dara.Model.validateArray(this.ipamScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

