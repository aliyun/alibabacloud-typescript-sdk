// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpsRulesToDefaultRequest extends $dara.Model {
  /**
   * @remarks
   * The attack application.
   * 
   * @example
   * PHP
   */
  attackApp?: string;
  /**
   * @remarks
   * The Cloud Firewall type. Valid values:
   * - **VpcFirewall**: virtual private cloud (VPC) firewall
   * - **InternetFirewall** (default): the Internet firewall
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The language type. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Instance ID of the NAT firewall instance. This parameter is required only when FirewallType is set to **NatFirewall**. In this case, the scope is the rules under this instance. This parameter is ignored for Internet and VPC firewalls. You can call the [ListNatFirewallIpsConfigs](https://help.aliyun.com/document_detail/2879296.html) operation to query instance ID.
   * 
   * @example
   * proxy-nat53f4bbc233234271a1d7
   */
  proxyId?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **basicRule**
   * - **customize**
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The list of rules. This parameter is conditionally required: when RuleType is set to customize, you must specify at least one of this parameter or AttackApp. If you specify only RuleType without Rules or AttackApp, the API returns an ErrorParameters error.
   * 
   * @example
   * [
   *   "uuid_1",
   *   "uuid_2"
   * ]
   */
  rules?: string;
  /**
   * @remarks
   * The source IP address of the requester.
   * 
   * @example
   * 140.205.118.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      firewallType: 'FirewallType',
      lang: 'Lang',
      proxyId: 'ProxyId',
      ruleType: 'RuleType',
      rules: 'Rules',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: 'string',
      firewallType: 'string',
      lang: 'string',
      proxyId: 'string',
      ruleType: 'string',
      rules: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

