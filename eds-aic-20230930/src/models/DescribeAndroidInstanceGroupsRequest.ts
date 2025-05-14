// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstanceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The IDs of the instance groups.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The name of the instance group. Instance groups support fuzzy search by name.
   * 
   * @example
   * defaultInstanceGroup
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * kp-5htf0ymsrnb7q****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Value range: 0 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-1b77w6xrqfubi****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The purchase mode of cloud phone instances.
   * 
   * Valid values:
   * 
   * *   Instance (default): the instance group mode.
   * *   Node: the matrix mode [whitelisted].
   * 
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @remarks
   * The status of the instance group.
   * 
   * Valid values:
   * 
   * *   UPDATING_FAILED: The image update for the instance group failed.
   * *   FAILED: The instance group failed to be created.
   * *   RUNNING: The instance group is available.
   * *   EXPIRED: The instance group expired.
   * *   DELETING: The instance group is being deleted.
   * *   DELETED: The instance group is deleted.
   * *   UPDATING: The instance group is undergoing an image update.
   * *   CREATING: The instance group is being created.
   * 
   * @example
   * CREATING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupName: 'InstanceGroupName',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      saleMode: 'SaleMode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupName: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: 'string',
      saleMode: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

