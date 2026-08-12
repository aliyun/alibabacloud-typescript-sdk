// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBaseSystemRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The CVE ID of the vulnerability associated with the system rule.
   * 
   * @example
   * CVE-2021-34538
   */
  cveId?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * rule description
   */
  description?: string;
  /**
   * @remarks
   * The detection module. Valid values:
   * - **sqli**: SQL injection.
   * - **xss**: cross-site scripting (XSS).
   * - **cmdi**: OS command injection.
   * - **expression_injection**: expression injection.
   * - **java_deserialization**: Java deserialization.
   * - **dot_net_deserialization**: .NET deserialization.
   * - **php_deserialization**: PHP deserialization.
   * - **code_exec**: code execution.
   * - **ssrf**: server-side request forgery (SSRF).
   * - **path_traversal**: path traversal.
   * - **arbitrary_file_uploading**: arbitrary file upload.
   * - **webshell**: webshell.
   * - **rfilei**: remote file inclusion (RFI).
   * - **lfilei**: local file inclusion (LFI).
   * - **protocol_violation**: protocol violation.
   * - **scanner_behavior**: scanner behavior.
   * - **logic_flaw**: business logic bug.
   * - **arbitrary_file_reading**: arbitrary file read.
   * - **arbitrary_file_download**: arbitrary file download.
   * - **xxe**: XML external entity injection.
   * - **csrf**: cross-site request forgery.
   * - **crlf**: CRLF injection.
   * - **other**: other.
   * 
   * @example
   * sqli
   */
  detectType?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **super_strict**: super strict.
   * 
   * - **strict**: strict.
   * 
   * - **medium**: medium.
   * 
   * - **loose**: loose.
   * 
   * @example
   * super_strict
   */
  riskLevel?: string;
  /**
   * @remarks
   * The rule action. Valid values:
   * 
   * - **block**: Block.
   * 
   * - **monitor**: Monitor.
   * 
   * @example
   * block
   */
  ruleAction?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 113089
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the protection rule.
   * 
   * @example
   * systemRuleTest
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule status. Valid values:
   * - **1**: disabled.
   * - **0**: enabled.
   * 
   * @example
   * 1
   */
  ruleStatus?: number;
  /**
   * @remarks
   * The time when the rule was last updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1665460629000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      description: 'Description',
      detectType: 'DetectType',
      riskLevel: 'RiskLevel',
      ruleAction: 'RuleAction',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      description: 'string',
      detectType: 'string',
      riskLevel: 'string',
      ruleAction: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleStatus: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBaseSystemRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 80736FA5-FA87-55F6-AA69-C5477C6FE6D0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of system protection rules.
   */
  rules?: DescribeBaseSystemRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeBaseSystemRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

