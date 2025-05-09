// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2ListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-rig0t5zi96crkl****
   */
  cenId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * @example
   * vfw-tr-f1799baa9e254651****
   */
  firewallId?: string;
  /**
   * @remarks
   * The name of the VPC firewall.
   * 
   * @example
   * test
   */
  firewallName?: string;
  /**
   * @remarks
   * The status of the VPC firewall. Valid values:
   * 
   * *   **opened**: The VPC firewall is enabled.
   * *   **closed**: The VPC firewall is disabled.
   * *   **notconfigured**: The VPC firewall is not created.
   * *   **configured**: The VPC firewall is created but is not enabled.
   * *   **creating**: The VPC firewall is being created.
   * *   **opening**: The VPC firewall is being enabled.
   * *   **deleting**: The VPC firewall is being deleted.
   * 
   * >  If you do not specify this parameter, VPC firewalls in all states are queried.
   * 
   * @example
   * opened
   */
  firewallSwitchStatus?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The routing mode of the VPC firewall. Valid values:
   * 
   * *   **managed**: automatic mode
   * *   **manual**: manual mode
   * 
   * >  If you do not specify this parameter, VPC firewalls in all routing modes are queried.
   * 
   * @example
   * managed
   */
  routeMode?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-uf6egtvyaedvt20xl****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      currentPage: 'CurrentPage',
      firewallId: 'FirewallId',
      firewallName: 'FirewallName',
      firewallSwitchStatus: 'FirewallSwitchStatus',
      lang: 'Lang',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      routeMode: 'RouteMode',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      currentPage: 'number',
      firewallId: 'string',
      firewallName: 'string',
      firewallSwitchStatus: 'string',
      lang: 'string',
      ownerId: 'string',
      pageSize: 'number',
      regionNo: 'string',
      routeMode: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

