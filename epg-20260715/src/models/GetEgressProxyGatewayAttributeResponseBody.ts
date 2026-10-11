// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyGatewayAttributeResponseBodyListenerProperties extends $dara.Model {
  /**
   * @remarks
   * The listener port. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The listener protocol. Valid values:
   * 
   * - **HTTP**
   * - **HTTPS**
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyGatewayAttributeResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 256 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * testValue
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

export class GetEgressProxyGatewayAttributeResponseBodyTlsInterceptProperties extends $dara.Model {
  /**
   * @remarks
   * The ID of the private CA certificate.
   * 
   * @example
   * 1f01a6f9-a0e7-64e5-9d3c-29c056bf****
   */
  privateCaCertificateId?: string;
  /**
   * @remarks
   * The TLS Block Mode. Valid values:
   * 
   * - **enable**: Enables the TLS Block Mode.
   * - **disable**: Disables the TLS Block Mode.
   * 
   * @example
   * enable
   */
  tlsInterceptMode?: string;
  static names(): { [key: string]: string } {
    return {
      privateCaCertificateId: 'PrivateCaCertificateId',
      tlsInterceptMode: 'TlsInterceptMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateCaCertificateId: 'string',
      tlsInterceptMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyGatewayAttributeResponseBodyZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * - **Provisioning**: The zone is being created.
   * - **Available**: The zone is available.
   * - **Configuring**: The zone is being reconfigured.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch that corresponds to the zone.
   * 
   * @example
   * vsw-f8zvrktbjs9hh3xqz****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEgressProxyGatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the egress proxy gateway was created. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the default egress IP pool.
   * 
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  defaultEgressProxyIpPoolId?: string;
  /**
   * @remarks
   * The description of the egress proxy gateway instance. The description must be 2 to 256 characters in length and can contain Chinese characters and English letters. It can also contain digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * The DNS domain name.
   * 
   * @example
   * epg-gw80bb6a94f835****.cn-shanghai.epg.aliyuncs.com
   */
  dnsName?: string;
  /**
   * @remarks
   * The ID of the associated egress proxy configuration.
   * 
   * @example
   * epc-uf609a6a8fdf9f4d****
   */
  egressProxyConfigurationId?: string;
  /**
   * @remarks
   * The ID of the egress proxy gateway instance.
   * 
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  /**
   * @remarks
   * The name of the egress proxy gateway. The name must be 2 to 128 characters in length and can contain English letters and Chinese characters. It must start with a letter or a Chinese character and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * testEpg
   */
  egressProxyGatewayName?: string;
  /**
   * @remarks
   * The list of listener properties.
   */
  listenerProperties?: GetEgressProxyGatewayAttributeResponseBodyListenerProperties[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01A05AB7-6C14-5A12-94E7-F20F9F69AE3D
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2zye42m****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status of the egress proxy gateway. Valid values:
   * 
   * - **Provisioning**: The instance is being created.
   * - **Active**: The instance is running.
   * - **Configuring**: The instance is being reconfigured.
   * - **Inactive**: The instance is stopped.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetEgressProxyGatewayAttributeResponseBodyTags[];
  /**
   * @remarks
   * The TLS interception properties.
   */
  tlsInterceptProperties?: GetEgressProxyGatewayAttributeResponseBodyTlsInterceptProperties;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-n4appznmjjr362yd3****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of zone and vSwitch mappings. If the current region supports two or more zones, at least two zones must be returned.
   */
  zoneMappings?: GetEgressProxyGatewayAttributeResponseBodyZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultEgressProxyIpPoolId: 'DefaultEgressProxyIpPoolId',
      description: 'Description',
      dnsName: 'DnsName',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyGatewayId: 'EgressProxyGatewayId',
      egressProxyGatewayName: 'EgressProxyGatewayName',
      listenerProperties: 'ListenerProperties',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      tlsInterceptProperties: 'TlsInterceptProperties',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultEgressProxyIpPoolId: 'string',
      description: 'string',
      dnsName: 'string',
      egressProxyConfigurationId: 'string',
      egressProxyGatewayId: 'string',
      egressProxyGatewayName: 'string',
      listenerProperties: { 'type': 'array', 'itemType': GetEgressProxyGatewayAttributeResponseBodyListenerProperties },
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetEgressProxyGatewayAttributeResponseBodyTags },
      tlsInterceptProperties: GetEgressProxyGatewayAttributeResponseBodyTlsInterceptProperties,
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': GetEgressProxyGatewayAttributeResponseBodyZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.listenerProperties)) {
      $dara.Model.validateArray(this.listenerProperties);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.tlsInterceptProperties && typeof (this.tlsInterceptProperties as any).validate === 'function') {
      (this.tlsInterceptProperties as any).validate();
    }
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

