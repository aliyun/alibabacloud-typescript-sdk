// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFirewallTemplateRulesRequestFirewallRule extends $dara.Model {
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Separate the start port and the end port with a forward slash (/). For example, `1024/1055` indicates the port range from 1024 to 1055.
   * 
   * > If you set the protocol to ICMP, the port must be set to -1/-1.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source IPv4 CIDR address range for which you want to configure access Settings. Address ranges in CIDR format and IPv4 format are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 222.70.XX.XX
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateFirewallTemplateRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The firewall rules.
   * 
   * This parameter is required.
   */
  firewallRule?: CreateFirewallTemplateRulesRequestFirewallRule[];
  /**
   * @remarks
   * The ID of the firewall template.
   * 
   * This parameter is required.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the available regions for Simple Application Server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallRule: 'FirewallRule',
      firewallTemplateId: 'FirewallTemplateId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRule: { 'type': 'array', 'itemType': CreateFirewallTemplateRulesRequestFirewallRule },
      firewallTemplateId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRule)) {
      $dara.Model.validateArray(this.firewallRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

