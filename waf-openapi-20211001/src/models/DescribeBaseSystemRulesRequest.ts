// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBaseSystemRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of attack that the system protection rule detects. Valid values:
   * 
   * - **sqli**: SQL injection.
   * 
   * - **xss**: cross-site scripting (XSS).
   * 
   * - **cmdi**: OS command injection.
   * 
   * - **expression_injection**: expression injection.
   * 
   * - **java_deserialization**: Java deserialization.
   * 
   * - **dot_net_deserialization**: .NET deserialization.
   * 
   * - **php_deserialization**: PHP deserialization.
   * 
   * - **code_exec**: code execution.
   * 
   * - **ssrf**: server-side request forgery (SSRF).
   * 
   * - **path_traversal**: path traversal.
   * 
   * - **arbitrary_file_uploading**: arbitrary file upload.
   * 
   * - **webshell**: webshell.
   * 
   * - **rfilei**: remote file inclusion (RFI).
   * 
   * - **lfilei**: local file inclusion (LFI).
   * 
   * - **protocol_violation**: protocol violation.
   * 
   * - **scanner_behavior**: scanner behavior.
   * 
   * - **logic_flaw**: logic flaw.
   * 
   * - **arbitrary_file_reading**: arbitrary file read.
   * 
   * - **arbitrary_file_download**: arbitrary file download.
   * 
   * - **xxe**: external entity injection.
   * 
   * - **csrf**: cross-site request forgery (CSRF).
   * 
   * - **crlf**: CRLF injection.
   * 
   * - **other**: other.
   * 
   * @example
   * sqli
   */
  detectType?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of your WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
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
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The risk level of the system protection rule. Valid values:
   * 
   * - **super_strict**: Very Strict.
   * 
   * - **strict**: Strict.
   * 
   * - **medium**: Medium.
   * 
   * - **loose**: Loose.
   * 
   * @example
   * loose
   */
  riskLevel?: string;
  /**
   * @remarks
   * The action of the system protection rule. Valid values:
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
   * The ID of the system protection rule to query.
   * 
   * @example
   * 113089
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the system protection rule.
   * 
   * @example
   * systemRuleTest
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the system protection rule. Valid values:
   * 
   * - **1**: disabled.
   * 
   * - **0**: enabled.
   * 
   * @example
   * 1
   */
  ruleStatus?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * > - Specify this parameter to query the system protection rules in a specific WAF protection template.
   * >
   * > - If you leave this parameter empty, the default configurations of the system protection rules are queried.
   * 
   * @example
   * 24354
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      detectType: 'DetectType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      riskLevel: 'RiskLevel',
      ruleAction: 'RuleAction',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectType: 'string',
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      riskLevel: 'string',
      ruleAction: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleStatus: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

