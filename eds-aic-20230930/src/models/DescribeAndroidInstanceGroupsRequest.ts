// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstanceGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify 1 to 20 tag keys.
   * >Notice: The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://..
   * 
   * @example
   * phone
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * >Notice: The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`..
   * 
   * @example
   * 2025
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

export class DescribeAndroidInstanceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing type.
   * [_single.params.ChargeType.enum. PrePaid]Subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The list of instance group IDs.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The instance group name. Fuzzy match is supported.
   * 
   * @example
   * Cloud phone
   */
  instanceGroupName?: string;
  instanceVersion?: string;
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
   * The maximum number of entries per page for a paged query. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that indicates the position from which the current read operation starts. Leave this parameter empty to read from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-1b77w6xrqfubi****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The purchase mode of the cloud phone.
   * 
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @remarks
   * The instance group status.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance group. You can bind up to 20 tags to each instance.
   */
  tags?: DescribeAndroidInstanceGroupsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupName: 'InstanceGroupName',
      instanceVersion: 'InstanceVersion',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      saleMode: 'SaleMode',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      chargeType: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupName: 'string',
      instanceVersion: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: 'string',
      saleMode: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeAndroidInstanceGroupsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
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

