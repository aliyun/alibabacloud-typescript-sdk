// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudSiemCustomizeRulesResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesResponseBodyDataResponseData extends $dara.Model {
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
   * The internal code of the risk type.
   * 
   * @example
   * ${siem_rule_type_process_abnormal_command}
   */
  alertTypeMds?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
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
   * The type of the view. Valid values:
   * 
   * 0: view of the current Alibaba Cloud account. 1: view of all accounts for the enterprise.
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * The extended information about event generation. If the value of **eventTransferType** is **allToSingle**, the value of this parameter indicates the length and unit of the alert aggregation window. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;MINUTE&quot;}
   */
  eventTransferExt?: string;
  /**
   * @remarks
   * Indicates whether the system generates an event for the alert. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 1
   */
  eventTransferSwitch?: number;
  /**
   * @remarks
   * The method that is used to generate an event. Valid values:
   * 
   * *   **default**: built-in method.
   * *   **singleToSingle**: The system generates an event for each alert.
   * *   **allToSingle**: The system generates an event for alerts within a period of time.
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
   * The internal code of the log source.
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
   * The internal code of the log type.
   * 
   * @example
   * ${sas.cloudsiem.prod.alert_activity}
   */
  logTypeMds?: string;
  /**
   * @remarks
   * The window length of the rule. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;HOUR&quot;}
   */
  queryCycle?: string;
  /**
   * @remarks
   * The query condition of the rule. The value is in the JSON format. The HTML escape characters are reversed.
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
   * The log aggregation field. The value is in the JSON format. The HTML escape characters are reversed.
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
   * The threshold configurations of the rule in the JSON format. The HTML escape characters are reversed.
   * 
   * @example
   * {&quot;aggregateFunction&quot;:&quot;count&quot;,&quot;aggregateFunctionName&quot;:&quot;count&quot;,&quot;field&quot;:&quot;activity_name&quot;,&quot;operator&quot;:&quot;&lt;=&quot;,&quot;value&quot;:1}
   */
  ruleThreshold?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **predefine**
   * *   **customize**
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   **0**: The rule is in the initial state.
   * *   **10**: The simulation data is tested.
   * *   **15**: The business data is being tested.
   * *   **20**: The business data test is complete.
   * *   **100**: The rule is in effect.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **serious**: high-risk.
   * *   **suspicious**: medium-risk.
   * *   **remind**: low-risk.
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

export class ListCloudSiemCustomizeRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudSiemCustomizeRulesResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCloudSiemCustomizeRulesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCloudSiemCustomizeRulesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCloudSiemCustomizeRulesResponseBodyDataResponseData },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.responseData)) {
      $dara.Model.validateArray(this.responseData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudSiemCustomizeRulesResponseBody extends $dara.Model {
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
  data?: ListCloudSiemCustomizeRulesResponseBodyData;
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
   * *   **true**
   * *   **false**
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
      data: ListCloudSiemCustomizeRulesResponseBodyData,
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

