// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverEndpointsResponseBodyEndpointsIpConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone where the vSwitch is located.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The subnet mask, which is the IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The IP address within the CIDR block.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-0jlgeyq4oazkh5xue****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2020-07-13 10:36:26
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the endpoint was created. This is a UNIX timestamp.
   * 
   * @example
   * 1594607786000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The list of source IP addresses for outbound traffic.
   */
  ipConfigs?: DescribeResolverEndpointsResponseBodyEndpointsIpConfigs[];
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * Endpoint-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-0jld3m9yq7l2cw12****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the endpoint. Description:
   * 
   * - SUCCESS: The endpoint is working as expected.
   * 
   * - INIT: The endpoint is being created.
   * 
   * - FAILED: The endpoint failed to be created.
   * 
   * - CHANGE_INIT: The endpoint is being modified.
   * 
   * - CHANGE_FAILED: The endpoint failed to be modified.
   * 
   * - EXCEPTION: The endpoint is not working as expected.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the endpoint was last updated.
   * 
   * @example
   * 2020-07-13 10:38:24
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the endpoint was last updated. This is a UNIX timestamp.
   * 
   * @example
   * 1594607904000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The ID of the outbound VPC. All outbound DNS query traffic from the Resolver is forwarded through this VPC.
   * 
   * @example
   * vpc-0jlxhpfnj5bfu0bsd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the outbound VPC.
   * 
   * @example
   * vpc-test-name
   */
  vpcName?: string;
  /**
   * @remarks
   * The ID of the region where the outbound VPC is located.
   * 
   * @example
   * cn-zhangjiakou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The name of the region where the outbound VPC is located.
   * 
   * @example
   * Hangzhou VPC test
   */
  vpcRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      id: 'Id',
      ipConfigs: 'IpConfigs',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
      vpcRegionName: 'VpcRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      id: 'string',
      ipConfigs: { 'type': 'array', 'itemType': DescribeResolverEndpointsResponseBodyEndpointsIpConfigs },
      name: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
      vpcRegionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipConfigs)) {
      $dara.Model.validateArray(this.ipConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResolverEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of endpoints.
   */
  endpoints?: DescribeResolverEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 83D1682B-B69A-4060-9FA8-2907C2A35600
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of endpoints.
   * 
   * @example
   * 1
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': DescribeResolverEndpointsResponseBodyEndpoints },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

