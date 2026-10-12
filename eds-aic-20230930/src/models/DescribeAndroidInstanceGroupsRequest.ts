// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstanceGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify 1 to 20 tag keys.
   * >Notice: A tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * phone
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * >Notice: A tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The billing method.
   * [_single.params.ChargeType.enum. PrePaid]Subscription.
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
   * The name of the instance group. Fuzzy match is supported.
   * 
   * @example
   * Cloud Phone
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The instance version. A value of basic indicates a Wuying Cloud Phone instance, and a value of EnterpriseAi indicates a JVS Mobile instance.
   */
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
   * The maximum number of entries to return on each page in a paging query. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the starting position for the query. If this parameter is left empty, the query starts from the beginning.
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
   * The purchase mode of the cloud phone.
   * 
   * @example
   * standard
   */
  saleMode?: string;
  /**
   * @remarks
   * The sort field. A value of CreationTime indicates the creation time, and a value of ExpiredTime indicates the expiration time.
   */
  sortKey?: string;
  /**
   * @remarks
   * The sort order. A value of ASC indicates ascending order, and a value of DESC indicates descending order.
   */
  sortType?: string;
  /**
   * @remarks
   * The status of the instance group.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the instance group. You can add up to 20 tags to each instance.
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
      sortKey: 'SortKey',
      sortType: 'SortType',
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
      sortKey: 'string',
      sortType: 'string',
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

