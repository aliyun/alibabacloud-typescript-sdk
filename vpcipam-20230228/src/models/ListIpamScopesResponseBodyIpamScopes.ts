// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamScopesResponseBodyIpamScopesTags } from "./ListIpamScopesResponseBodyIpamScopesTags";


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
   * The ID of the IPAM.
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
   * The ID of the IPAM scope.
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
   * *   **public**
   * *   **private**
   * 
   * @example
   * private
   */
  ipamScopeType?: string;
  /**
   * @remarks
   * Indicates whether the scope is the default scope. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account that owns the IPAM scope.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The number of pools in the IPAM scope.
   * 
   * @example
   * 2
   */
  poolCount?: number;
  /**
   * @remarks
   * The region ID of the IPAM.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the IPAM scope. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
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

