// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRiskItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number in a paging query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the risk analysis policy. Fuzzy matching is supported.
   * 
   * @example
   * Remote logon risk analysis policy
   */
  policyName?: string;
  /**
   * @remarks
   * The risk category. Valid values:
   * * `data_safe`: data security.
   * * `identify_safe`: identity security.
   * * `device_safe`: device security.
   * * `access_safe`: access security.
   * * `ai_agent_safe`: Agent security.
   * 
   * @example
   * identify_safe
   */
  riskCategory?: string;
  /**
   * @remarks
   * The risk event ID. If specified, the system performs an exact query for the specified risk event.
   * 
   * @example
   * 69ef648034cf53d7bac7a9c9c912****
   */
  riskId?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * * `High`: high risk.
   * * `Medium`: medium risk.
   * * `Low`: low risk.
   * 
   * @example
   * High
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk scenario. Valid values:
   * * `account_share`: account sharing.
   * * `account_stolen`: account theft.
   * * `device_share`: device sharing.
   * * `remote_logon`: remote logon.
   * * `sensitive_data_leakage`: sensitive data exfiltration.
   * * `lateral_scanning`: lateral scanning.
   * * `ai_skill_malware`: malicious Skill.
   * * `ai_config_check`: AI configuration check.
   * * `openclaw_vulnerability`: OpenClaw vulnerability.
   * 
   * @example
   * account_stolen
   */
  riskScene?: string;
  /**
   * @remarks
   * The disposition status of the risk event. This parameter cannot be used together with `StatusList`.
   * 
   * @example
   * Unprocess
   */
  status?: string;
  /**
   * @remarks
   * The list of disposition statuses of risk events, in Flat serialization format. This parameter cannot be used together with Status.
   */
  statusList?: string[];
  /**
   * @remarks
   * The username associated with the risk event. Fuzzy matching is supported. Maximum length: 128 characters.
   * 
   * @example
   * zhang***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyName: 'PolicyName',
      riskCategory: 'RiskCategory',
      riskId: 'RiskId',
      riskLevel: 'RiskLevel',
      riskScene: 'RiskScene',
      status: 'Status',
      statusList: 'StatusList',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyName: 'string',
      riskCategory: 'string',
      riskId: 'string',
      riskLevel: 'string',
      riskScene: 'string',
      status: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

