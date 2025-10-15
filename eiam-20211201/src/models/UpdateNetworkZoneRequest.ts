// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkZoneRequest extends $dara.Model {
  /**
   * @example
   * client-token-examplexxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 包含的CIDR
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * 网络区域ipv6Cidr
   */
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * IDaaS的网络区域主键id
   * 
   * This parameter is required.
   * 
   * @example
   * network_11111
   */
  networkZoneId?: string;
  /**
   * @remarks
   * 网络区域名称
   * 
   * This parameter is required.
   * 
   * @example
   * IPV4Test
   */
  networkZoneName?: string;
  /**
   * @remarks
   * 专有网络VpcId
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

