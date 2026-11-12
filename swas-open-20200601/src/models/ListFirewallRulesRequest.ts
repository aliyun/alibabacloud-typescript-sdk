// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFirewallRulesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the firewall rule. The tag key must be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the firewall rule. The tag value must be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * @example
   * 1a16263ab0f541288312a15fa64280de
   */
  firewallRuleId?: string;
  /**
   * @remarks
   * The instance ID of the specified simple application server.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the firewall rule list.
   * 
   * Starting value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags of the firewall rules.
   */
  tag?: ListFirewallRulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      firewallRuleId: 'FirewallRuleId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRuleId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ListFirewallRulesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

