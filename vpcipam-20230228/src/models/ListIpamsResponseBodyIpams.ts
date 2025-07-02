// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpamsResponseBodyIpamsTags } from "./ListIpamsResponseBodyIpamsTags";


export class ListIpamsResponseBodyIpams extends $dara.Model {
  /**
   * @remarks
   * The time when the IPAM was created.
   * 
   * @example
   * 2022-07-01T02:05:23Z
   */
  createTime?: string;
  /**
   * @remarks
   * Default resource discovery association ID.
   * 
   * @example
   * ipam-res-disco-assoc-jt5fac8twugdbbgip****
   */
  defaultResourceDiscoveryAssociationId?: string;
  /**
   * @remarks
   * Default resource discovery instance ID.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  defaultResourceDiscoveryId?: string;
  /**
   * @remarks
   * The description of the IPAM.
   * 
   * @example
   * test description
   */
  ipamDescription?: string;
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
   * The name of the IPAM.
   * 
   * @example
   * test
   */
  ipamName?: string;
  /**
   * @remarks
   * The status of the IPAM. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  ipamStatus?: string;
  /**
   * @remarks
   * The effective regions of the IPAM.
   */
  operatingRegionList?: string[];
  /**
   * @remarks
   * The Alibaba Cloud account that owns the IPAM.
   * 
   * @example
   * 1210123456******
   */
  ownerId?: number;
  /**
   * @remarks
   * The default private scope created by the system after the IPAM is created.
   * 
   * @example
   * ipam-scope-okoerbco6unqfr****
   */
  privateDefaultScopeId?: string;
  /**
   * @remarks
   * The default public scope created by the system after the IPAM is created.
   * 
   * @example
   * ipam-scope-ovb76p1g1m19dr****
   */
  publicDefaultScopeId?: string;
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
   * Number of resource discovery associations.
   * 
   * @example
   * 1
   */
  resourceDiscoveryAssociationCount?: number;
  /**
   * @remarks
   * The resource group ID of the IPAM.
   * 
   * @example
   * rg-aek2dbprgpt****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of IPAM scopes. Value: **2 to 5**.
   * 
   * @example
   * 2
   */
  scopeCount?: number;
  /**
   * @remarks
   * The tag list.
   */
  tags?: ListIpamsResponseBodyIpamsTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultResourceDiscoveryAssociationId: 'DefaultResourceDiscoveryAssociationId',
      defaultResourceDiscoveryId: 'DefaultResourceDiscoveryId',
      ipamDescription: 'IpamDescription',
      ipamId: 'IpamId',
      ipamName: 'IpamName',
      ipamStatus: 'IpamStatus',
      operatingRegionList: 'OperatingRegionList',
      ownerId: 'OwnerId',
      privateDefaultScopeId: 'PrivateDefaultScopeId',
      publicDefaultScopeId: 'PublicDefaultScopeId',
      regionId: 'RegionId',
      resourceDiscoveryAssociationCount: 'ResourceDiscoveryAssociationCount',
      resourceGroupId: 'ResourceGroupId',
      scopeCount: 'ScopeCount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultResourceDiscoveryAssociationId: 'string',
      defaultResourceDiscoveryId: 'string',
      ipamDescription: 'string',
      ipamId: 'string',
      ipamName: 'string',
      ipamStatus: 'string',
      operatingRegionList: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      privateDefaultScopeId: 'string',
      publicDefaultScopeId: 'string',
      regionId: 'string',
      resourceDiscoveryAssociationCount: 'number',
      resourceGroupId: 'string',
      scopeCount: 'number',
      tags: { 'type': 'array', 'itemType': ListIpamsResponseBodyIpamsTags },
    };
  }

  validate() {
    if(Array.isArray(this.operatingRegionList)) {
      $dara.Model.validateArray(this.operatingRegionList);
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

