// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallV2RoutePolicyListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * vfw-tr-d5ba592ac6c84aff****
   */
  firewallId?: string;
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
   * The ID of the routing policy.
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

