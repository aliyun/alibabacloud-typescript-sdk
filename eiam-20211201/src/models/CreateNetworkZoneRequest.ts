// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkZoneRequest extends $dara.Model {
  /**
   * @remarks
   * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 网络区域描述
   * 
   * @example
   * 测试描述
   */
  description?: string;
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
   * 网络区域ipv4Cidr
   * 
   * @example
   * 0.0.0.0/0
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * 网络区域ipv6Cidr
   * 
   * @example
   * ::/0
   */
  ipv6Cidrs?: string[];
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
   * 网络区域类型
   * 
   * This parameter is required.
   * 
   * @example
   * arn:alibaba:idaas:network:zone:classic
   */
  networkZoneType?: string;
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

