// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveIpAddressesFromEgressProxyIpPoolRequestZoneMappingsIpAddresses extends $dara.Model {
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

export class RemoveIpAddressesFromEgressProxyIpPoolRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ipAddresses?: RemoveIpAddressesFromEgressProxyIpPoolRequestZoneMappingsIpAddresses[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddresses: 'IpAddresses',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddresses: { 'type': 'array', 'itemType': RemoveIpAddressesFromEgressProxyIpPoolRequestZoneMappingsIpAddresses },
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

export class RemoveIpAddressesFromEgressProxyIpPoolRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eppool-gw80606a59ecc10****
   */
  egressProxyIpPoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneMappings?: RemoveIpAddressesFromEgressProxyIpPoolRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyIpPoolId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': RemoveIpAddressesFromEgressProxyIpPoolRequestZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

