// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkZonesResponseBodyNetworkZones extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 网络区域描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  ipv4Cidrs?: string[];
  ipv6Cidrs?: string[];
  /**
   * @remarks
   * IDaaS EIAM 网络区域Id
   * 
   * @example
   * network_m223wbvc3sn3uakfnxvhbxxxxx
   */
  networkZoneId?: string;
  /**
   * @remarks
   * IDaaS EIAM 网络区域名称
   * 
   * @example
   * test_name
   */
  networkZoneName?: string;
  /**
   * @remarks
   * IDaaS EIAM 网络区域类型
   * 
   * @example
   * arn:alibaba:idaas:network:zone:classic
   */
  networkZoneType?: string;
  /**
   * @remarks
   * IDaaS EIAM 专有网络VpcId
   * 
   * @example
   * vpc-bp1usdmfqcgoy5ebxxxxx
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

export class ListNetworkZonesResponseBody extends $dara.Model {
  networkZones?: ListNetworkZonesResponseBodyNetworkZones[];
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkZones: 'NetworkZones',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkZones: { 'type': 'array', 'itemType': ListNetworkZonesResponseBodyNetworkZones },
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkZones)) {
      $dara.Model.validateArray(this.networkZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

