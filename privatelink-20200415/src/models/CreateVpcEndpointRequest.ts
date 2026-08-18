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
   * The IPv6 address of the endpoint elastic network interface (ENI) in the specified endpoint zone.
   * 
   * @example
   * 2408:4005:34d:****:a58b:62a3:6b55:****
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The vSwitch in the zone where you want to create an endpoint elastic network interface (ENI).
   * 
   * @example
   * vsw-hp3uf6045ljdhd5zr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone of the endpoint.
   * 
   * @example
   * cn-huhehaote-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The IPv4 address of the endpoint elastic network interface (ENI) in the specified endpoint zone.
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
   * The protocol version. Valid values:
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The cross-region bandwidth value. This parameter is required only when the endpoint and the endpoint service are in different regions. Unit: Mbps. Valid values:
   * 
   * @example
   * 1000
   */
  crossRegionBandwidth?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * The name of the endpoint.
   * 
   * @example
   * test
   */
  endpointName?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * @example
   * Interface
   */
  endpointType?: string;
  /**
   * @remarks
   * The RAM access policy. For more information about the policy definition, see [Policy elements](https://help.aliyun.com/document_detail/93738.html).
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
   * Specifies whether to enable managed protection. This parameter takes effect only when the request is made by using Security Token Service (STS). Valid values:
   * 
   * @example
   * false
   */
  protectedEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the endpoint.
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
   * The security groups that are associated with the endpoint elastic network interface (ENI).
   * 
   * @example
   * sg-hp33bw6ynvm2yb0e****
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * The endpoint service that is associated with the endpoint.
   * 
   * @example
   * epsrv-hp3xdsq46ael67lo****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service that is associated with the endpoint.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The region ID of the endpoint service. The default value is the current region, which is the region where you create an endpoint.
   * 
   * @example
   * cn-huhehaote
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateVpcEndpointRequestTag[];
  /**
   * @remarks
   * The VPC to which the endpoint belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-hp356stwkxg3fn2xe****
   */
  vpcId?: string;
  /**
   * @remarks
   * The endpoint zones.
   */
  zone?: CreateVpcEndpointRequestZone[];
  /**
   * @remarks
   * Specifies whether to support zone affinity for the endpoint domain name when connecting to the service. Valid values:
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The number of private IP addresses for the ENI in each zone. Set the value to **1**.
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

