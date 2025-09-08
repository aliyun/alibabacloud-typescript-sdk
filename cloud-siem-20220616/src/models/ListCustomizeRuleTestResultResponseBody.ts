// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomizeRuleTestResultResponseBodyDataPageInfo extends $dara.Model {
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
  verifiedCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      verifiedCount: 'VerifiedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      verifiedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The description of the alert.
   * 
   * @example
   * The account you logged in this time is not in the legal account category defined by you. Please confirm the legality of the login behavior.
   */
  alertDesc?: string;
  /**
   * @remarks
   * The alert details in the JSON format.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "218.92.XX.XX"}
   */
  alertDetail?: string;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  alertSrcProd?: string;
  /**
   * @remarks
   * The sub-module of the source.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The tag of the ATT\\&CK attack.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The name of the alert, which corresponds to the name of the custom rule.
   * 
   * @example
   * waf_scan
   */
  eventName?: string;
  /**
   * @remarks
   * The threat type, which indicates the alert type.
   * 
   * @example
   * WEBSHELL
   */
  eventType?: string;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * *   serious: high.
   * *   suspicious: medium.
   * *   remind: low.
   * 
   * @example
   * remind
   */
  level?: string;
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
   * The time when the alert was recorded.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  logTime?: string;
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
   * The ID of the Alibaba Cloud account that is associated with the alert in SIEM.
   * 
   * @example
   * 127608589417****
   */
  mainUserId?: string;
  /**
   * @remarks
   * The status of the alert data. Valid values:
   * 
   * *   test: business test data.
   * *   online: online data.
   * 
   * @example
   * test
   */
  onlineStatus?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  uuid?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      alertDesc: 'AlertDesc',
      alertDetail: 'AlertDetail',
      alertSrcProd: 'AlertSrcProd',
      alertSrcProdModule: 'AlertSrcProdModule',
      attCk: 'AttCk',
      eventName: 'EventName',
      eventType: 'EventType',
      level: 'Level',
      logSource: 'LogSource',
      logTime: 'LogTime',
      logType: 'LogType',
      mainUserId: 'MainUserId',
      onlineStatus: 'OnlineStatus',
      subUserId: 'SubUserId',
      uuid: 'Uuid',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDesc: 'string',
      alertDetail: 'string',
      alertSrcProd: 'string',
      alertSrcProdModule: 'string',
      attCk: 'string',
      eventName: 'string',
      eventType: 'string',
      level: 'string',
      logSource: 'string',
      logTime: 'string',
      logType: 'string',
      mainUserId: 'string',
      onlineStatus: 'string',
      subUserId: 'string',
      uuid: 'string',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizeRuleTestResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCustomizeRuleTestResultResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: ListCustomizeRuleTestResultResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListCustomizeRuleTestResultResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': ListCustomizeRuleTestResultResponseBodyDataResponseData },
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

export class ListCustomizeRuleTestResultResponseBody extends $dara.Model {
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
  data?: ListCustomizeRuleTestResultResponseBodyData;
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
      data: ListCustomizeRuleTestResultResponseBodyData,
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

