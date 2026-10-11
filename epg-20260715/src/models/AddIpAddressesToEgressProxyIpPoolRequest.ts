// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddIpAddressesToEgressProxyIpPoolRequestZoneMappingsIpAddresses extends $dara.Model {
  /**
   * @example
   * eip-2zep1zbmxnvoyt1vsj****
   */
  eipAllocationId?: string;
  /**
   * @example
   * 172.16.1.1
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

export class AddIpAddressesToEgressProxyIpPoolRequestZoneMappings extends $dara.Model {
  ipAddresses?: AddIpAddressesToEgressProxyIpPoolRequestZoneMappingsIpAddresses[];
  /**
   * @example
   * 0
   */
  ipCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddresses: 'IpAddresses',
      ipCount: 'IpCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddresses: { 'type': 'array', 'itemType': AddIpAddressesToEgressProxyIpPoolRequestZoneMappingsIpAddresses },
      ipCount: 'number',
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

export class AddIpAddressesToEgressProxyIpPoolRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42661417****
   */
  clientToken?: string;
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
   * eppool-gw80606a59ecc10****
   */
  egressProxyIpPoolId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneMappings?: AddIpAddressesToEgressProxyIpPoolRequestZoneMappings[];
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
      zoneMappings: { 'type': 'array', 'itemType': AddIpAddressesToEgressProxyIpPoolRequestZoneMappings },
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

