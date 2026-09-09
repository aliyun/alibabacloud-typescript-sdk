// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeSecurityScoreRuleRequestSecurityScoreCategoryListSecurityRuleListSecurityScoreItemList extends $dara.Model {
  /**
   * @remarks
   * The deduction value for the individual item.
   * 
   * @example
   * 2
   */
  score?: number;
  /**
   * @remarks
   * The deduction threshold for the individual item.
   * 
   * > The valid range is 0 to the deduction threshold of the security score rule type.
   * 
   * @example
   * 5
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The security score rule sub-item.
   * 
   * @example
   * SSI_KEY_CONFIG
   */
  subRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      scoreThreshold: 'ScoreThreshold',
      subRuleType: 'SubRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      scoreThreshold: 'number',
      subRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSecurityScoreRuleRequestSecurityScoreCategoryListSecurityRuleList extends $dara.Model {
  /**
   * @remarks
   * The type of the security score rule sub-item. Valid values:
   * 
   * - **SS_SAS_WEAK_PW**: Pending weak passwords to fix.
   * - **SS_SAS_ALARM**: Pending Security Center alerts.
   * - **SS_SAS_EMG_VUL**: Pending emergency vulnerabilities to fix.
   * - **SS_SAS_APP_VUL**: Pending application vulnerabilities to fix.
   * - **SS_SAS_SYS_VUL**: Pending system vulnerabilities to fix.
   * - **SS_SAS_CLOUD_HC**: Pending Cloud Security Posture Management (CSPM) risks.
   * - **SS_SDDP_DATA_RISK**: Pending data security risks to address.
   * - **SS_WAF_API_RISK**: Pending API security risks.
   * - **SS_DDOS_BH_ASSET**: Assets in DDoS blackhole filtering status.
   * - **SS_SAS_AK_LEAK**: Unhandled AccessKey/SecretKey leak events.
   * - **SS_PRODUCT_CONNECT**: Security products not properly connected.
   * - **SS_KEY_CONFIG**: Key feature configuration.
   * - **SS_PRODUCT_EXPIRE**: Products about to expire.
   * - **SS_AI_RISK**: AI application risks.
   * 
   * @example
   * SS_REINFORCE
   */
  ruleType?: string;
  /**
   * @remarks
   * The deduction threshold for the security score rule type.
   * 
   * > The valid range is 0 to the deduction threshold of the security score rule category.
   * 
   * @example
   * 10
   */
  score?: number;
  /**
   * @remarks
   * The list of deductions for security score rule sub-items.
   */
  securityScoreItemList?: ChangeSecurityScoreRuleRequestSecurityScoreCategoryListSecurityRuleListSecurityScoreItemList[];
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      score: 'Score',
      securityScoreItemList: 'SecurityScoreItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      score: 'number',
      securityScoreItemList: { 'type': 'array', 'itemType': ChangeSecurityScoreRuleRequestSecurityScoreCategoryListSecurityRuleListSecurityScoreItemList },
    };
  }

  validate() {
    if(Array.isArray(this.securityScoreItemList)) {
      $dara.Model.validateArray(this.securityScoreItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSecurityScoreRuleRequestSecurityScoreCategoryList extends $dara.Model {
  /**
   * @remarks
   * The category of the security score rule. Valid values:
   * - **SS_SAS_HANDLE**: Security governance.
   * - **SS_SAS_RESPOND**: Security response.
   * 
   * @example
   * SS_SAS_HANDLE
   */
  category?: string;
  /**
   * @remarks
   * The deduction threshold for the security score rule category.
   * 
   * > The valid range is 0 to 100. The sum of all security score rule category deduction thresholds must equal 100.
   * 
   * @example
   * 20
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The list of deductions by security score rule type.
   */
  securityRuleList?: ChangeSecurityScoreRuleRequestSecurityScoreCategoryListSecurityRuleList[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      scoreThreshold: 'ScoreThreshold',
      securityRuleList: 'SecurityRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      scoreThreshold: 'number',
      securityRuleList: { 'type': 'array', 'itemType': ChangeSecurityScoreRuleRequestSecurityScoreCategoryListSecurityRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.securityRuleList)) {
      $dara.Model.validateArray(this.securityRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSecurityScoreRuleRequestSecurityScoreRuleListSecurityScoreItemList extends $dara.Model {
  /**
   * @remarks
   * The deduction value for the individual item.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The deduction threshold for the individual item.
   * 
   * > The valid range is 0 to the deduction threshold of the security score rule.
   * 
   * @example
   * 10
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The sub-rule type of the individual deduction item. The mapping between security score types and sub-rule types is as follows:
   * - SS_REINFORCE: Key feature configuration.
   *   - XPRESS_INSTALL: Security Center service authorization is not enabled.
   *   - REINFORCE_SUSPICIOUS: The anti-virus feature is not enabled.
   *   - RANSOMWARE: The anti-ransomware policy is not enabled.
   *   - WEB_LOCK: The web tamper-proofing feature is not enabled.
   *   - VIRUS_SCHEDULE_SCAN: The periodic virus scan policy is not enabled.
   *   - IMAGE_REPO_SCAN: The container image scan scope is not configured.
   *   - IMAGE_SCAN_TASK: The one-click container image security risk scan has not been executed.
   * 
   * - SS_ALARM: Pending alerts.
   *   - ALARM_SERIOUS: One unhandled high-risk alert event exists.
   *   - ALARM_SUSPICIOUS: One unhandled medium-risk alert event exists.
   *   - ALARM_REMIND: One unhandled low-risk alert event exists.
   * 
   * - SS_VUL: Pending vulnerabilities.
   *   - CMS_UNFIX: One unfixed CMS vulnerability exists.
   *   - WIN_UNFIX: One unfixed Windows host vulnerability exists.
   *   - CVE_UNFIX: One unfixed Linux host vulnerability exists.
   *   - ERM_UNFIX: One unfixed emergency vulnerability exists.
   *   - ERM_UNCHECK: One unscanned emergency vulnerability exists.
   * 
   * - SS_HC: Baseline issues.
   *   - WEAK_EXPLOIT: A weak password risk exposed to the Internet exists.
   *   - WEAK_PASSWORD: A weak password risk exists.
   *   - HC_EXPLOIT: A high-risk intrusion vulnerability exists.
   *   - HC_OTHER_WARNING: A security configuration risk exists.
   * 
   * - SS_CLOUD_HC: Cloud platform configuration check item issues.
   *   - CSPM_CIEM_NOT_PASS: One failed CIEM check item exists.
   *   - CSPM_RISK_NOT_PASS: One failed security risk check item exists.
   *   - CSPM_COMPLIANCE_NOT_PASS: One failed compliance check item exists.
   * 
   * - SS_AK: AccessKey pair leak risk. Categorization not applicable.
   * 
   * @example
   * ALARM_SERIOUS
   */
  subRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      scoreThreshold: 'ScoreThreshold',
      subRuleType: 'SubRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      scoreThreshold: 'number',
      subRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSecurityScoreRuleRequestSecurityScoreRuleList extends $dara.Model {
  /**
   * @remarks
   * The type of the security score rule. Valid values:
   * - SS_REINFORCE: Key feature configuration.
   * - SS_ALARM: Pending alerts.
   * - SS_VUL: Pending vulnerabilities.
   * - SS_HC: Baseline issues.
   * - SS_CLOUD_HC: Cloud platform configuration check item issues.
   * - SS_AK: AccessKey pair leak risk.
   * 
   * @example
   * SS_ALARM
   */
  ruleType?: string;
  /**
   * @remarks
   * The deduction value of the security score rule.
   * 
   * > The valid range is 0 to 100. The sum of all security score rule deduction thresholds must equal 100.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The list of individual deduction items for the security score rule.
   */
  securityScoreItemList?: ChangeSecurityScoreRuleRequestSecurityScoreRuleListSecurityScoreItemList[];
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      score: 'Score',
      securityScoreItemList: 'SecurityScoreItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      score: 'number',
      securityScoreItemList: { 'type': 'array', 'itemType': ChangeSecurityScoreRuleRequestSecurityScoreRuleListSecurityScoreItemList },
    };
  }

  validate() {
    if(Array.isArray(this.securityScoreItemList)) {
      $dara.Model.validateArray(this.securityScoreItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSecurityScoreRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to modify the new version or legacy security score rules. If the value is **home_security_score**, the new version security score rules are modified. Otherwise, the legacy security score rules are modified by default.
   * 
   * @example
   * home_security_score
   */
  calType?: string;
  /**
   * @remarks
   * Specifies whether to reset to the system default rules. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * false
   */
  resetSecurityScoreRule?: boolean;
  /**
   * @remarks
   * The ID of the member account in the resource directory.
   * > Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The list of new version security score rule deductions.
   */
  securityScoreCategoryList?: ChangeSecurityScoreRuleRequestSecurityScoreCategoryList[];
  /**
   * @remarks
   * The list of legacy security score rules.
   */
  securityScoreRuleList?: ChangeSecurityScoreRuleRequestSecurityScoreRuleList[];
  static names(): { [key: string]: string } {
    return {
      calType: 'CalType',
      resetSecurityScoreRule: 'ResetSecurityScoreRule',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      securityScoreCategoryList: 'SecurityScoreCategoryList',
      securityScoreRuleList: 'SecurityScoreRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calType: 'string',
      resetSecurityScoreRule: 'boolean',
      resourceDirectoryAccountId: 'number',
      securityScoreCategoryList: { 'type': 'array', 'itemType': ChangeSecurityScoreRuleRequestSecurityScoreCategoryList },
      securityScoreRuleList: { 'type': 'array', 'itemType': ChangeSecurityScoreRuleRequestSecurityScoreRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.securityScoreCategoryList)) {
      $dara.Model.validateArray(this.securityScoreCategoryList);
    }
    if(Array.isArray(this.securityScoreRuleList)) {
      $dara.Model.validateArray(this.securityScoreRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

