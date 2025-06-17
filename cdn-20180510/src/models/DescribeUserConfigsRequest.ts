// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The feature whose configurations you want to query. You can specify only one feature in each request. Valid values: oss, green_manager, waf, cc_rule, ddos_dispatch, edge_safe, blocked_regions, http_acl_policy, bot_manager, and ip_reputation.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  config?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

