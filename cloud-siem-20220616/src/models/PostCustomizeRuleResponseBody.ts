// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostCustomizeRuleResponseBodyData extends $dara.Model {
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
   * The ID of the Alibaba Cloud account that is used to purchase Threat Analysis.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The ATT\\&CK attack technique.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The data type of the condition field in the automated response rule.
   * 
   * @example
   * varchar
   */
  dataType?: number;
  /**
   * @remarks
   * The extended information for event generation. This parameter is returned only when EventTransferType is set to allToSingle. The value indicates the length and unit of the alert aggregation window. You must unescape the HTML escape characters.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;MINUTE&quot;}
   */
  eventTransferExt?: string;
  /**
   * @remarks
   * Indicates whether alerts are converted into events. Valid values:
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
   * The time when the custom rule was created.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the custom rule was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
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
   * The length of the rule window. You must unescape the HTML escape characters.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;HOUR&quot;}
   */
  queryCycle?: string;
  /**
   * @remarks
   * The query condition of the rule in the JSON format. You must unescape the HTML escape characters.
   * 
   * @example
   * [[{&quot;not&quot;:false,&quot;left&quot;:&quot;alert_name&quot;,&quot;operator&quot;:&quot;=&quot;,&quot;right&quot;:&quot;WEBSHELL&quot;}]]
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
   * The fields that are used to group logs. The value is a JSON array. You must unescape the HTML escape characters.
   * 
   * @example
   * [&quot;asset_id&quot;]
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
   * The threshold configuration of the rule in the JSON format. You must unescape the HTML escape characters.
   * 
   * @example
   * {&quot;aggregateFunction&quot;:&quot;count&quot;,&quot;aggregateFunctionName&quot;:&quot;count&quot;,&quot;field&quot;:&quot;activity_name&quot;,&quot;operator&quot;:&quot;&lt;=&quot;,&quot;value&quot;:1}
   */
  ruleThreshold?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * - predefine: predefined
   * 
   * - customize: custom
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - 0: initial
   * 
   * - 10: testing with simulated data
   * 
   * - 15: testing with business data
   * 
   * - 20: test with business data ends
   * 
   * - 100: published
   * 
   * @example
   * 0
   */
  status?: number;
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
      aliuid: 'Aliuid',
      attCk: 'AttCk',
      dataType: 'DataType',
      eventTransferExt: 'EventTransferExt',
      eventTransferSwitch: 'EventTransferSwitch',
      eventTransferType: 'EventTransferType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      logSource: 'LogSource',
      logSourceMds: 'LogSourceMds',
      logType: 'LogType',
      logTypeMds: 'LogTypeMds',
      queryCycle: 'QueryCycle',
      ruleCondition: 'RuleCondition',
      ruleDesc: 'RuleDesc',
      ruleGroup: 'RuleGroup',
      ruleName: 'RuleName',
      ruleThreshold: 'RuleThreshold',
      ruleType: 'RuleType',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      alertTypeMds: 'string',
      aliuid: 'number',
      attCk: 'string',
      dataType: 'number',
      eventTransferExt: 'string',
      eventTransferSwitch: 'number',
      eventTransferType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      logSource: 'string',
      logSourceMds: 'string',
      logType: 'string',
      logTypeMds: 'string',
      queryCycle: 'string',
      ruleCondition: 'string',
      ruleDesc: 'string',
      ruleGroup: 'string',
      ruleName: 'string',
      ruleThreshold: 'string',
      ruleType: 'string',
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

export class PostCustomizeRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: PostCustomizeRuleResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: PostCustomizeRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

