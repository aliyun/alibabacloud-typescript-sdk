// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBaseSystemRulesRequest extends $dara.Model {
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
   * - **logic_flaw**: business logic flaw.
   * - **arbitrary_file_reading**: arbitrary file reading.
   * - **arbitrary_file_download**: arbitrary file download.
   * - **xxe**: external entity injection.
   * - **csrf**: cross-site request forgery (CSRF).
   * - **crlf**: CRLF.
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
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the returned rules. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number to return in a paged query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query. Default value: 100, which indicates 100 entries per page.
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
   * The risk level. Valid values:
   * 
   * - **super_strict**: Super strict.
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
   * The action of the rule. Valid values:
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
   * The IDs of the system protection rules to query.
   */
  ruleIds?: number[];
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
   * The status of the rule. Valid values:
   * - **1**: Disabled.
   * - **0**: Enabled.
   * 
   * @example
   * 1
   */
  ruleStatus?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * > 
   * > - You can set this parameter to query the system protection rules in a specific web core protection rule template.
   * > - If this parameter is left empty, the default configurations of the system protection rules are queried.
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
      ruleIds: 'RuleIds',
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
      ruleIds: { 'type': 'array', 'itemType': 'number' },
      ruleName: 'string',
      ruleStatus: 'number',
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

