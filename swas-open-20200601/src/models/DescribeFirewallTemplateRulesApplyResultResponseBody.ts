// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallTemplateRulesApplyResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error codes when the firewall template rule fails to be applied.
   * 
   * @example
   * 500
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is displayed when the firewall template rule fails to be applied.
   * 
   * @example
   * An error occurred while processing your request.
   */
  errorInfo?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * > If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * - TCP
   * 
   * - UDP
   * 
   * - TCP+UDP
   * 
   * - ICMP
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
  /**
   * @remarks
   * The status of applying the firewall template rule to the simple application servers.
   * 
   * - Pending: The template rule does not start to be applied to the simple application servers.
   * 
   * - Applying: The template rule is being applied to the simple application servers.
   * 
   * - Success: The template rule is successfully applied to the simple application servers.
   * 
   * - PartFailed: The template rule fails to be applied to some simple application servers.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateRulesApplyResultResponseBody extends $dara.Model {
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
   * The returned results.
   */
  data?: DescribeFirewallTemplateRulesApplyResultResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeFirewallTemplateRulesApplyResultResponseBodyData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

