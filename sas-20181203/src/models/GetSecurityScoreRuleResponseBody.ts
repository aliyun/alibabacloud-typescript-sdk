// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityScoreRuleResponseBodySecurityScoreCategoryListSecurityRuleListSecurityScoreItemList extends $dara.Model {
  /**
   * @remarks
   * The deduction value of the individual item.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The deduction threshold of the individual item.
   * 
   * @example
   * 10
   */
  scoreThreshold?: number;
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
   * - **SS_SDDP_DATA_RISK**: Pending data security risks to remediate.
   * - **SS_WAF_API_RISK**: Pending API security risks.
   * - **SS_DDOS_BH_ASSET**: Assets in Black Hole Activated status.
   * - **SS_SAS_AK_LEAK**: Unhandled AccessKey/SecretKey leakage events.
   * - **SS_PRODUCT_CONNECT**: Security products not in Normal connection status.
   * - **SS_KEY_CONFIG**: Key feature configuration.
   * - **SS_PRODUCT_EXPIRE**: Products about to expire.
   * - **SS_AI_RISK**: AI application risks.
   * 
   * @example
   * SSI_AI_VUL_RISK
   */
  subRuleType?: string;
  /**
   * @remarks
   * The name of the security score rule sub-item.
   * 
   * @example
   * Unhandled application vulnerabilities exist.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      scoreThreshold: 'ScoreThreshold',
      subRuleType: 'SubRuleType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      scoreThreshold: 'number',
      subRuleType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityScoreRuleResponseBodySecurityScoreCategoryListSecurityRuleList extends $dara.Model {
  /**
   * @remarks
   * The type of the security score rule.
   * 
   * @example
   * SS_AI_RISK
   */
  ruleType?: string;
  /**
   * @remarks
   * The deduction threshold of the security score rule type.
   * 
   * @example
   * 10
   */
  score?: number;
  /**
   * @remarks
   * The deduction list of security score rule sub-items.
   */
  securityScoreItemList?: GetSecurityScoreRuleResponseBodySecurityScoreCategoryListSecurityRuleListSecurityScoreItemList[];
  /**
   * @remarks
   * The name of the security score rule type.
   * 
   * @example
   * AI Application Risks
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      score: 'Score',
      securityScoreItemList: 'SecurityScoreItemList',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      score: 'number',
      securityScoreItemList: { 'type': 'array', 'itemType': GetSecurityScoreRuleResponseBodySecurityScoreCategoryListSecurityRuleListSecurityScoreItemList },
      title: 'string',
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

export class GetSecurityScoreRuleResponseBodySecurityScoreCategoryList extends $dara.Model {
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
   * The deduction threshold of the security score rule category.
   * 
   * @example
   * 30
   */
  score?: number;
  /**
   * @remarks
   * The deduction list of security score rule types.
   */
  securityRuleList?: GetSecurityScoreRuleResponseBodySecurityScoreCategoryListSecurityRuleList[];
  /**
   * @remarks
   * The name of the security score rule category.
   * 
   * @example
   * Security Response
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      score: 'Score',
      securityRuleList: 'SecurityRuleList',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      score: 'number',
      securityRuleList: { 'type': 'array', 'itemType': GetSecurityScoreRuleResponseBodySecurityScoreCategoryListSecurityRuleList },
      title: 'string',
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

export class GetSecurityScoreRuleResponseBodySecurityScoreRuleListSecurityScoreItemList extends $dara.Model {
  /**
   * @remarks
   * The deduction value of the individual item.
   * 
   * @example
   * 3
   */
  score?: number;
  /**
   * @remarks
   * The deduction threshold of the individual item.
   * 
   * > The configurable range is 0 to the deduction threshold of the security score rule.
   * 
   * @example
   * 5
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The sub-rule type of the security score deduction item. The relationship between security score categorization types and sub-rule types is as follows:
   * - SS_REINFORCE: Key feature configuration.
   *   - XPRESS_INSTALL: Security Center service authorization is not enabled.
   *   - REINFORCE_SUSPICIOUS: Anti-virus feature is not enabled.
   *   - RANSOMWARE: Anti-ransomware policy is not enabled.
   *   - WEB_LOCK: Web tamper-proofing feature is not enabled.
   *   - VIRUS_SCHEDULE_SCAN: Periodic virus scan policy is not enabled.
   *   - IMAGE_REPO_SCAN: Container image scan scope is not configured.
   *   - IMAGE_SCAN_TASK: One-click container image security risk scan has not been executed.
   * 
   * - SS_ALARM: Pending alerts.
   *   - ALARM_SERIOUS: One unhandled high-risk alert event exists.
   *   - ALARM_SUSPICIOUS: One unhandled medium-risk alert event exists.
   *   - ALARM_REMIND: One unhandled low-risk alert event exists.
   * 
   * - SS_VUL: Pending vulnerabilities to fix.
   *   - CMS_UNFIX: One unfixed CMS vulnerability exists.
   *   - WIN_UNFIX: One unfixed Windows host vulnerability exists.
   *   - CVE_UNFIX: One unfixed Linux host vulnerability exists.
   *   - ERM_UNFIX: One unfixed emergency vulnerability exists.
   *   - ERM_UNCHECK: One undetected emergency vulnerability exists.
   * 
   * - SS_HC: Baseline issues.
   *   - WEAK_EXPLOIT: Weak password risk exposed to the Internet exists.
   *   - WEAK_PASSWORD: Weak password risk exists.
   *   - HC_EXPLOIT: High-risk intrusion vulnerability exists.
   *   - HC_OTHER_WARNING: Security configuration risk exists.
   * 
   * - SS_CLOUD_HC: Cloud platform configuration check item issues.
   *   - CSPM_CIEM_NOT_PASS: One failed CIEM check item exists.
   *   - CSPM_RISK_NOT_PASS: One failed security risk check item exists.
   *   - CSPM_COMPLIANCE_NOT_PASS: One failed compliance check item exists.
   * 
   * - SS_AK: AccessKey leakage risk exists.
   * 
   * @example
   * ALARM_SERIOUS
   */
  subRuleType?: string;
  /**
   * @remarks
   * The description of the sub-rule type for the security score deduction item.
   * 
   * @example
   * Unhandled Urgent Alert Event Exists
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      scoreThreshold: 'ScoreThreshold',
      subRuleType: 'SubRuleType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      scoreThreshold: 'number',
      subRuleType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityScoreRuleResponseBodySecurityScoreRuleList extends $dara.Model {
  /**
   * @remarks
   * The type of the security score rule. Valid values:
   * - SS_REINFORCE: Key feature configuration.
   * - SS_ALARM: Pending alerts.
   * - SS_VUL: Pending vulnerabilities to fix.
   * - SS_HC: Baseline issues.
   * - SS_CLOUD_HC: Cloud platform configuration check item issues.
   * - SS_AK: AccessKey leakage risk exists.
   * 
   * @example
   * SS_ALARM
   */
  ruleType?: string;
  /**
   * @remarks
   * The deduction value of the security score rule.
   * 
   * > The configurable range is 0 to 100 points. The sum of all security score rule deduction thresholds must equal 100 points.
   * 
   * @example
   * 20
   */
  score?: number;
  /**
   * @remarks
   * The list of individual deduction items for the security score rule.
   */
  securityScoreItemList?: GetSecurityScoreRuleResponseBodySecurityScoreRuleListSecurityScoreItemList[];
  /**
   * @remarks
   * The description of the security score rule.
   * 
   * @example
   * Unhandled Alerts
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      score: 'Score',
      securityScoreItemList: 'SecurityScoreItemList',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      score: 'number',
      securityScoreItemList: { 'type': 'array', 'itemType': GetSecurityScoreRuleResponseBodySecurityScoreRuleListSecurityScoreItemList },
      title: 'string',
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

export class GetSecurityScoreRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The enabling status of the custom security scoring rule. Valid values:
   * - true: Enabled.
   * - false: Not enabled.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of new security score rules.
   */
  securityScoreCategoryList?: GetSecurityScoreRuleResponseBodySecurityScoreCategoryList[];
  /**
   * @remarks
   * The list of legacy security score rules.
   */
  securityScoreRuleList?: GetSecurityScoreRuleResponseBodySecurityScoreRuleList[];
  static names(): { [key: string]: string } {
    return {
      enableStatus: 'EnableStatus',
      requestId: 'RequestId',
      securityScoreCategoryList: 'SecurityScoreCategoryList',
      securityScoreRuleList: 'SecurityScoreRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableStatus: 'boolean',
      requestId: 'string',
      securityScoreCategoryList: { 'type': 'array', 'itemType': GetSecurityScoreRuleResponseBodySecurityScoreCategoryList },
      securityScoreRuleList: { 'type': 'array', 'itemType': GetSecurityScoreRuleResponseBodySecurityScoreRuleList },
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

