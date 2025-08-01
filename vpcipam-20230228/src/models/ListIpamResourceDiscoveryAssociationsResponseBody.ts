// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceDiscoveryAssociationsResponseBodyIpamResourceDiscoveryAssociations extends $dara.Model {
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
   * The ID of resource discovery instance.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource discovery belongs.
   * 
   * @example
   * 1210123456******
   */
  ipamResourceDiscoveryOwnerId?: string;
  /**
   * @remarks
   * The status of the resource discovery instance. Valid values:
   * 
   * *   **Creating**
   * *   **Created**
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  ipamResourceDiscoveryStatus?: string;
  /**
   * @remarks
   * The type of resource discovery. Valid values:
   * 
   * *   **system**: default resource discovery created by the system.
   * *   **custom**: custom resource discovery created by users.
   * 
   * @example
   * custom
   */
  ipamResourceDiscoveryType?: string;
  /**
   * @remarks
   * The status of the associations. Valid values:
   * 
   * *   **Created**
   * *   **Deleted**
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ipamId: 'IpamId',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      ipamResourceDiscoveryOwnerId: 'IpamResourceDiscoveryOwnerId',
      ipamResourceDiscoveryStatus: 'IpamResourceDiscoveryStatus',
      ipamResourceDiscoveryType: 'IpamResourceDiscoveryType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamId: 'string',
      ipamResourceDiscoveryId: 'string',
      ipamResourceDiscoveryOwnerId: 'string',
      ipamResourceDiscoveryStatus: 'string',
      ipamResourceDiscoveryType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamResourceDiscoveryAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries on each page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of associations.
   */
  ipamResourceDiscoveryAssociations?: ListIpamResourceDiscoveryAssociationsResponseBodyIpamResourceDiscoveryAssociations[];
  /**
   * @remarks
   * The maximum number of entries on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, there is no next page.
   * *   If a value of **NextToken** is returned, it indicates the token that is used for the next query.
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
   * F28A239E-F88D-500E-ADE7-FA5E8CA3A170
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamResourceDiscoveryAssociations: 'IpamResourceDiscoveryAssociations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamResourceDiscoveryAssociations: { 'type': 'array', 'itemType': ListIpamResourceDiscoveryAssociationsResponseBodyIpamResourceDiscoveryAssociations },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamResourceDiscoveryAssociations)) {
      $dara.Model.validateArray(this.ipamResourceDiscoveryAssociations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

