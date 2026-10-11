// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyGatewayRequestListenerProperties extends $dara.Model {
  /**
   * @remarks
   * The listener port.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the listener. Valid values:
   * 
   * - **HTTP**: HTTP.
   * 
   * - **HTTPS**: HTTPS.
   * 
   * This parameter is required.
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

export class CreateEgressProxyGatewayRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 256 characters in length, and cannot contain `http://` or `https://`.
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

export class CreateEgressProxyGatewayRequestTlsInterceptProperties extends $dara.Model {
  /**
   * @remarks
   * The ID of the private CA certificate.
   * 
   * - This parameter is required when **TlsInterceptMode** is set to **enable**.
   * - Do not specify this parameter when **TlsInterceptMode** is set to **disable**.
   * 
   * @example
   * 1f01a6f9-a0e7-64e5-9d3c-29c056bf****
   */
  privateCaCertificateId?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS interception. Valid values:
   * 
   * - **enable**: enables TLS interception.
   * 
   * - **disable**: disables TLS interception.
   * 
   * This parameter is required.
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

export class CreateEgressProxyGatewayRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch that corresponds to the zone.
   * 
   * The vSwitch must belong to the specified VPC and match the zone specified by ZoneId.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-wz9aejevoin852mo****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * You can call the DescribeZones operation to query information about zones in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-m
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateEgressProxyGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > Note If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the egress proxy gateway instance.
   * 
   * The description must be 2 to 256 characters in length, and can contain Chinese characters, letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without creating the egress proxy gateway instance. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the DryRunOperation error code is returned.
   * 
   * - **false** (default): sends the request. If the request passes the precheck, the HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the egress proxy configuration that is associated with the egress proxy gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epc-uf609a6a8fdf9f4****
   */
  egressProxyConfigurationId?: string;
  /**
   * @remarks
   * The name of the egress proxy gateway instance.
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyGatewayName?: string;
  /**
   * @remarks
   * The listener configurations of the egress proxy gateway instance.
   * 
   * Listeners in the same gateway instance cannot use the same port.
   * 
   * This parameter is required.
   */
  listenerProperties?: CreateEgressProxyGatewayRequestListenerProperties[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-gw80bb6a94f835db****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateEgressProxyGatewayRequestTag[];
  /**
   * @remarks
   * The TLS interception configuration of the egress proxy gateway instance.
   */
  tlsInterceptProperties?: CreateEgressProxyGatewayRequestTlsInterceptProperties;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the egress proxy gateway instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-zm0ejg5unozkhvuhd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone and vSwitch mappings of the egress proxy gateway instance.
   * 
   * If the current region supports two or more zones, add at least two zones to improve availability.
   * 
   * This parameter is required.
   */
  zoneMappings?: CreateEgressProxyGatewayRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyConfigurationId: 'EgressProxyConfigurationId',
      egressProxyGatewayName: 'EgressProxyGatewayName',
      listenerProperties: 'ListenerProperties',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      tlsInterceptProperties: 'TlsInterceptProperties',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      egressProxyConfigurationId: 'string',
      egressProxyGatewayName: 'string',
      listenerProperties: { 'type': 'array', 'itemType': CreateEgressProxyGatewayRequestListenerProperties },
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEgressProxyGatewayRequestTag },
      tlsInterceptProperties: CreateEgressProxyGatewayRequestTlsInterceptProperties,
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CreateEgressProxyGatewayRequestZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.listenerProperties)) {
      $dara.Model.validateArray(this.listenerProperties);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

