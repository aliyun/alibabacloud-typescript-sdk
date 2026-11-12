// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFirewallTemplateRequestFirewallTemplateRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall template rule.
   * 
   * This parameter is required.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  firewallTemplateRuleId?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. For example, `1024/1055` indicates a port range from 1024 to 1055.
   * 
   * > If you set the protocol to ICMP, the port must be set to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remark of the firewall rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * - TCP: TCP
   * - UDP: UDP
   * - TCP+UDP: TCP and UDP
   * - ICMP: ICMP
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source IPv4 CIDR block for which you want to configure access permissions. You can specify an IP address range in CIDR format or IPv4 format.
   * 
   * @example
   * 0.0.0.0/0
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

export class ModifyFirewallTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the firewall template.
   * 
   * @example
   * test
   */
  description?: string;
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
   * The firewall rules.
   */
  firewallTemplateRule?: ModifyFirewallTemplateRequestFirewallTemplateRule[];
  /**
   * @remarks
   * The name of the firewall template.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the Simple Application Server instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the list of supported Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      firewallTemplateId: 'FirewallTemplateId',
      firewallTemplateRule: 'FirewallTemplateRule',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      firewallTemplateId: 'string',
      firewallTemplateRule: { 'type': 'array', 'itemType': ModifyFirewallTemplateRequestFirewallTemplateRule },
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateRule)) {
      $dara.Model.validateArray(this.firewallTemplateRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

