// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamsResponseBodyIpamsTags extends $dara.Model {
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

export class ListIpamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The IPAMs.
   */
  ipams?: ListIpamsResponseBodyIpams[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
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
   * 23CA0A0B-B0F5-5495-B355-7D9A9203A46B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipams: 'Ipams',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipams: { 'type': 'array', 'itemType': ListIpamsResponseBodyIpams },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipams)) {
      $dara.Model.validateArray(this.ipams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

