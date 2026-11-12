// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFirewallTemplateRulesResponseBodyFirewallTemplateRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall template rule.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateRuleId?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Separate the start port and the end port with a forward slash (/). For example, `1024/1055` indicates the port range from 1024 to 1055.
   * 
   * > If you set the protocol to ICMP, the port must be set to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The description of the firewall rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * - TCP: TCP.
   * - UDP: UDP.
   * - TCP+UDP: TCP and UDP.
   * - ICMP: ICMP.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source IPv4 CIDR address range for which you want to configure access Settings. Address ranges in CIDR format and IPv4 format are supported.
   * 
   * @example
   * 171.233.XX.XX
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateRuleId: 'FirewallTemplateRuleId',
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateRuleId: 'string',
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The firewall template rules.
   */
  firewallTemplateRules?: CreateFirewallTemplateRulesResponseBodyFirewallTemplateRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateRules: 'FirewallTemplateRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateRules: { 'type': 'array', 'itemType': CreateFirewallTemplateRulesResponseBodyFirewallTemplateRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateRules)) {
      $dara.Model.validateArray(this.firewallTemplateRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

