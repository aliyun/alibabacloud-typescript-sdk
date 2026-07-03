// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostCustomizeRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The threat type.
   * 
   * @example
   * WEBSHELL
   */
  alertType?: string;
  /**
   * @remarks
   * The Medusa code of the threat type.
   * 
   * @example
   * ${siem_rule_type_process_abnormal_command}
   */
  alertTypeMds?: string;
  /**
   * @remarks
   * The ATT\\&CK technique.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The extended information for event generation. This parameter is returned only when EventTransferType is set to allToSingle. The value indicates the length and unit of the alert aggregation window.
   * 
   * @example
   * {"time":"1","unit":"MINUTE"}
   */
  eventTransferExt?: string;
  /**
   * @remarks
   * Specifies whether to convert alerts into events. Valid values:
   * 
   * - 0: no
   * 
   * - 1: yes
   * 
   * @example
   * 1
   */
  eventTransferSwitch?: number;
  /**
   * @remarks
   * The event generation method. Valid values:
   * 
   * - default: the default method
   * 
   * - singleToSingle: An event is generated for each alert.
   * 
   * - allToSingle: An event is generated for all alerts in a period.
   * 
   * @example
   * allToSingle
   */
  eventTransferType?: string;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The log source of the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The Medusa code of the log source.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_sas_alert}
   */
  logSourceMds?: string;
  /**
   * @remarks
   * The log type of the rule.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The Medusa code of the log type.
   * 
   * @example
   * ${security_event_config.event_name.webshellName_clientav}
   */
  logTypeMds?: string;
  /**
   * @remarks
   * The length of the rule window.
   * 
   * @example
   * {"time":"1","unit":"HOUR"}
   */
  queryCycle?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: assets in the Chinese mainland and China (Hong Kong)
   * 
   * - ap-southeast-1: assets outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that is used to switch the administrator\\"s perspective to a member\\"s perspective.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that are managed by the administrator.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The query condition of the rule. The value is a JSON string.
   * 
   * @example
   * [[{"not":false,"left":"alert_name","operator":"=","right":"WEBSHELL"}]]
   */
  ruleCondition?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * this rule is for waf scan
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The fields that are used to group logs. The value is a JSON array.
   * 
   * @example
   * ["asset_id"]
   */
  ruleGroup?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * waf_scan
   */
  ruleName?: string;
  /**
   * @remarks
   * The threshold configuration of the rule. The value is a JSON string.
   * 
   * @example
   * {"aggregateFunction":"count","aggregateFunctionName":"count","field":"activity_name","operator":"&lt;=","value":1}
   */
  ruleThreshold?: string;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * - serious: high
   * 
   * - suspicious: medium
   * 
   * - remind: low
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'AlertType',
      alertTypeMds: 'AlertTypeMds',
      attCk: 'AttCk',
      eventTransferExt: 'EventTransferExt',
      eventTransferSwitch: 'EventTransferSwitch',
      eventTransferType: 'EventTransferType',
      id: 'Id',
      logSource: 'LogSource',
      logSourceMds: 'LogSourceMds',
      logType: 'LogType',
      logTypeMds: 'LogTypeMds',
      queryCycle: 'QueryCycle',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleCondition: 'RuleCondition',
      ruleDesc: 'RuleDesc',
      ruleGroup: 'RuleGroup',
      ruleName: 'RuleName',
      ruleThreshold: 'RuleThreshold',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      alertTypeMds: 'string',
      attCk: 'string',
      eventTransferExt: 'string',
      eventTransferSwitch: 'number',
      eventTransferType: 'string',
      id: 'number',
      logSource: 'string',
      logSourceMds: 'string',
      logType: 'string',
      logTypeMds: 'string',
      queryCycle: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleCondition: 'string',
      ruleDesc: 'string',
      ruleGroup: 'string',
      ruleName: 'string',
      ruleThreshold: 'string',
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

