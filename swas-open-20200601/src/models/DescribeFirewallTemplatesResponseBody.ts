// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTemplatesResponseBodyFirewallTemplatesFirewallTemplateRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall template rule.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  firewallTemplateRuleId?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * >  If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall template rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source address to which you want to grant access permissions. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 119.145.XX.XX
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

export class DescribeFirewallTemplatesResponseBodyFirewallTemplates extends $dara.Model {
  /**
   * @remarks
   * The time when the firewall template was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * @example
   * 2024-04-29T02:01:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the firewall template was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-10T02:10:14Z
   */
  creationTime?: string;
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
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The details of the firewall template rules.
   */
  firewallTemplateRules?: DescribeFirewallTemplatesResponseBodyFirewallTemplatesFirewallTemplateRules[];
  /**
   * @remarks
   * The name of the firewall template.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creationTime: 'CreationTime',
      description: 'Description',
      firewallTemplateId: 'FirewallTemplateId',
      firewallTemplateRules: 'FirewallTemplateRules',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creationTime: 'string',
      description: 'string',
      firewallTemplateId: 'string',
      firewallTemplateRules: { 'type': 'array', 'itemType': DescribeFirewallTemplatesResponseBodyFirewallTemplatesFirewallTemplateRules },
      name: 'string',
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

export class DescribeFirewallTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried firewall templates.
   */
  firewallTemplates?: DescribeFirewallTemplatesResponseBodyFirewallTemplates[];
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      firewallTemplates: 'FirewallTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplates: { 'type': 'array', 'itemType': DescribeFirewallTemplatesResponseBodyFirewallTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplates)) {
      $dara.Model.validateArray(this.firewallTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

