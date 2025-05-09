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
   * Specifies whether VPC firewalls are configured. Valid values:
   * 
   * *   **notconfigured**: VPC firewalls are not configured.
   * *   **configured**: VPC firewalls are configured.
   * *   If you do not specify this parameter, the access control policies of all VPC firewalls are queried.
   * 
   * @example
   * configured
   */
  firewallConfigureStatus?: string;
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
   * The number of entries to return on each page. Maximum value: 50.
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

