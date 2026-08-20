// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverEndpointResponseBodyIpConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone where the vSwitch is located.
   * 
   * @example
   * cn-hangzhou-a
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
   * An IP address within the specified CIDR block. If you leave this parameter empty, the system automatically assigns an IP address.
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

export class DescribeResolverEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2020-07-13 10:45:56
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the endpoint was created. This is a UNIX timestamp.
   * 
   * @example
   * 1594608356000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * hra0**
   */
  id?: string;
  /**
   * @remarks
   * A list of IP address configurations for the outbound traffic source.
   */
  ipConfigs?: DescribeResolverEndpointResponseBodyIpConfigs[];
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
   * The unique request ID.
   * 
   * @example
   * 45020ED9-6319-4CA7-9475-6E8D6446E84F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group. The rules in the security group are applied to the outbound VPC.
   * 
   * @example
   * sg-8vb3sigz86xc-group-****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * - SUCCESS: The endpoint works as expected.
   * 
   * - INIT: The endpoint is being created.
   * 
   * - FAILED: The endpoint failed to be created.
   * 
   * - CHANGE_INIT: The endpoint is being modified.
   * 
   * - CHANGE_FAILED: The endpoint failed to be modified.
   * 
   * - EXCEPTION: An exception occurred on the endpoint.
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
   * 2020-07-13 10:48:39
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the endpoint was last updated. This is a UNIX timestamp.
   * 
   * @example
   * 1594608519000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The ID of the outbound virtual private cloud (VPC). All outbound DNS query traffic from the Resolver is forwarded through this VPC.
   * 
   * @example
   * vpc-0jl96awrjt75ezglc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the outbound VPC.
   * 
   * @example
   * vpc-name-test
   */
  vpcName?: string;
  /**
   * @remarks
   * The ID of the region where the outbound VPC is located.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The name of the region where the outbound VPC is located.
   * 
   * @example
   * North China
   */
  vpcRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      id: 'Id',
      ipConfigs: 'IpConfigs',
      name: 'Name',
      requestId: 'RequestId',
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
      ipConfigs: { 'type': 'array', 'itemType': DescribeResolverEndpointResponseBodyIpConfigs },
      name: 'string',
      requestId: 'string',
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

