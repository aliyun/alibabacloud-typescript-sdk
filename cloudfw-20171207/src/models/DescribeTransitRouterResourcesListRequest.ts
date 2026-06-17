// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterResourcesListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-djz1i6p8shzioz****
   */
  cenId?: string;
  /**
   * @remarks
   * The instance ID of the border firewall.
   * 
   * @example
   * vfw-tr-741de4c8956341****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The asset type.
   * 
   * @example
   * TR
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the TransitRouter.
   * 
   * @example
   * tr-2zefgvkcl2qcexbb7****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
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

