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
   * The instance name.
   * 
   * @example
   * name
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * The application management policy ID.
   * 
   * @example
   * amp-shigvudbyeuib****
   */
  appManagePolicyId?: string;
  /**
   * @remarks
   * The user ID assigned to the instance, which is the China Wuying convenience account ID.
   * 
   * @example
   * user
   */
  authorizedUserId?: string;
  /**
   * @remarks
   * <props="china">The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/2807298.html) to query the list of regions that support purchasing cloud phones of different editions (Instance Edition/Matrix Edition).
   * 
   * <props="intl">The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/2807298.html) to query the list of regions that support purchasing cloud phones..
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The instance group ID.
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
   * The instance group name.
   * 
   * @example
   * test
   */
  instanceGroupName?: string;
  instanceVersion?: string;
  /**
   * @remarks
   * The ID of the bound key pair.
   * 
   * @example
   * kp-5hh431emkpuoi****
   */
  keyPairId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that indicates the position from which to start reading. Leave this parameter empty to start reading from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @remarks
   * <props="china">The matrix ID.
   * <props="intl">This parameter is not publicly available..
   * 
   * @example
   * node_id
   */
  nodeId?: string;
  /**
   * @remarks
   * <props="china">The name of the matrix.
   * <props="intl">This parameter is not publicly available..
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @remarks
   * The cloud phone network ID.
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
   * The public network rate limiting rule group ID. The rate limiting rule for instances in the basic shared network.
   */
  qosRuleIds?: string[];
  /**
   * @remarks
   * The sales mode.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  sortKey?: string;
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

