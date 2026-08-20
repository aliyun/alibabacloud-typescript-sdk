// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResolverRuleRequestForwardIp extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination server.
   * 
   * > The IP addresses in the following ranges are reserved by the system and cannot be used for external DNS servers:
   * > 100.100.2.136-100.100.2.138
   * > 100.100.2.116-100.100.2.118
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port number of the destination server.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleRequestPriorityForwardConfigs extends $dara.Model {
  alidnsServiceAddresses?: string[];
  customAddresses?: string[];
  enableStatus?: string;
  priority?: number;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      alidnsServiceAddresses: 'AlidnsServiceAddresses',
      customAddresses: 'CustomAddresses',
      enableStatus: 'EnableStatus',
      priority: 'Priority',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alidnsServiceAddresses: { 'type': 'array', 'itemType': 'string' },
      customAddresses: { 'type': 'array', 'itemType': 'string' },
      enableStatus: 'string',
      priority: 'number',
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alidnsServiceAddresses)) {
      $dara.Model.validateArray(this.alidnsServiceAddresses);
    }
    if(Array.isArray(this.customAddresses)) {
      $dara.Model.validateArray(this.customAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResolverRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The IP addresses and ports of external DNS servers. DNS queries are forwarded to these servers. You can specify up to six servers. Both private and public IP addresses are supported.
   * 
   * > If you specify a public IP address for an external DNS server, and the Elastic Compute Service (ECS) instances in the virtual private cloud (VPC) for the outbound endpoint do not have public IP addresses, enable a NAT Gateway and configure Source Network Address Translation (SNAT) entries for it.
   */
  forwardIp?: UpdateResolverRuleRequestForwardIp[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * Forwarding rule-test
   */
  name?: string;
  priorityForwardConfigs?: UpdateResolverRuleRequestPriorityForwardConfigs[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      forwardIp: 'ForwardIp',
      lang: 'Lang',
      name: 'Name',
      priorityForwardConfigs: 'PriorityForwardConfigs',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      forwardIp: { 'type': 'array', 'itemType': UpdateResolverRuleRequestForwardIp },
      lang: 'string',
      name: 'string',
      priorityForwardConfigs: { 'type': 'array', 'itemType': UpdateResolverRuleRequestPriorityForwardConfigs },
      ruleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardIp)) {
      $dara.Model.validateArray(this.forwardIp);
    }
    if(Array.isArray(this.priorityForwardConfigs)) {
      $dara.Model.validateArray(this.priorityForwardConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

