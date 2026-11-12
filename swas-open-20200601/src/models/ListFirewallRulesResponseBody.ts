// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFirewallRulesResponseBodyFirewallRulesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the firewall rule.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the firewall rule.
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

export class ListFirewallRulesResponseBodyFirewallRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server to which the firewall rule belongs.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The firewall policy. Valid values:
   * 
   * - accept: Allow.
   * 
   * - drop: Deny.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The remark of the firewall rule.
   * 
   * @example
   * test-default port for MySQL server
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  ruleId?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * - TCP: TCP.
   * - UDP: UDP.
   * - TCP+UDP: TCP and UDP.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The tags of the firewall rules.
   */
  tags?: ListFirewallRulesResponseBodyFirewallRulesTags[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      policy: 'Policy',
      port: 'Port',
      remark: 'Remark',
      ruleId: 'RuleId',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      policy: 'string',
      port: 'string',
      remark: 'string',
      ruleId: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
      tags: { 'type': 'array', 'itemType': ListFirewallRulesResponseBodyFirewallRulesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of firewall rules.
   */
  firewallRules?: ListFirewallRulesResponseBodyFirewallRules[];
  /**
   * @remarks
   * The page number of the firewall rule list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of firewall rules.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      firewallRules: 'FirewallRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRules: { 'type': 'array', 'itemType': ListFirewallRulesResponseBodyFirewallRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRules)) {
      $dara.Model.validateArray(this.firewallRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

