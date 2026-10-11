// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyIpPoolRequestTag extends $dara.Model {
  /**
   * @example
   * epg
   */
  key?: string;
  /**
   * @example
   * test
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

export class CreateEgressProxyIpPoolRequestZoneMappingsIpAddresses extends $dara.Model {
  /**
   * @example
   * eip-2zep1zbmxnvoyt1vs****
   */
  eipAllocationId?: string;
  /**
   * @example
   * 192.168.10.1
   */
  privateIpv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      eipAllocationId: 'EipAllocationId',
      privateIpv4Address: 'PrivateIpv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAllocationId: 'string',
      privateIpv4Address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyIpPoolRequestZoneMappings extends $dara.Model {
  ipAddresses?: CreateEgressProxyIpPoolRequestZoneMappingsIpAddresses[];
  /**
   * @example
   * 12
   */
  ipCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-0jl8x3ridfqbikax5o****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddresses: 'IpAddresses',
      ipCount: 'IpCount',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddresses: { 'type': 'array', 'itemType': CreateEgressProxyIpPoolRequestZoneMappingsIpAddresses },
      ipCount: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyIpPoolRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @example
   * created by epg
   */
  description?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testIpPool
   */
  egressProxyIpPoolName?: string;
  /**
   * @example
   * SourceIP
   */
  hashFactor?: string;
  /**
   * @example
   * X-Forwarded-For
   */
  hashHeaderName?: string;
  /**
   * @example
   * Random
   */
  scheduler?: string;
  tag?: CreateEgressProxyIpPoolRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   */
  zoneMappings?: CreateEgressProxyIpPoolRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyGatewayId: 'EgressProxyGatewayId',
      egressProxyIpPoolName: 'EgressProxyIpPoolName',
      hashFactor: 'HashFactor',
      hashHeaderName: 'HashHeaderName',
      scheduler: 'Scheduler',
      tag: 'Tag',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      egressProxyGatewayId: 'string',
      egressProxyIpPoolName: 'string',
      hashFactor: 'string',
      hashHeaderName: 'string',
      scheduler: 'string',
      tag: { 'type': 'array', 'itemType': CreateEgressProxyIpPoolRequestTag },
      zoneMappings: { 'type': 'array', 'itemType': CreateEgressProxyIpPoolRequestZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

