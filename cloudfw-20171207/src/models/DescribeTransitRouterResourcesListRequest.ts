// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterResourcesListRequest extends $dara.Model {
  /**
   * @example
   * cen-djz1i6p8shzioz****
   */
  cenId?: string;
  /**
   * @example
   * vfw-tr-741de4c8956341****
   */
  firewallId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @example
   * TR
   */
  resourceType?: string;
  /**
   * @example
   * tr-2zefgvkcl2qcexbb7****
   */
  transitRouterId?: string;
  /**
   * @example
   * vpc-wz9lllsbftdm0svpj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      firewallId: 'FirewallId',
      lang: 'Lang',
      regionNo: 'RegionNo',
      resourceType: 'ResourceType',
      transitRouterId: 'TransitRouterId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      firewallId: 'string',
      lang: 'string',
      regionNo: 'string',
      resourceType: 'string',
      transitRouterId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

