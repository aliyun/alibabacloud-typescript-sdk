// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateVpcEndpointRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource.
   * 
   * @example
   * prod
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

export class CreateVpcEndpointRequestZone extends $dara.Model {
  /**
   * @remarks
   * The IPv6 address of the zone where the endpoint is deployed.
   * 
   * >  You can specify this parameter only if AddressIpVersion is set to DualStack.
   * 
   * @example
   * 2408:4005:34d:****:a58b:62a3:6b55:****
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The ID of the vSwitch for which you want to create the endpoint elastic network interface (ENI) in the zone. You can specify up to 10 vSwitches.
   * 
   * @example
   * vsw-hp3uf6045ljdhd5zr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the endpoint service is deployed.
   * 
   * You can specify up to 10 zones.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The IP address of the zone where the endpoint is deployed.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **DualStack**
   * 
   * >  An endpoint supports dual-stack if its associated endpoint service and VPC both support dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * *   **Interface** You can specify an Application Load Balancer (ALB) instance, a Classic Load Balancer (CLB) instance, or a Network Load Balancer (NLB) instance.
   * *   **Reverse** You can specify a Virtual Private Cloud (VPC) NAT gateway.
   * 
   * >  Services that support reverse endpoints are provided by Alibaba Cloud or Alibaba Cloud partners. To create such a service on your own, contact your account manager.
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
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
   * Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
   * 
   * *   **true**: enables user authentication. After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
   * *   **false** (default): disables user authentication.
   * 
   * @example
   * false
   */
  protectedEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of security groups that are associated with the endpoint elastic network interface (ENI).
   * 
   * @example
   * sg-hp33bw6ynvm2yb0e****
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * The ID of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * epsrv-hp3xdsq46ael67lo****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service with which the endpoint is associated.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: CreateVpcEndpointRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the endpoint belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zones where the endpoint is deployed.
   */
  zone?: CreateVpcEndpointRequestZone[];
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The number of private IP addresses that are assigned to an elastic network interface (ENI) in each zone. Set the value to **1**.
   * 
   * @example
   * 1
   */
  zonePrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointDescription: 'EndpointDescription',
      endpointName: 'EndpointName',
      endpointType: 'EndpointType',
      policyDocument: 'PolicyDocument',
      protectedEnabled: 'ProtectedEnabled',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      tag: 'Tag',
      vpcId: 'VpcId',
      zone: 'Zone',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zonePrivateIpAddressCount: 'ZonePrivateIpAddressCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointDescription: 'string',
      endpointName: 'string',
      endpointType: 'string',
      policyDocument: 'string',
      protectedEnabled: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      serviceId: 'string',
      serviceName: 'string',
      tag: { 'type': 'array', 'itemType': CreateVpcEndpointRequestTag },
      vpcId: 'string',
      zone: { 'type': 'array', 'itemType': CreateVpcEndpointRequestZone },
      zoneAffinityEnabled: 'boolean',
      zonePrivateIpAddressCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

