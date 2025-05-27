// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudSiemPredefinedRulesResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The type of the risk.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The alert additional field for ATT\\&CK.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The method that is used to generate an event. Valid values:
   * 
   * *   default: built-in method.
   * *   singleToSingle: The system generates an event for each alert.
   * *   allToSingle: The system generates an event for alerts within a period of time.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The time when the rule was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the rule was modified.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the predefined rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The internal code of the rule description.
   * 
   * @example
   * ${siem_rule_description_siem_cfw-attack-count-level-up_cfw-attack}
   */
  ruleDescMds?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * siem_base64-command-exec_aegis-proc
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule name in Chinese.
   * 
   * @example
   * siem_base64-command-exec_aegis-proc
   */
  ruleNameCn?: string;
  /**
   * @remarks
   * The rule name in English.
   * 
   * @example
   * siem_base64-command-exec_aegis-proc
   */
  ruleNameEn?: string;
  /**
   * @remarks
   * The internal code of the rule name.
   * 
   * @example
   * ${siem_rule_name_siem_cfw-attack-count-level-up_cfw-attack}
   */
  ruleNameMds?: string;
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  source?: string;
  /**
   * @remarks
   * The status of the predefined rule. Valid values:
   * 
   * *   0: The rule is in the initial state.
   * *   100: The rule takes effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   serious: high.
   * *   suspicious: medium.
   * *   remind: low.
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      attCk: 'AttCk',
      eventTransferType: 'EventTransferType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ruleDescMds: 'RuleDescMds',
      ruleName: 'RuleName',
      ruleNameCn: 'RuleNameCn',
      ruleNameEn: 'RuleNameEn',
      ruleNameMds: 'RuleNameMds',
      source: 'Source',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      attCk: 'string',
      eventTransferType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      ruleDescMds: 'string',
      ruleName: 'string',
      ruleNameCn: 'string',
      ruleNameEn: 'string',
      ruleNameMds: 'string',
      source: 'string',
      status: 'number',
      threatLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

