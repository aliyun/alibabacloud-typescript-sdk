// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAclGroupListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page returned for a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The configuration status of the VPC firewall. Valid values:
   * - **configured**: The virtual private cloud (VPC) firewalls at the border are configured (that is, the firewalls are created).
   * - Empty: queries the access control policy of all virtual private cloud (VPC) firewalls at the border.
   * 
   * @example
   * configured
   */
  firewallConfigureStatus?: string;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewalls at the border.
   * 
   * @example
   * vfw-tr-5b202e7f0be64611****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      firewallConfigureStatus: 'FirewallConfigureStatus',
      firewallId: 'FirewallId',
      lang: 'Lang',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      firewallConfigureStatus: 'string',
      firewallId: 'string',
      lang: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

