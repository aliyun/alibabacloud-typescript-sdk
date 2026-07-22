// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallV2RoutePolicyListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number in a paged query. Default value: 1. For more information about paging, see the corresponding parameter descriptions.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * > FirewallId is required. If this parameter is not specified, the ErrorParameters (400) error is returned. You can call DescribeTrFirewallsV2List to obtain the FirewallId. Prerequisites: CEN Enterprise Edition with a transit router and VPC mount are configured, and the FirewallId is obtained by calling DescribeTrFirewallsV2List.
   * 
   * @example
   * vfw-tr-d5ba592ac6c84aff****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: 10. For more information about paging, see the corresponding parameter descriptions.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the firewall routing policy.
   * 
   * @example
   * policy-7b66257c14e141fb****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallId: 'FirewallId',
      lang: 'Lang',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      firewallId: 'string',
      lang: 'string',
      pageSize: 'number',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

