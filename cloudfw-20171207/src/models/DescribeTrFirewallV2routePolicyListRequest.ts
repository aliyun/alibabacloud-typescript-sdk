// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrFirewallV2RoutePolicyListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) firewall instance. This parameter is required. If this parameter is not specified, an ErrorParameters (400) error is returned. You can call the DescribeTrFirewallsV2List operation to obtain the ID.
   * 
   * @example
   * vfw-tr-d5ba592ac6c84aff****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page for a paged query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the firewall route policy.
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

