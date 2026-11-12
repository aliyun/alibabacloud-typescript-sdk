// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFirewallTemplateRequestFirewallRule extends $dara.Model {
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Use a forward slash (/) to separate the start port and the end port. For example, `1024/1055` indicates a port range from 1024 to 1055.
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
   * The remark for the firewall rule.
   * 
   * @example
   * Custom rule
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
   * The source IPv4 CIDR block for which to set access permissions. Both CIDR and IPv4 formats are supported for the IP address range.
   * 
   * This parameter is required.
   * 
   * @example
   * 223.166.XX.XX
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

export class CreateFirewallTemplateRequest extends $dara.Model {
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
   * The firewall rules.
   */
  firewallRule?: CreateFirewallTemplateRequestFirewallRule[];
  /**
   * @remarks
   * The name of the firewall template.
   * 
   * This parameter is required.
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
      description: 'Description',
      firewallRule: 'FirewallRule',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      firewallRule: { 'type': 'array', 'itemType': CreateFirewallTemplateRequestFirewallRule },
      name: 'string',
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

