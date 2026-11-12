// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFirewallRulesRequestFirewallRules extends $dara.Model {
  /**
   * @remarks
   * The port number.
   * - TCP or UDP: Valid values are 1 to 65535. Use a forward slash (/) to separate the start port and the end port. Example: 1/200.
   * - ICMP: -1/-1.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * Custom firewall rule
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
   * The source IP address or CIDR block.
   * 
   * @example
   * 47.101.XX.XX
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

export class CreateFirewallRulesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key that is specified for the firewall rule. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. It can be up to 64 characters in length, cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value that is specified for the firewall rule. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. It can be up to 64 characters in length and cannot contain http:// or https://.
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

export class CreateFirewallRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The array of firewall rules.
   */
  firewallRules?: CreateFirewallRulesRequestFirewallRules[];
  /**
   * @remarks
   * The instance ID of the specified simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the regions where simple application servers are available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of tags. The list can contain up to 20 tags.
   */
  tag?: CreateFirewallRulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallRules: 'FirewallRules',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallRules: { 'type': 'array', 'itemType': CreateFirewallRulesRequestFirewallRules },
      instanceId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateFirewallRulesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.firewallRules)) {
      $dara.Model.validateArray(this.firewallRules);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

