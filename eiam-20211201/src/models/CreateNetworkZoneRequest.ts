// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the network zone.
   * 
   * @example
   * Test description
   */
  description?: string;
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
   * 
   * @example
   * 0.0.0.0/0
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The IPv6 CIDR blocks of the network zone.
   * 
   * @example
   * ::/0
   */
  ipv6Cidrs?: string[];
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
   * The type of the network zone.
   * 
   * This parameter is required.
   * 
   * @example
   * arn:alibaba:idaas:network:zone:classic
   */
  networkZoneType?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc_xxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      ipv4Cidrs: 'Ipv4Cidrs',
      ipv6Cidrs: 'Ipv6Cidrs',
      networkZoneName: 'NetworkZoneName',
      networkZoneType: 'NetworkZoneType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      instanceId: 'string',
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      ipv6Cidrs: { 'type': 'array', 'itemType': 'string' },
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

