// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation extends $dara.Model {
  /**
   * @remarks
   * The list of CIDR blocks in the prefix list that are effective for the associated resource.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidrList?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the prefix list.
   * 
   * @example
   * 153460731706****
   */
  ownerId?: string;
  /**
   * @remarks
   * The instance ID of the prefix list.
   * 
   * @example
   * pl-0b7hwu67****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The reason for the association failure.
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
   * - **vpcRouteTable**: VPC route table.
   * - **trRouteTable**: transit router route table.
   * 
   * @example
   * vpcRouteTable
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource associated with the prefix list.
   * 
   * @example
   * 132193271328****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The association status of the prefix list. Valid values:
   * 
   * - **Created**: The association is created.
   * - **ModifyFailed**: The association is not updated to the latest version.
   * - **Creating**: The association is being created.
   * - **Modifying**: The association is being modified.
   * - **Deleting**: The association is being deleted.
   * - **Deleted**: The association is deleted.
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
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If **NextToken** is empty, no subsequent query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The association information of the prefix list.
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
   * The total number of entries returned.
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

