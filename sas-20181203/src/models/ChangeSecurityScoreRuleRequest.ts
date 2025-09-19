// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeSecurityScoreRuleRequestSecurityScoreCategoryListSecurityRuleListSecurityScoreItemList extends $dara.Model {
  /**
   * @remarks
   * The penalty point of the deduction item.
   * 
   * @example
   * 2
   */
  score?: number;
  /**
   * @remarks
   * The threshold for the deduction item.
   * 
   * >  Valid values: 0 to the deduction threshold of the deduction module.
   * 
   * @example
   * 5
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The sub-deduction item of the security score rule.
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
   * The deducted module that is supported by the security score feature. The type of the sub-deduction item. Valid values:
   * 
   * *   **SS_SAS_WEAK_PW**: unhandled weak password risk.
   * *   **SS_SAS_ALARM**: unhandled alert in Security Center.
   * *   **SS_SAS_EMG_VUL**: unfixed urgent vulnerability.
   * *   **SS_SAS_APP_VUL**: unfixed application vulnerability.
   * *   **SS_SAS_SYS_VUL**: unfixed system vulnerability.
   * *   **SS_SAS_CLOUD_HC**: unhandled cloud security posture management (CSPM) risk.
   * *   **SS_SDDP_DATA_RISK**: unhandled data security risk.
   * *   **SS_WAF_API_RISK**: unhandled API security risk.
   * *   **SS_DDOS_BH_ASSET**: asset on which blackhole filtering is triggered.
   * *   **SS_SAS_AK_LEAK**: unhandled AK/SK leak event.
   * *   **SS_PRODUCT_CONNECT**: security service not integrated.
   * *   **SS_KEY_CONFIG**: key feature configuration.
   * *   **SS_PRODUCT_EXPIRE**: service that is about to expire.
   * *   **SS_AI_RISK**: AI application risk.
   * 
   * @example
   * SS_REINFORCE
   */
  ruleType?: string;
  /**
   * @remarks
   * The threshold of deduction for the security score rule type.
   * 
   * >  Valid values: 0 to the deduction threshold of the deduction module.
   * 
   * @example
   * 10
   */
  score?: number;
  /**
   * @remarks
   * The sub-deduction items of the security score rule.
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
   * 
   * *   **SS_SAS_HANDLE**: security governance.
   * *   **SS_SAS_RESPOND**: security response.
   * 
   * @example
   * SS_SAS_HANDLE
   */
  category?: string;
  /**
   * @remarks
   * The threshold of deduction for the security score rule type.
   * 
   * >  Valid values: 0 to 100. The sum of the deduction thresholds for all deduction modules must be equal to 100.
   * 
   * @example
   * 20
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The deduction items of the security score rule.
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
   * The penalty point of the deduction item.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The threshold for the deduction item.
   * 
   * >  Valid values: 0 to the deduction threshold of the deduction module.
   * 
   * @example
   * 10
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The deduction item of the deduction module. The following list describes the deduction modules and their deduction items:
   * 
   * *   SS_REINFORCE: issue in key feature configuration
   * 
   *     *   XPRESS_INSTALL: Security Center is not authorized.
   *     *   REINFORCE_SUSPICIOUS: The anti-virus feature is disabled.
   *     *   RANSOMWARE: The anti-ransomware policy is disabled.
   *     *   WEB_LOCK: The web tamper proofing feature is disabled.
   *     *   VIRUS_SCHEDULE_SCAN: The periodic virus scan policy is disabled.
   *     *   IMAGE_REPO_SCAN: The container image scan range is not configured.
   *     *   IMAGE_SCAN_TASK: The feature of one-click scan of container images for security risks is not performed.
   * 
   * *   SS_ALARM: unhandled alert
   * 
   *     *   ALARM_SERIOUS: An unhandled high-risk alert event is detected.
   *     *   ALARM_SUSPICIOUS: An unhandled medium-risk alarm event is detected.
   *     *   ALARM_REMIND: An unhandled low-risk alarm event is detected.
   * 
   * *   SS_VUL: unfixed vulnerability
   * 
   *     *   CMS_UNFIX: An unfixed Web-CMS vulnerability is detected.
   *     *   WIN_UNFIX: An unfixed Windows host vulnerability is detected.
   *     *   CVE_UNFIX: An unfixed Linux host vulnerability is detected.
   *     *   ERM_UNFIX: An unfixed emergency vulnerability is detected.
   *     *   ERM_UNCHECK: An undetected emergency vulnerability exists.
   * 
   * *   SS_HC: baseline risk
   * 
   *     *   WEAK_EXPLOIT: Weak passwords are exposed to the Internet.
   *     *   WEAK_PASSWORD: Weak passwords exist.
   *     *   HC_EXPLOIT: The data source may be hacked.
   *     *   HC_OTHER_WARNING: Security configuration risks exist.
   * 
   * *   SS_CLOUD_HC: Cloud platform configuration check item problem.
   * 
   *     *   CSPM_CIEM_NOT_PASS: A CIEM check item failed the check.
   *     *   CSPM_RISK_NOT_PASS: A security risk check item failed the check.
   *     *   CSPM_COMPLIANCE_NOT_PASS: A compliance check item failed the check.
   * 
   * *   SS_AK: risk of AccessKey pair leaks
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
   * 
   * *   SS_REINFORCE: issue in key feature configuration
   * *   SS_ALARM: unhandled alert
   * *   SS_VUL: unfixed vulnerability
   * *   SS_HC: baseline risk
   * *   SS_CLOUD_HC: risk item of configuration assessment
   * *   SS_AK: risk of AccessKey pair leaks
   * 
   * @example
   * SS_ALARM
   */
  ruleType?: string;
  /**
   * @remarks
   * The deduction threshold of the deduction module.
   * 
   * >  Valid values: 0 to 100. The sum of the deduction thresholds for all deduction modules must be equal to 100.
   * 
   * @example
   * 5
   */
  score?: number;
  /**
   * @remarks
   * The deduction items of the deduction module.
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
   * The old or new version of the security score rule. If you set this parameter to **home_security_score**, the new version of the security score rule is changed. Otherwise, the old version of the security score rule is changed by default.
   * 
   * @example
   * home_security_score
   */
  calType?: string;
  /**
   * @remarks
   * Specifies whether to reset to the system default rule. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * false
   */
  resetSecurityScoreRule?: boolean;
  /**
   * @remarks
   * The information about the new version of the security score rule.
   */
  securityScoreCategoryList?: ChangeSecurityScoreRuleRequestSecurityScoreCategoryList[];
  /**
   * @remarks
   * The information about the old version of the security score rule.
   */
  securityScoreRuleList?: ChangeSecurityScoreRuleRequestSecurityScoreRuleList[];
  static names(): { [key: string]: string } {
    return {
      calType: 'CalType',
      resetSecurityScoreRule: 'ResetSecurityScoreRule',
      securityScoreCategoryList: 'SecurityScoreCategoryList',
      securityScoreRuleList: 'SecurityScoreRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calType: 'string',
      resetSecurityScoreRule: 'boolean',
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

