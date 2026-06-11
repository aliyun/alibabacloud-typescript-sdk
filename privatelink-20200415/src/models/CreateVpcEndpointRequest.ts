// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateVpcEndpointRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The IPv6 address of the endpoint ENI in the specified zone.
   * 
   * > This parameter is valid only when `AddressIpVersion` is set to `DualStack`.
   * 
   * @example
   * 2408:4005:34d:****:a58b:62a3:6b55:****
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone where the endpoint ENI will be created.
   * You can specify up to 10 vSwitch IDs.
   * 
   * @example
   * vsw-hp3uf6045ljdhd5zr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone for the endpoint.
   * 
   * You can specify up to 10 zone IDs.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The IPv4 address of the endpoint ENI in the specified zone.
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
   * The IP version of the endpoint. Valid values:
   * 
   * - **IPv4**: IPv4 (default).
   * 
   * - **DualStack**: dual-stack.
   * 
   * > To use the dual-stack feature, make sure that the associated endpoint service and the VPC in which the endpoint is created support the dual-stack feature.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request.
   * 
   * You must generate a unique value for this token. The token can contain only ASCII characters.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The bandwidth for a cross-region connection, in Mbps. This parameter applies only when the endpoint and endpoint service are in different regions. Valid values:
   * 
   * - **Default**: 1000 for cross-region connections within the Chinese mainland. In all other cases, the value is 100.
   * 
   * - **Minimum value**: 100.
   * 
   * - **Maximum value**: subject to your account\\"s quota. For more information, see [Quotas and limits](https://help.aliyun.com/zh/privatelink/quotas-and-limits?spm=a2c4g.11174283.help-menu-search-120462.d_0).
   * 
   * > To use this parameter, make sure that you are creating a cross-region endpoint.
   * 
   * @example
   * 1000
   */
  crossRegionBandwidth?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: Performs a dry run to check the request\\"s validity without committing the action. The system checks for required parameters, request format, and service limits. If the check passes, the `DryRunOperation` error code is returned. If it fails, an error message is returned.
   * 
   * - **false** (default): Sends the request. If the request is valid, the operation is performed and a 2xx HTTP status code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Endpoint.
   */
  endpointDescription?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * The name must be 2 to 128 characters long, start with a letter or a Chinese character, and can contain digits, hyphens (-), and underscores (_).
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Interface**: an interface endpoint. You can add Application Load Balancer (ALB), Classic Load Balancer (CLB), and Network Load Balancer (NLB) instances as service resources.
   * 
   * - **Reverse**: a reverse endpoint. You can add a VPC NAT Gateway as a service resource.
   * 
   * - **GatewayLoadBalancer**: a Gateway Load Balancer endpoint. You can add a Gateway Load Balancer (GWLB) as a service resource.
   * 
   * > Services that support reverse endpoints are provided exclusively by Alibaba Cloud and its partners. You cannot create them by default. To request access, contact your account manager.
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) policy. For more information about the policy syntax, see [Basic elements of a policy](https://help.aliyun.com/document_detail/93738.html).
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
   * Specifies whether to enable managed protection. This parameter is effective only for requests made with a Security Token Service (STS) token. Valid values:
   * 
   * - **true**: enables managed protection. After you enable managed protection, only the user who creates the endpoint can modify or delete it by using an STS token.
   * 
   * - **false** (default): disables managed protection.
   * 
   * @example
   * false
   */
  protectedEnabled?: boolean;
  /**
   * @remarks
   * The ID of the region in which to create the endpoint.
   * 
   * You can obtain the region ID by calling the [DescribeRegions](https://help.aliyun.com/document_detail/120468.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of security groups to associate with the endpoint ENI.
   * 
   * @example
   * sg-hp33bw6ynvm2yb0e****
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * The ID of the associated endpoint service.
   * 
   * @example
   * epsrv-hp3xdsq46ael67lo****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the associated endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint service is deployed. Defaults to the endpoint\\"s region.
   * 
   * @example
   * cn-huhehaote
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateVpcEndpointRequestTag[];
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC) where the endpoint will be created.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of zones for the endpoint.
   */
  zone?: CreateVpcEndpointRequestZone[];
  /**
   * @remarks
   * Specifies whether to enable zone affinity. If enabled, requests are routed to the endpoint in the same zone as the client. Valid values:
   * 
   * - **true**: enables zone affinity.
   * 
   * - **false** (default): disables zone affinity.
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The number of private IP addresses for the endpoint\\"s elastic network interface (ENI) in each zone. The value must be **1**.
   * 
   * @example
   * 1
   */
  zonePrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      clientToken: 'ClientToken',
      crossRegionBandwidth: 'CrossRegionBandwidth',
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
      serviceRegionId: 'ServiceRegionId',
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
      crossRegionBandwidth: 'number',
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
      serviceRegionId: 'string',
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

