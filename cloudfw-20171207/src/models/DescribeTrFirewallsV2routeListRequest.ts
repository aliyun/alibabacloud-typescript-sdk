// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallsV2RouteListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vfw-tr-8bcfa0f2f12d411e****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * policy-7d5c672e37ee4175****
   */
  trFirewallRoutePolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallId: 'FirewallId',
      lang: 'Lang',
      pageSize: 'PageSize',
      trFirewallRoutePolicyId: 'TrFirewallRoutePolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      firewallId: 'string',
      lang: 'string',
      pageSize: 'string',
      trFirewallRoutePolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

