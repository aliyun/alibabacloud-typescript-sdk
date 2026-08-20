// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRiskItemsResponseBodyRiskItems extends $dara.Model {
  /**
   * @remarks
   * The name of the Agent that generated the risk event. An empty string is returned for non-Agent risk scenarios.
   * 
   * @example
   * qoder****
   */
  agentName?: string;
  /**
   * @remarks
   * The AI risk analysis conclusion.
   * 
   * @example
   * The account logged on from an unusual device, and the behavior is inconsistent with the historical baseline
   */
  aiConclusion?: string;
  /**
   * @remarks
   * The risk judgment provided by AI. An empty string is returned if no AI analysis results exist. Valid values:
   * * `Risk`: determined as risky.
   * * `Ignore`: determined as not risky.
   * 
   * @example
   * Risk
   */
  aiRiskConfirm?: string;
  /**
   * @remarks
   * The name of the risk detection item.
   * 
   * @example
   * Unusual device logon check
   */
  checkName?: string;
  /**
   * @remarks
   * The department to which the user associated with the risk event belongs.
   * 
   * @example
   * Department****
   */
  department?: string;
  /**
   * @remarks
   * The original organizational structure information of the user associated with the risk event.
   * 
   * @example
   * CN=zhang***,OU=Department****
   */
  groupInfo?: string;
  /**
   * @remarks
   * The name of the endpoint device associated with the risk event.
   * 
   * @example
   * U-2GW2L4M7-****
   */
  hostname?: string;
  /**
   * @remarks
   * The internal IP address of the endpoint associated with the risk event.
   * 
   * @example
   * 192.168.XX.XX
   */
  innerIp?: string;
  /**
   * @remarks
   * The risk detection report or risk evidence.
   * 
   * @example
   * The account logged on from a new device, and the logon location is inconsistent with the usual location
   */
  report?: string;
  /**
   * @remarks
   * The list of risk analysis policy names that were hit.
   */
  riskAnalysisPolicyNames?: string[];
  /**
   * @remarks
   * The risk category. Valid values:
   * - `data_safe`: data security.
   * - `identify_safe`: identity security.
   * - `device_safe`: device security.
   * - `access_safe`: access security.
   * - `ai_agent_safe`: Agent security.
   * 
   * @example
   * identify_safe
   */
  riskCategory?: string;
  /**
   * @remarks
   * The manually confirmed risk conclusion. An empty string is returned if not confirmed. Valid values:
   * * `Risk`: confirmed as risky.
   * * `Ignore`: confirmed as not risky.
   * * `Invalid`: confirmed as a false positive.
   * 
   * @example
   * Risk
   */
  riskConfirm?: string;
  /**
   * @remarks
   * The description of the risk event disposition.
   * 
   * @example
   * After verification, the logon was not authorized by the user
   */
  riskConfirmDesc?: string;
  /**
   * @remarks
   * The risk description.
   * 
   * @example
   * The account logged on from an unusual device
   */
  riskDesc?: string;
  /**
   * @remarks
   * The end time of the risky behavior, in the format of `yyyy-MM-dd HH:mm:ss`.
   * 
   * @example
   * 2026-05-21 05:21:00
   */
  riskEndTime?: string;
  /**
   * @remarks
   * The list of detection feature or detection item identifiers that triggered the risk event. A risk event may hit multiple identifiers. The specific values vary based on the risk scenario and detection rules.
   */
  riskFeatureIds?: string[];
  /**
   * @remarks
   * The time when the risk was detected, in the format of `yyyy-MM-dd HH:mm:ss`.
   * 
   * @example
   * 2026-05-20 10:30:00
   */
  riskFoundTime?: string;
  /**
   * @remarks
   * The risk event ID.
   * 
   * @example
   * 69ef648034cf53d7bac7a9c9c912****
   */
  riskId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * - `High`: high risk.
   * - `Medium`: medium risk.
   * - `Low`: low risk.
   * 
   * @example
   * High
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk scenario. Valid values:
   * - `account_share`: account sharing.
   * - `account_stolen`: account theft.
   * - `device_share`: device sharing.
   * - `remote_logon`: remote logon from an unusual location.
   * - `sensitive_data_leakage`: sensitive data exfiltration.
   * - `lateral_scanning`: lateral scanning.
   * - `ai_skill_malware`: malicious Skill.
   * - `ai_config_check`: AI configuration check.
   * - `openclaw_vulnerability`: OpenClaw vulnerability.
   * 
   * @example
   * account_stolen
   */
  riskScene?: string;
  /**
   * @remarks
   * The start time of the risky behavior, in the format of `yyyy-MM-dd HH:mm:ss`.
   * 
   * @example
   * 2026-05-20 05:20:00
   */
  riskStartTime?: string;
  /**
   * @remarks
   * The SASE user ID associated with the risk event.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The name of the Agent Skill that generated the risk event. An empty string is returned for non-Agent risk scenarios.
   * 
   * @example
   * frontend-design
   */
  skillName?: string;
  /**
   * @remarks
   * The recommended remediation action for the risk event.
   * 
   * @example
   * Verify the account user and freeze the account or reset credentials based on the verification result
   */
  solution?: string;
  /**
   * @remarks
   * The disposition status of the risk event. Valid values:
   * * `Unprocess`: unprocessed.
   * * `Processing`: being processed.
   * * `Processed`: processed.
   * 
   * @example
   * Unprocess
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether AI risk analysis results exist. Valid values:
   * * `true`: AI risk analysis results exist.
   * * `false`: AI risk analysis results do not exist.
   * 
   * @example
   * true
   */
  supportAnalysis?: boolean;
  /**
   * @remarks
   * The username associated with the risk event.
   * 
   * @example
   * zhang***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      aiConclusion: 'AiConclusion',
      aiRiskConfirm: 'AiRiskConfirm',
      checkName: 'CheckName',
      department: 'Department',
      groupInfo: 'GroupInfo',
      hostname: 'Hostname',
      innerIp: 'InnerIp',
      report: 'Report',
      riskAnalysisPolicyNames: 'RiskAnalysisPolicyNames',
      riskCategory: 'RiskCategory',
      riskConfirm: 'RiskConfirm',
      riskConfirmDesc: 'RiskConfirmDesc',
      riskDesc: 'RiskDesc',
      riskEndTime: 'RiskEndTime',
      riskFeatureIds: 'RiskFeatureIds',
      riskFoundTime: 'RiskFoundTime',
      riskId: 'RiskId',
      riskLevel: 'RiskLevel',
      riskScene: 'RiskScene',
      riskStartTime: 'RiskStartTime',
      saseUserId: 'SaseUserId',
      skillName: 'SkillName',
      solution: 'Solution',
      status: 'Status',
      supportAnalysis: 'SupportAnalysis',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      aiConclusion: 'string',
      aiRiskConfirm: 'string',
      checkName: 'string',
      department: 'string',
      groupInfo: 'string',
      hostname: 'string',
      innerIp: 'string',
      report: 'string',
      riskAnalysisPolicyNames: { 'type': 'array', 'itemType': 'string' },
      riskCategory: 'string',
      riskConfirm: 'string',
      riskConfirmDesc: 'string',
      riskDesc: 'string',
      riskEndTime: 'string',
      riskFeatureIds: { 'type': 'array', 'itemType': 'string' },
      riskFoundTime: 'string',
      riskId: 'string',
      riskLevel: 'string',
      riskScene: 'string',
      riskStartTime: 'string',
      saseUserId: 'string',
      skillName: 'string',
      solution: 'string',
      status: 'string',
      supportAnalysis: 'boolean',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskAnalysisPolicyNames)) {
      $dara.Model.validateArray(this.riskAnalysisPolicyNames);
    }
    if(Array.isArray(this.riskFeatureIds)) {
      $dara.Model.validateArray(this.riskFeatureIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRiskItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of risk events.
   */
  riskItems?: ListRiskItemsResponseBodyRiskItems[];
  /**
   * @remarks
   * The total number of risk events that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskItems: 'RiskItems',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskItems: { 'type': 'array', 'itemType': ListRiskItemsResponseBodyRiskItems },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.riskItems)) {
      $dara.Model.validateArray(this.riskItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

