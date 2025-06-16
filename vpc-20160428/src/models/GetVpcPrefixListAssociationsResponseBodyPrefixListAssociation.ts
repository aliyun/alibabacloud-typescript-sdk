// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation extends $dara.Model {
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

