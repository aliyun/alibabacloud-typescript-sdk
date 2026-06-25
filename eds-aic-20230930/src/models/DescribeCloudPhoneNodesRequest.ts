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
   * The ID of the bandwidth plan instance.
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
   * The maximum number of entries to return on each page for a paged query. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The token for the next query. If a query does not return all results, NextToken is not empty. Use the returned NextToken in your next query to continue.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of Cloud Phone matrix IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The name of the Cloud Phone matrix.
   * 
   * @example
   * node_name
   */
  nodeName?: string;
  nodeNameList?: string[];
  /**
   * @remarks
   * The instance type of the Cloud Phone matrix.
   * 
   * @example
   * cpm.gx7.10xlarge
   */
  serverType?: string;
  /**
   * @remarks
   * The status of the Cloud Phone matrix.
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

