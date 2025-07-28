// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverEndpointsResponseBodyEndpointsIpConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * cn-zhangjiakou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The source IP address of outbound traffic. The IP address must be within the specified CIDR block.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
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
   * The time when the endpoint was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594607786000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The source IP addresses of outbound traffic.
   */
  ipConfigs?: DescribeResolverEndpointsResponseBodyEndpointsIpConfigs[];
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * endpoint-test
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
   * The state of the endpoint that you queried. Valid values:
   * 
   * *   SUCCESS: The endpoint works as expected.
   * *   INIT: The endpoint is being created.
   * *   FAILED: The endpoint failed to be created.
   * *   CHANGE_INIT: The endpoint is being modified.
   * *   CHANGE_FAILED: The endpoint failed to be modified.
   * *   EXCEPTION: The endpoint encountered an exception.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the endpoint was updated.
   * 
   * @example
   * 2020-07-13 10:38:24
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the endpoint was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594607904000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The ID of the outbound VPC. All outbound Domain Name System (DNS) requests of the resolver are forwarded by this VPC.
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
   * The region ID of the outbound VPC.
   * 
   * @example
   * cn-zhangjiakou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The name of the region where the VPC resides.
   * 
   * @example
   * China East 1 (Hangzhou)
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
   * The endpoints.
   */
  endpoints?: DescribeResolverEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
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

