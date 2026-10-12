// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class DescribeAndroidInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * The ID of the application control rule.
   * 
   * @example
   * amp-shigvudbyeuib****
   */
  appManagePolicyId?: string;
  /**
   * @remarks
   * The ID of the user assigned to the instance, which is the Wuying convenience user ID.
   * 
   * @example
   * user
   */
  authorizedUserId?: string;
  /**
   * @remarks
   * <props="china">The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2807298.html) operation to query the list of regions where different versions of cloud phones (instance edition and matrix edition) are available for purchase.
   * 
   * <props="intl">The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2807298.html) operation to query the list of regions where cloud phones are available for purchase.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-25nt4kk9whjh****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The list of instance group IDs.
   */
  instanceGroupIds?: string[];
  /**
   * @remarks
   * The name of the instance group.
   * 
   * @example
   * test
   */
  instanceGroupName?: string;
  /**
   * @remarks
   * The instance version. Default value: basic, which queries Wuying cloud phone instances.
   * 
   * @example
   * EnterpriseAi
   */
  instanceVersion?: string;
  /**
   * @remarks
   * The ID of the associated key pair.
   * 
   * @example
   * kp-5hh431emkpuoi****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for paging. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the starting position for the next query. An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * <props="china">The matrix ID.
   * <props="intl">This parameter is not publicly available.
   * 
   * @example
   * node_id
   */
  nodeId?: string;
  /**
   * @remarks
   * <props="china">The name of the matrix.
   * <props="intl">This parameter is not publicly available.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the cloud phone network.
   */
  officeSiteIds?: string[];
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 10.0.162.136
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the public network throttling rule group. This specifies the throttling rules for instances in the basic shared network.
   */
  qosRuleIds?: string[];
  /**
   * @remarks
   * The sale mode.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  /**
   * @remarks
   * The sort key used when querying resources.
   * 
   * This parameter must be used together with SortType. Valid values: CreationTime and ExpiredTime.
   * 
   * If you set this parameter to CreationTime, the resources are sorted by creation time. If you set this parameter to ExpiredTime, the resources are sorted by expiration time.
   * 
   * By default, resources are sorted in descending order of creation time.
   * 
   * @example
   * CreationTime
   */
  sortKey?: string;
  /**
   * @remarks
   * The sort order. Default value: DESC. Valid values:
   * - ASC: ascending order
   * - DESC: descending order
   * 
   * @example
   * ASC
   */
  sortType?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: DescribeAndroidInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      androidInstanceName: 'AndroidInstanceName',
      appManagePolicyId: 'AppManagePolicyId',
      authorizedUserId: 'AuthorizedUserId',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      instanceGroupId: 'InstanceGroupId',
      instanceGroupIds: 'InstanceGroupIds',
      instanceGroupName: 'InstanceGroupName',
      instanceVersion: 'InstanceVersion',
      keyPairId: 'KeyPairId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      officeSiteIds: 'OfficeSiteIds',
      privateIpAddress: 'PrivateIpAddress',
      qosRuleIds: 'QosRuleIds',
      saleMode: 'SaleMode',
      sortKey: 'SortKey',
      sortType: 'SortType',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      androidInstanceName: 'string',
      appManagePolicyId: 'string',
      authorizedUserId: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      instanceGroupId: 'string',
      instanceGroupIds: { 'type': 'array', 'itemType': 'string' },
      instanceGroupName: 'string',
      instanceVersion: 'string',
      keyPairId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeId: 'string',
      nodeName: 'string',
      officeSiteIds: { 'type': 'array', 'itemType': 'string' },
      privateIpAddress: 'string',
      qosRuleIds: { 'type': 'array', 'itemType': 'string' },
      saleMode: 'string',
      sortKey: 'string',
      sortType: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeAndroidInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    if(Array.isArray(this.instanceGroupIds)) {
      $dara.Model.validateArray(this.instanceGroupIds);
    }
    if(Array.isArray(this.officeSiteIds)) {
      $dara.Model.validateArray(this.officeSiteIds);
    }
    if(Array.isArray(this.qosRuleIds)) {
      $dara.Model.validateArray(this.qosRuleIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

