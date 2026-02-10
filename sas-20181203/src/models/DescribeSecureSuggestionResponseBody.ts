// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecureSuggestionResponseBodySuggestionsDetail extends $dara.Model {
  /**
   * @remarks
   * Description of the security risk handling suggestion.
   * 
   * @example
   * Malicious tampering of Web pages will affect your normal access to web page content, and may also lead to serious economic losses, brand losses, and even political risks. The webpage tamper-proof service can monitor the website directory in real time and restore the tampered files or directories through backup, so as to ensure that the website information of important systems is not tampered with maliciously and prevent the occurrence of horse hanging, black chain, illegal implantation of terrorist threats, pornography and other content.
   */
  description?: string;
  /**
   * @remarks
   * Types of pending security risks. The values include:
   * - **ALARM_HIGH**: Unhandled high-risk alert events
   * - **ALARM_MEDIUM**: Unhandled medium-risk alert events
   * - **ALARM_LOW**: Unhandled low-risk alert events
   * - **VUL_EMR_UNCHECK**: Unchecked urgent vulnerabilities
   * - **VUL_EMR_UNFIX**: Unfixed urgent vulnerabilities
   * - **VUL_WIN**: Unfixed Windows server vulnerabilities
   * - **VUL_LINUX**: Unfixed Linux server vulnerabilities
   * - **VUL_CMS**: Unfixed CMS vulnerabilities
   * - **ACCESSKEY_LEAK**: AccessKey leakage risks
   * - **HC_WARN**: Baseline risks
   * - **HC_WEAK_EXPLOIT_WARN**: Risks of weak passwords exposed by the public network
   * - **HC_WEAK_PASSWORD_WARN**: Risk of weak password
   * - **HC_HIGH_EXPLOIT_WARN**: High risk of being invaded
   * - **HC_OTHER_WARN**: Security configuration risks
   * - **HC_DATABASE_WARN**: Database has security risks
   * - **CLOUD_HC_SAS_OPEN**: Security protection not installed on the server
   * - **CLOUD_HC_AEGIS_OFFLINE**: Server protection status is offline
   * - **CLOUD_HC_ACCOUNT_DOUBLE_CHECK**: Two-Factor Authentication not enabled for primary account
   * - **CLOUD_HC_RDS**: RDS database security policy check failed, posing security risks
   * - **CLOUD_HC_DDOS**: Risks in Anti-DDoS Pro back-to-origin settings
   * - **CLOUD_HC_HIGH_LEVEL**: Cloud product configuration with high risk
   * - **CLOUD_HC_OTHER_LEVEL**: Cloud product configuration with medium and low risks
   * - **OTHER_ATTACH**: Attack incidents
   * - **OTHER_DATABASE_ATTACH**: Database has security risks
   * - **REINFORCE_BASELINE**: Config assessment
   * - **REINFORCE_SUSPICIOUS**: Antivirus
   * - **REINFORCE_ANALYSIS**: Log analysis
   * - **REINFORCE_AK_LEAK**: AccessKey leaked intelligence detection
   * - **REINFORCE_WEB_LOCK**: Website tamper-proofing capability not configured
   * - **REINFORCE_BRUTE_FORCE**: Anti-brute force cracking
   * - **REINFORCE_XPRESS_INSTALL**: One-click client installation
   * - **REINFORCE_RANSOMWARE**: Enable anti-ransomware strategy
   * - **REINFORCE_UNI_RANSOMWARE**: Anti-ransomware for databases
   * - **REINFORCE_VIRUS_SCHEDULE_SCAN**: Periodic virus scan policies not configured
   * - **REINFORCE_IMAGE_REPO_SCAN**: No container image scan range configured
   * - **REINFORCE_IMAGE_SCAN_TASK**: Image security scan
   * - **REINFORCE_K8S_LOG_ANALYSIS**: Container K8s threat detection is disabled
   * - **REINFORCE_CONTAINER_NETWORK**: Container visualization
   * 
   * @example
   * REINFORCE_WEB_LOCK
   */
  subType?: string;
  /**
   * @remarks
   * Name of the pending security risk item.
   * 
   * @example
   * Website tamper-proofing capability not configured
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      subType: 'SubType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      subType: 'string',
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

export class DescribeSecureSuggestionResponseBodySuggestions extends $dara.Model {
  /**
   * @remarks
   * Details of the security risk handling suggestions.
   */
  detail?: DescribeSecureSuggestionResponseBodySuggestionsDetail[];
  /**
   * @remarks
   * Deduction value for a single deduction item.
   * 
   * @example
   * 40
   */
  points?: number;
  /**
   * @remarks
   * Type of the pending security risk. Values:
   * - **SS_REINFORCE**: Key features not configured (e.g., malicious host behavior defense)
   * - **SS_ALARM**: Pending alerts
   * - **SS_VUL**: Vulnerabilities to be fixed
   * - **SS_HC**: Baseline issues
   * - **SS_AK**: AK leakage issues 
   * - **SS_CLOUD_HC**: Cloud platform configuration risks
   * - **OTHER**: Other
   * 
   * @example
   * SS_ALARM
   */
  suggestType?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      points: 'Points',
      suggestType: 'SuggestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestionsDetail },
      points: 'number',
      suggestType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecureSuggestionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Timestamp of the security score calculation.
   * 
   * @example
   * 1755744253000
   */
  calTime?: number;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for this request, and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 676F80E3-4B3F-43DA-9CBB-5FF79F202AA2
   */
  requestId?: string;
  /**
   * @remarks
   * Security score.
   * 
   * @example
   * 95
   */
  score?: string;
  /**
   * @remarks
   * List of security risk handling suggestions.
   */
  suggestions?: DescribeSecureSuggestionResponseBodySuggestions[];
  /**
   * @remarks
   * The total number of security risks that need to be reinforced.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calTime: 'CalTime',
      requestId: 'RequestId',
      score: 'Score',
      suggestions: 'Suggestions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calTime: 'number',
      requestId: 'string',
      score: 'string',
      suggestions: { 'type': 'array', 'itemType': DescribeSecureSuggestionResponseBodySuggestions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.suggestions)) {
      $dara.Model.validateArray(this.suggestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

