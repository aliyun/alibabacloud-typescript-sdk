// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudSiemPredefinedRulesResponseBodyDataPageInfo extends $dara.Model {
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

export class ListCloudSiemPredefinedRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCloudSiemPredefinedRulesResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCloudSiemPredefinedRulesResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCloudSiemPredefinedRulesResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCloudSiemPredefinedRulesResponseBodyDataResponseData },
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

export class ListCloudSiemPredefinedRulesResponseBody extends $dara.Model {
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
  data?: ListCloudSiemPredefinedRulesResponseBodyData;
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
   * *   true
   * *   false
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
      data: ListCloudSiemPredefinedRulesResponseBodyData,
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

