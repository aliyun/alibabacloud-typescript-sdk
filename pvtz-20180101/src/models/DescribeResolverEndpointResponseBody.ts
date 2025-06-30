// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResolverEndpointResponseBodyIpConfigs } from "./DescribeResolverEndpointResponseBodyIpConfigs";


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
   * The time when the endpoint was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608356000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The endpoint ID. This ID uniquely identifies the endpoint.
   * 
   * @example
   * hr****
   */
  id?: string;
  /**
   * @remarks
   * The configurations of the source IP addresses for outbound traffic.
   */
  ipConfigs?: DescribeResolverEndpointResponseBodyIpConfigs[];
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45020ED9-6319-4CA7-9475-6E8D6446E84F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group. The security group rules are applied to the outbound virtual private cloud (VPC).
   * 
   * @example
   * sg-8vb3sigz86xc-group-****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the endpoint. Valid values:
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
   * 2020-07-13 10:48:39
   */
  updateTime?: string;
  /**
   * @remarks
   * The time when the endpoint was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1594608519000
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The ID of the outbound VPC. All outbound Domain Name System (DNS) requests of the resolver are forwarded by this VPC.
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
   * The region ID of the outbound VPC.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  /**
   * @remarks
   * The name of the region where the outbound VPC resides.
   * 
   * @example
   * HuaBei
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

