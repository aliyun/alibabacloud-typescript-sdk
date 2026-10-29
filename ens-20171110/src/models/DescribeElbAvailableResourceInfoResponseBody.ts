// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo extends $dara.Model {
  ability?: string[];
  /**
   * @remarks
   * The area.
   * 
   * @example
   * SouthEast
   */
  area?: string;
  /**
   * @remarks
   * The Quantity available for purchase.
   * 
   * @example
   * 1
   */
  canBuyCount?: string;
  /**
   * @remarks
   * The English name of the edge zone.
   * 
   * @example
   * cn-guangdong-10
   */
  enName?: string;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * @example
   * cn-guangdong-10
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The specification of the load balancing instance.
   */
  loadBalancerSpec?: string[];
  /**
   * @remarks
   * The name of the edge zone.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * Shanghai
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      ability: 'Ability',
      area: 'Area',
      canBuyCount: 'CanBuyCount',
      enName: 'EnName',
      ensRegionId: 'EnsRegionId',
      loadBalancerSpec: 'LoadBalancerSpec',
      name: 'Name',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ability: { 'type': 'array', 'itemType': 'string' },
      area: 'string',
      canBuyCount: 'string',
      enName: 'string',
      ensRegionId: 'string',
      loadBalancerSpec: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      province: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ability)) {
      $dara.Model.validateArray(this.ability);
    }
    if(Array.isArray(this.loadBalancerSpec)) {
      $dara.Model.validateArray(this.loadBalancerSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElbAvailableResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of resource information.
   */
  elbAvailableResourceInfo?: DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo[];
  /**
   * @remarks
   * The common parameter. The ID of each request is unique and active for troubleshooting and locating issues.
   * 
   * @example
   * 25AAD194-4A37-51CF-B1CA-1E86FDAC23A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elbAvailableResourceInfo: 'ElbAvailableResourceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elbAvailableResourceInfo: { 'type': 'array', 'itemType': DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elbAvailableResourceInfo)) {
      $dara.Model.validateArray(this.elbAvailableResourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

