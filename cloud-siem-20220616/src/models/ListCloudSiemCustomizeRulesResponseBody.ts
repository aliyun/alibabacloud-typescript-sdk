// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudSiemCustomizeRulesResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * The total number of entries.
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
   * The ID of the Alibaba Cloud account.
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
   * The view type.
   * 
   * 0: the view of the current Alibaba Cloud account.
   * 1: the view of all members in the enterprise.
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * The extended information for event generation. This parameter is returned only when **EventTransferType** is set to **allToSingle**. The value is a JSON-formatted string that indicates the window length and unit for alert aggregation. You must unescape the HTML escape characters in the string.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;MINUTE&quot;}
   */
  eventTransferExt?: string;
  /**
   * @remarks
   * Indicates whether to convert alerts into events. Valid values:
   * 
   * - **0**: no
   * 
   * - **1**: yes
   * 
   * @example
   * 1
   */
  eventTransferSwitch?: number;
  /**
   * @remarks
   * The event generation method. Valid values:
   * 
   * - **default**: the default method
   * 
   * - **singleToSingle**: An event is generated for each alert.
   * 
   * - **allToSingle**: An event is generated for all alerts within a period.
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
   * The log source that is associated with the rule.
   * 
   * @example
   * cloud_siem_aegis_sas_alert
   */
  logSource?: string;
  /**
   * @remarks
   * The Medusa code of the log source that is associated with the rule.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_sas_alert}
   */
  logSourceMds?: string;
  /**
   * @remarks
   * The log type that is associated with the rule.
   * 
   * @example
   * ALERT_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The Medusa code of the log type that is associated with the rule.
   * 
   * @example
   * ${sas.cloudsiem.prod.alert_activity}
   */
  logTypeMds?: string;
  /**
   * @remarks
   * The window length of the rule, which is a JSON-formatted string. You must unescape the HTML escape characters in the string.
   * 
   * @example
   * {&quot;time&quot;:&quot;1&quot;,&quot;unit&quot;:&quot;HOUR&quot;}
   */
  queryCycle?: string;
  /**
   * @remarks
   * The query condition of the rule, which is a JSON-formatted string that represents an array. You must unescape the HTML escape characters in the string.
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
   * The aggregation field of the log, which is a JSON-formatted string that represents an array. You must unescape the HTML escape characters in the string.
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
   * The threshold of the rule, which is a JSON-formatted string. You must unescape the HTML escape characters in the string.
   * 
   * @example
   * {&quot;aggregateFunction&quot;:&quot;count&quot;,&quot;aggregateFunctionName&quot;:&quot;count&quot;,&quot;field&quot;:&quot;activity_name&quot;,&quot;operator&quot;:&quot;&lt;=&quot;,&quot;value&quot;:1}
   */
  ruleThreshold?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - **predefine**: predefined
   * 
   * - **customize**: custom
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **0**: initial
   * 
   * - **10**: testing with simulated data
   * 
   * - **15**: testing with business data
   * 
   * - **20**: testing with business data is complete
   * 
   * - **100**: published
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * - **serious**: high
   * 
   * - **suspicious**: medium
   * 
   * - **remind**: low
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
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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

