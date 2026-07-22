// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudPhoneNodesRequestTags extends $dara.Model {
  key?: string;
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
   * The billing type. Only subscription is supported.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token for the next query. If the results of a query are not completely returned, the returned NextToken is not empty. You can pass the returned NextToken in the next request to continue the query.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of cloud phone matrix IDs.
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
  nodeNameList?: string[];
  /**
   * @remarks
   * The specifications of the cloud phone matrix.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  sortKey?: string;
  sortType?: string;
  /**
   * @remarks
   * The status of the cloud phone matrix.
   * 
   * @example
   * CREATING
   */
  status?: string;
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

