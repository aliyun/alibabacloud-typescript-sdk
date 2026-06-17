// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAclGroupListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The configuration status of the VPC boundary firewall. Valid values:
   * 
   * - **configured**: The VPC boundary firewall is configured.
   * 
   * - If you omit this parameter, the operation queries the access control policies for all VPC boundary firewalls.
   * 
   * @example
   * configured
   */
  firewallConfigureStatus?: string;
  /**
   * @remarks
   * The instance ID of the VPC boundary firewall.
   * 
   * @example
   * vfw-tr-5b202e7f0be64611****
   */
  firewallId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 50.
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

