// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcEndpointAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**: Supports IPv4 only.
   * 
   * - **DualStack**: Supports both IPv4 and IPv6.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The connection bandwidth of the endpoint, in Mbps.
   * 
   * @example
   * 1024
   */
  bandwidth?: number;
  /**
   * @remarks
   * The state of the endpoint connection. Valid values:
   * 
   * - **Pending**: The connection is being modified.
   * 
   * - **Connecting**: The endpoint is connecting to the endpoint service.
   * 
   * - **Connected**: The endpoint is connected to the endpoint service.
   * 
   * - **Disconnecting**: The endpoint is disconnecting from the endpoint service.
   * 
   * - **Disconnected**: The endpoint is not connected to the endpoint service.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * - **ServiceDeleted**: The associated endpoint service has been deleted.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The time the endpoint was created.
   * 
   * @example
   * 2021-09-24T18:00:07Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cross-region bandwidth, in Mbps.
   * 
   * @example
   * 1000
   */
  crossRegionBandwidth?: number;
  /**
   * @remarks
   * The business status of the endpoint. Valid values:
   * 
   * - **Normal**: The endpoint is running as expected.
   * 
   * - **FinancialLocked**: The endpoint is locked due to an overdue payment.
   * 
   * @example
   * Normal
   */
  endpointBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint.
   * 
   * @example
   * ep-hp33b2e43fays7s8****.epsrv-hp3xdsq46ael67lo****.cn-huhehaote.privatelink.aliyuncs.com
   */
  endpointDomain?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * ep-hp33b2e43fays7s8****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * - **Creating**: The endpoint is being created.
   * 
   * - **Active**: The endpoint is available.
   * 
   * - **Pending**: The endpoint is being modified.
   * 
   * - **Deleting**: The endpoint is being deleted.
   * 
   * @example
   * Active
   */
  endpointStatus?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Interface**: an interface endpoint.
   * 
   * - **Reverse**: a reverse endpoint.
   * 
   * - **GatewayLoadBalancer**: a Gateway Load Balancer endpoint (GWLBe).
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * - **Endpoint**: the service consumer.
   * 
   * - **EndpointService**: the service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The RAM policy. For more information about policy elements, see [Basic elements of a policy](https://help.aliyun.com/document_detail/93738.html).
   * 
   * @example
   * {
   *   "Version": "1",
   *   "Statement": [
   *     {
   *       "Effect": "Allow",
   *       "Action": [
   *         "oss:List*",
   *         "oss:PutObject",
   *         "oss:GetObject"
   *       ],
   *       "Resource": [
   *         "acs:oss:oss-*:*:pvl-policy-test/policy-test.txt"
   *       ],
   *       "Principal": {
   *         "RAM": [
   *           "acs:ram::14199xxxxxx:*"
   *         ]
   *       }
   *     }
   *   ]
   * }
   */
  policyDocument?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint is located.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmz7nocpei***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint and the endpoint service belong to the same Alibaba Cloud account. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  resourceOwner?: boolean;
  /**
   * @remarks
   * The ID of the associated endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the associated endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3xdsq46ael67lo****
   */
  serviceName?: string;
  /**
   * @remarks
   * The region ID of the associated endpoint service.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the endpoint belongs.
   * 
   * @example
   * vpc-fdfhkjafhjvcvdjf****
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service\\"s domain name resolves to the endpoint\\"s IP address in the nearest zone. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The number of private IP addresses for the elastic network interface (ENI) in each zone. This value is always **1**.
   * 
   * @example
   * 1
   */
  zonePrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      bandwidth: 'Bandwidth',
      connectionStatus: 'ConnectionStatus',
      createTime: 'CreateTime',
      crossRegionBandwidth: 'CrossRegionBandwidth',
      endpointBusinessStatus: 'EndpointBusinessStatus',
      endpointDescription: 'EndpointDescription',
      endpointDomain: 'EndpointDomain',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointStatus: 'EndpointStatus',
      endpointType: 'EndpointType',
      payer: 'Payer',
      policyDocument: 'PolicyDocument',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwner: 'ResourceOwner',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceRegionId: 'ServiceRegionId',
      vpcId: 'VpcId',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zonePrivateIpAddressCount: 'ZonePrivateIpAddressCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      bandwidth: 'number',
      connectionStatus: 'string',
      createTime: 'string',
      crossRegionBandwidth: 'number',
      endpointBusinessStatus: 'string',
      endpointDescription: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      endpointType: 'string',
      payer: 'string',
      policyDocument: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'boolean',
      serviceId: 'string',
      serviceName: 'string',
      serviceRegionId: 'string',
      vpcId: 'string',
      zoneAffinityEnabled: 'boolean',
      zonePrivateIpAddressCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

