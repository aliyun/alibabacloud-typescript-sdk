// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkZoneResponseBodyNetworkZone extends $dara.Model {
  /**
   * @remarks
   * The description of the network zone.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR blocks.
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * The network zone ID.
   * 
   * @example
   * network_m6fbr2bcbcadu3bcdpgzcxxxxx
   */
  networkZoneId?: string;
  /**
   * @remarks
   * The name of the network zone.
   * 
   * @example
   * test4_name
   */
  networkZoneName?: string;
  /**
   * @remarks
   * The type of the network zone.
   * 
   * @example
   * arn:alibaba:idaas:network:zone:classic
   */
  networkZoneType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-25w8wxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      ipv4Cidrs: 'Ipv4Cidrs',
      ipv6Cidrs: 'Ipv6Cidrs',
      networkZoneId: 'NetworkZoneId',
      networkZoneName: 'NetworkZoneName',
      networkZoneType: 'NetworkZoneType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      ipv6Cidrs: { 'type': 'array', 'itemType': 'string' },
      networkZoneId: 'string',
      networkZoneName: 'string',
      networkZoneType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Cidrs)) {
      $dara.Model.validateArray(this.ipv4Cidrs);
    }
    if(Array.isArray(this.ipv6Cidrs)) {
      $dara.Model.validateArray(this.ipv6Cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network zone object.
   */
  networkZone?: GetNetworkZoneResponseBodyNetworkZone;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkZone: 'NetworkZone',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkZone: GetNetworkZoneResponseBodyNetworkZone,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkZone && typeof (this.networkZone as any).validate === 'function') {
      (this.networkZone as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

