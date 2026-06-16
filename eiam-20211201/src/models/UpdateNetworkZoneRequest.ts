// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token.
   * 
   * @example
   * client-token-examplexxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks of the network zone.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR blocks of the network zone.
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * The network zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * network_11111
   */
  networkZoneId?: string;
  /**
   * @remarks
   * The name of the network zone.
   * 
   * This parameter is required.
   * 
   * @example
   * IPV4Test
   */
  networkZoneName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc_xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      ipv4Cidrs: 'Ipv4Cidrs',
      ipv6Cidrs: 'Ipv6Cidrs',
      networkZoneId: 'NetworkZoneId',
      networkZoneName: 'NetworkZoneName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      ipv6Cidrs: { 'type': 'array', 'itemType': 'string' },
      networkZoneId: 'string',
      networkZoneName: 'string',
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

