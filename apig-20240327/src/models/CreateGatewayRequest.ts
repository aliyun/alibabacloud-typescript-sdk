// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayRequestLogConfigSls extends $dara.Model {
  /**
   * @remarks
   * Indicates if enabled.
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
   * The Simple Log Service configurations.
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
   * Valid values:
   * 
   * *   InternetAndIntranet
   * *   Intranet
   * *   Internet
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
   * The ID of the vSwitch.
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
   * cn-wulanchabu-a
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
   * The option for selecting the zone.
   * 
   * Valid values:
   * 
   * *   Auto
   * *   Manual
   * 
   * @example
   * Manual
   */
  selectOption?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-xxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The supported zones.
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
   * The billing method.
   * 
   * Valid values:
   * 
   * *   POSTPAY
   * *   PREPAY
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The gateway edition.
   * 
   * @example
   * -
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The type of the gateway.
   * 
   * Valid values:
   * 
   * *   AI
   * *   API
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The logging configurations.
   */
  logConfig?: CreateGatewayRequestLogConfig;
  /**
   * @remarks
   * The name of the gateway instance.
   * 
   * @example
   * test-ceshi
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration.
   */
  networkAccessConfig?: CreateGatewayRequestNetworkAccessConfig;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ahr5uil8raz0rq3b
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of the node.
   * 
   * @example
   * apigw.dev.x2
   */
  spec?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateGatewayRequestTag[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-zm0x16tomfiat1mk9f6rs
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone settings.
   */
  zoneConfig?: CreateGatewayRequestZoneConfig;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      gatewayEdition: 'gatewayEdition',
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

