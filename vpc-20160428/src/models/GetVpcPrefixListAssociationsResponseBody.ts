// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation extends $dara.Model {
  cidrList?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the prefix list belongs.
   * 
   * @example
   * 153460731706****
   */
  ownerId?: string;
  /**
   * @remarks
   * The prefix list ID.
   * 
   * @example
   * pl-0b7hwu67****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The reason why the association failed.
   * 
   * @example
   * failed
   */
  reason?: string;
  /**
   * @remarks
   * The region ID of the prefix list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * vtb-bp1drpcfz9srr393h****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the associated resource. Valid values:
   * 
   * *   **vpcRouteTable**: virtual private cloud (VPC) route table.
   * *   **trRouteTable**: route table of a transit router.
   * 
   * @example
   * vpcRouteTable
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource associated with the prefix list belongs.
   * 
   * @example
   * 132193271328****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The status of the prefix list. Valid values:
   * 
   * *   **Created**
   * *   **ModifyFailed**
   * *   **Creating**
   * *   **Modifying**
   * *   **Deleting**
   * *   **Deleted**
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidrList: 'CidrList',
      ownerId: 'OwnerId',
      prefixListId: 'PrefixListId',
      reason: 'Reason',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceUid: 'ResourceUid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrList: 'string',
      ownerId: 'string',
      prefixListId: 'string',
      reason: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      resourceUid: 'string',
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

export class GetVpcPrefixListAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the network instances that are associated with the prefix list.
   */
  prefixListAssociation?: GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      prefixListAssociation: 'PrefixListAssociation',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nextToken: 'string',
      prefixListAssociation: { 'type': 'array', 'itemType': GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prefixListAssociation)) {
      $dara.Model.validateArray(this.prefixListAssociation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

