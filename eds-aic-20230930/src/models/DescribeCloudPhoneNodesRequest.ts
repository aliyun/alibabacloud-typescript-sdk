// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * phone
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class DescribeCloudPhoneNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the bandwidth plan.
   * 
   * @example
   * cbwp-bp17psa7fhxqmm*****
   */
  bandwidthPackageId?: string;
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
   * The billing method. Only the subscription billing method is supported.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page in a paging query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token for the next query. If a query does not return all results, the returned NextToken is not empty. You can use the returned NextToken in a subsequent query to obtain more results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of the cloud phone matrices.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The name of the cloud phone matrix.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of names used to filter cloud phone matrices.
   */
  nodeNameList?: string[];
  /**
   * @remarks
   * The specifications of the cloud phone matrix.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @remarks
   * The field used for sorting. A value of CreationTime indicates the creation time, and a value of ExpiredTime indicates the expiration time.
   * 
   * @example
   * CreationTime
   */
  sortKey?: string;
  /**
   * @remarks
   * The sort order. A value of ASC indicates ascending order, and a value of DESC indicates descending order.
   * 
   * @example
   * ASC
   */
  sortType?: string;
  /**
   * @remarks
   * The status of the cloud phone matrix.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The tags of the node.
   */
  tags?: DescribeCloudPhoneNodesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeIds: 'NodeIds',
      nodeName: 'NodeName',
      nodeNameList: 'NodeNameList',
      serverType: 'ServerType',
      sortKey: 'SortKey',
      sortType: 'SortType',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      bizRegionId: 'string',
      chargeType: 'string',
      maxResults: 'string',
      nextToken: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeName: 'string',
      nodeNameList: { 'type': 'array', 'itemType': 'string' },
      serverType: 'string',
      sortKey: 'string',
      sortType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCloudPhoneNodesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.nodeNameList)) {
      $dara.Model.validateArray(this.nodeNameList);
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

