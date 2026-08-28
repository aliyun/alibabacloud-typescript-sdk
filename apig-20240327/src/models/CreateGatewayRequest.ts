// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayRequestLogConfigSls extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable log collection.
   * 
   * @example
   * false
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequestLogConfig extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service (SLS) configuration that controls gateway log collection.
   */
  sls?: CreateGatewayRequestLogConfigSls;
  static names(): { [key: string]: string } {
    return {
      sls: 'sls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sls: CreateGatewayRequestLogConfigSls,
    };
  }

  validate() {
    if(this.sls && typeof (this.sls as any).validate === 'function') {
      (this.sls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequestNetworkAccessConfig extends $dara.Model {
  /**
   * @remarks
   * The network access type.
   * 
   * @example
   * Internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CreateGatewayRequestZoneConfigZones extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
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

export class CreateGatewayRequestZoneConfig extends $dara.Model {
  /**
   * @remarks
   * The zone selection option.
   * 
   * @example
   * Manual
   */
  selectOption?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of supported zones. At least two zones are required.
   */
  zones?: CreateGatewayRequestZoneConfigZones[];
  static names(): { [key: string]: string } {
    return {
      selectOption: 'selectOption',
      vSwitchId: 'vSwitchId',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectOption: 'string',
      vSwitchId: 'string',
      zones: { 'type': 'array', 'itemType': CreateGatewayRequestZoneConfigZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. This parameter is required for the Serverless edition and must be set to POSTPAY.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The gateway instance edition. Valid values:
   * 
   * - Professional: standard instance.
   * 
   * - Serverless: Serverless instance.
   * 
   * - MultiTenantServerless: multi-tenant Serverless instance.
   * 
   * - Unknown: unknown.
   * 
   * @example
   * Professional
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The running mode for AI multi-tenant V2. Default value: ENTERPRISE. This parameter is allowed only when gatewayType is AI and gatewayEdition is MultiTenantServerless.
   * 
   * @example
   * ENTERPRISE
   */
  gatewayMode?: string;
  /**
   * @remarks
   * The gateway type. This parameter must be explicitly set to AI for AI Serverless or multi-tenant gateways.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The gateway log configuration.
   */
  logConfig?: CreateGatewayRequestLogConfig;
  /**
   * @remarks
   * The gateway name. This parameter is required for all gateway editions.
   * 
   * @example
   * test-ceshi
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration. This parameter is required. If not provided, the service returns InvalidParameter.IsEmpty (400).
   */
  networkAccessConfig?: CreateGatewayRequestNetworkAccessConfig;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ahr5uil8raz0rq3b
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node specifications. This parameter is required for the Serverless edition.
   * 
   * @example
   * apigw.dev.x1
   */
  spec?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateGatewayRequestTag[];
  /**
   * @remarks
   * The VPC ID. This parameter is required for all gateway editions.
   * 
   * @example
   * vpc-zm0x16tomfiat1mk9f6rs
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone configuration. This parameter is required for all gateway editions.
   */
  zoneConfig?: CreateGatewayRequestZoneConfig;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      gatewayEdition: 'gatewayEdition',
      gatewayMode: 'gatewayMode',
      gatewayType: 'gatewayType',
      logConfig: 'logConfig',
      name: 'name',
      networkAccessConfig: 'networkAccessConfig',
      resourceGroupId: 'resourceGroupId',
      spec: 'spec',
      tag: 'tag',
      vpcId: 'vpcId',
      zoneConfig: 'zoneConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      gatewayEdition: 'string',
      gatewayMode: 'string',
      gatewayType: 'string',
      logConfig: CreateGatewayRequestLogConfig,
      name: 'string',
      networkAccessConfig: CreateGatewayRequestNetworkAccessConfig,
      resourceGroupId: 'string',
      spec: 'string',
      tag: { 'type': 'array', 'itemType': CreateGatewayRequestTag },
      vpcId: 'string',
      zoneConfig: CreateGatewayRequestZoneConfig,
    };
  }

  validate() {
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.networkAccessConfig && typeof (this.networkAccessConfig as any).validate === 'function') {
      (this.networkAccessConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(this.zoneConfig && typeof (this.zoneConfig as any).validate === 'function') {
      (this.zoneConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

