// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecureSuggestionResponseBodySuggestionsDetail extends $dara.Model {
  /**
   * @remarks
   * The description of the suggestion.
   * 
   * @example
   * Malicious tampering of Web pages will affect your normal access to web page content, and may also lead to serious economic losses, brand losses, and even political risks. The webpage tamper-proof service can monitor the website directory in real time and restore the tampered files or directories through backup, so as to ensure that the website information of important systems is not tampered with maliciously and prevent the occurrence of horse hanging, black chain, illegal implantation of terrorist threats, pornography and other content.
   */
  description?: string;
  /**
   * @remarks
   * The sub-type of the unhandled risk. Valid values:
   * 
   * *   **ALARM_HIGH**: Unhandled Urgency Alerts
   * *   **ALARM_MEDIUM**: Unhandled Warning Alerts
   * *   **ALARM_LOW**: Unhandled Reminder Alerts
   * *   **VUL_EMR_UNCHECK**: Unchecked Urgent Vulnerabilities
   * *   **VUL_EMR_UNFIX**: Unfixed Urgent Vulnerabilities
   * *   **VUL_WIN**: Unfixed Windows Server Vulnerabilities
   * *   **VUL_LINUX**: Unfixed Linux Server Vulnerabilities
   * *   **VUL_CMS**: Unfixed CMS Vulnerabilities
   * *   **ACCESSKEY_LEAK**: AccessKey Leakage Risks
   * *   **HC_WARN**: Baseline Risks
   * *   **HC_WEAK_EXPLOIT_WARN**: There is a risk of weak passwords exposed by the public network.
   * *   **HC_WEAK_PASSWORD_WARN**: Risk of weak password
   * *   **HC_HIGH_EXPLOIT_WARN**: There is a high risk of invasion
   * *   **HC_OTHER_WARN**: Security Configuration risk
   * *   **HC_DATABASE_WARN**: Database has security risks
   * *   **CLOUD_HC_SAS_OPEN**: Security protection has not been installed on the server
   * *   **CLOUD_HC_AEGIS_OFFLINE**: Server protection status is offline
   * *   **CLOUD_HC_ACCOUNT_DOUBLE_CHECK**: Two-Factor Authentication not Enabled for Primary Account
   * *   **CLOUD_HC_RDS**: RDS-database security policy failed, security risks
   * *   **CLOUD_HC_DDOS**: Risks in Anti-DDoS Pro Back-to-Origin Settings
   * *   **CLOUD_HC_HIGH_LEVEL**: Cloud product configuration has high risk
   * *   **CLOUD_HC_OTHER_LEVEL**: Cloud product configuration has medium and low risk risks
   * *   **OTHER_ATTACH**: Attacks
   * *   **OTHER_DATABASE_ATTACH**: Database has security risks
   * *   **REINFORCE_BASELINE**: Config Assessment
   * *   **REINFORCE_SUSPICIOUS**: Antivirus
   * *   **REINFORCE_ANALYSIS**: Log Analysis
   * *   **REINFORCE_AK_LEAK**: AccessKey Leaked Intelligence Detection
   * *   **REINFORCE_WEB_LOCK**: Website tamper-proofing capability not configured
   * *   **REINFORCE_BRUTE_FORCE**: Anti brute force cracking
   * *   **REINFORCE_XPRESS_INSTALL**: One-click client installation
   * *   **REINFORCE_RANSOMWARE**: Enable anti-extortion strategy
   * *   **REINFORCE_UNI_RANSOMWARE**: Anti-ransomware for Databases
   * *   **REINFORCE_VIRUS_SCHEDULE_SCAN**: Periodic virus scan policies not configured
   * *   **REINFORCE_IMAGE_REPO_SCAN**: No container image scan range configured
   * *   **REINFORCE_IMAGE_SCAN_TASK**: Image security scan
   * *   **REINFORCE_K8S_LOG_ANALYSIS**: Container K8s threat detection is disabled
   * *   **REINFORCE_CONTAINER_NETWORK**: Container Visualization
   * 
   * @example
   * REINFORCE_WEB_LOCK
   */
  subType?: string;
  /**
   * @remarks
   * The name of the unhandled risk.
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
   * The details of the suggestion.
   */
  detail?: DescribeSecureSuggestionResponseBodySuggestionsDetail[];
  /**
   * @remarks
   * The penalty point of a deduction item.
   * 
   * @example
   * 40
   */
  points?: number;
  /**
   * @remarks
   * The type of the unhandled risk. Valid values:
   * 
   * *   **SS_REINFORCE**: missing configuration of key features, such as malicious behavior defense
   * *   **SS_ALARM**: unhandled alerts
   * *   **SS_VUL**: unfixed vulnerabilities
   * *   **SS_HC**: baseline risks
   * *   **SS_AK**: AccessKey pair leaks
   * *   **SS_CLOUD_HC**: configuration risks of cloud services
   * *   **OTHER**: others
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
   * The timestamp of security score calculation.
   * 
   * @example
   * 1755744253000
   */
  calTime?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 676F80E3-4B3F-43DA-9CBB-5FF79F202AA2
   */
  requestId?: string;
  /**
   * @remarks
   * The suggestions on how to handle the risks.
   */
  suggestions?: DescribeSecureSuggestionResponseBodySuggestions[];
  /**
   * @remarks
   * The total number of unhandled security risks.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      calTime: 'CalTime',
      requestId: 'RequestId',
      suggestions: 'Suggestions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calTime: 'number',
      requestId: 'string',
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

