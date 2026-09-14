// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsWithEventResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number of the list.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of records returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
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

export class DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList extends $dara.Model {
  /**
   * @remarks
   * The key of the alert detail attribute.
   * 
   * @example
   * suspicious.wbd.wb.trojanpath
   */
  key?: string;
  /**
   * @remarks
   * The name of the alert detail.
   * 
   * @example
   * Trojan Path
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the alert detail.
   * 
   * @example
   * /root/test33.php
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyName: 'KeyName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyName: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The alert description.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDesc?: string;
  /**
   * @remarks
   * The Medusa code of the alert description.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertDescCode?: string;
  /**
   * @remarks
   * The English description of the alert.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDescEn?: string;
  /**
   * @remarks
   * The alert details.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "21.92.*.*"}
   */
  alertDetail?: string;
  /**
   * @remarks
   * The alert details.
   * 
   * @example
   * aliyun
   */
  alertInfoList?: DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList[];
  /**
   * @remarks
   * The threat level. Valid values:
   * - serious: High.
   * - suspicious: Medium.
   * - remind: Low.
   * 
   * @example
   * remind
   */
  alertLevel?: string;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The Medusa code of the alert name.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertNameCode?: string;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameEn?: string;
  /**
   * @remarks
   * The source product of the alert associated with the incident.
   * 
   * @example
   * sas
   */
  alertSrcProd?: string;
  /**
   * @remarks
   * The submodule of the source product of the alert associated with the incident.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The alert status. Valid values: 0: Pending. 1: Handled. 2: Being handled. 3: Whitelisted, false positive, or rejected. 999: Unknown.
   * 
   * @example
   * 0
   */
  alertStatus?: string;
  /**
   * @remarks
   * The alert title.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The English title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitleEn?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The Medusa code of the alert type.
   * 
   * @example
   * security_event_config.event_name.webshellName
   */
  alertTypeCode?: string;
  /**
   * @remarks
   * The English alert type.
   * 
   * @example
   * Scan
   */
  alertTypeEn?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The asset list.
   * 
   * @example
   * [
   *       {
   *             "is_main_asset": "1",
   *             "asset_name": "47.245.*",
   *             "port": "22",
   *             "ip": "47.245.*",
   *             "asset_type": "ip",
   *             "location": "ap-southeast-1",
   *             "asset_id": "47.245.*",
   *             "net_connect_dir": "in"
   *       }
   * ]
   */
  assetList?: string;
  /**
   * @remarks
   * The ATT&CK attack technique tags.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The cloud code. Valid values:
   * - aliyun: Alibaba Cloud.
   * - qcloud: Tencent Cloud.
   * - hcloud: Huawei Cloud.
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The detection rule ID.
   * 
   * @example
   * dr-48zs4tk7qfd4rjd9****
   */
  detectionRuleId?: string;
  /**
   * @remarks
   * The time when the alert ended.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  endTime?: string;
  /**
   * @remarks
   * The entity details.
   * 
   * @example
   * [{&quot;entity_user_id&quot;:&quot;198921674491****&quot;,&quot;entity_account_id&quot;:&quot;N/A&quot;,&quot;entity_uuid&quot;:&quot;6245f979d5dd9ef8dd19bdc72228****&quot;,&quot;entity_type&quot;:&quot;host&quot;,&quot;entity_name&quot;:&quot;zhh-test-20240409&quot;,&quot;is_comprised&quot;:&quot;1&quot;,&quot;os_type&quot;:&quot;linux&quot;,&quot;entity_id&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_uuid&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_name&quot;:&quot;zhh-test-2024****&quot;}]
   */
  entityList?: string;
  /**
   * @remarks
   * The extended information of the alert.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99****"}
   */
  extendContent?: string;
  /**
   * @remarks
   * The time when the alert was stored.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the alert was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the alert.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The globally unique UUID of the incident.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The alert investigation report.
   * 
   * @example
   * {"agent_attack_confidence": 90, "agent_judgement_category": "false_positive", "reason": "The command line contains \\"mediacenter\\" which is a normal startup behavior of Lark (Feishu) client, and the process path is in the standard user installation directory.", "start_time": 1774929064, "end_time": 1774929071}
   */
  investigationReport?: string;
  /**
   * @remarks
   * Indicates whether the threat has been defended against. Valid values:
   * 
   * - 0: Detected.
   * - 1: Blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @remarks
   * The time when the alert was logged.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  logTime?: string;
  /**
   * @remarks
   * The UUID of the alert log.
   * 
   * @example
   * cfw_d12e285a-a042-4d7e-be89-f8a795ef****
   */
  logUuid?: string;
  /**
   * @remarks
   * The ID of the SIEM primary account associated with the alert.
   * 
   * @example
   * 127608589417****
   */
  mainUserId?: number;
  /**
   * @remarks
   * The time when the alert occurred.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  occurTime?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * alibaba_cloud_sas
   */
  productId?: string;
  /**
   * @remarks
   * The time when the alert first occurred.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  startTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that generated the alert.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID that generated the alert.
   * 
   * @example
   * 176555323***
   */
  subUserName?: string;
  /**
   * @remarks
   * The cloud code. Valid values:
   * - aliyun: Alibaba Cloud.
   * - qcloud: Tencent Cloud.
   * - hcloud: Huawei Cloud.
   * 
   * @example
   * aliyun
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      alertDesc: 'AlertDesc',
      alertDescCode: 'AlertDescCode',
      alertDescEn: 'AlertDescEn',
      alertDetail: 'AlertDetail',
      alertInfoList: 'AlertInfoList',
      alertLevel: 'AlertLevel',
      alertName: 'AlertName',
      alertNameCode: 'AlertNameCode',
      alertNameEn: 'AlertNameEn',
      alertSrcProd: 'AlertSrcProd',
      alertSrcProdModule: 'AlertSrcProdModule',
      alertStatus: 'AlertStatus',
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      alertType: 'AlertType',
      alertTypeCode: 'AlertTypeCode',
      alertTypeEn: 'AlertTypeEn',
      alertUuid: 'AlertUuid',
      assetList: 'AssetList',
      attCk: 'AttCk',
      cloudCode: 'CloudCode',
      detectionRuleId: 'DetectionRuleId',
      endTime: 'EndTime',
      entityList: 'EntityList',
      extendContent: 'ExtendContent',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      investigationReport: 'InvestigationReport',
      isDefend: 'IsDefend',
      logTime: 'LogTime',
      logUuid: 'LogUuid',
      mainUserId: 'MainUserId',
      occurTime: 'OccurTime',
      productId: 'ProductId',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDesc: 'string',
      alertDescCode: 'string',
      alertDescEn: 'string',
      alertDetail: 'string',
      alertInfoList: { 'type': 'array', 'itemType': DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList },
      alertLevel: 'string',
      alertName: 'string',
      alertNameCode: 'string',
      alertNameEn: 'string',
      alertSrcProd: 'string',
      alertSrcProdModule: 'string',
      alertStatus: 'string',
      alertTitle: 'string',
      alertTitleEn: 'string',
      alertType: 'string',
      alertTypeCode: 'string',
      alertTypeEn: 'string',
      alertUuid: 'string',
      assetList: 'string',
      attCk: 'string',
      cloudCode: 'string',
      detectionRuleId: 'string',
      endTime: 'string',
      entityList: 'string',
      extendContent: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      investigationReport: 'string',
      isDefend: 'string',
      logTime: 'string',
      logUuid: 'string',
      mainUserId: 'number',
      occurTime: 'string',
      productId: 'string',
      startTime: 'string',
      subUserId: 'number',
      subUserName: 'string',
      vendorId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertInfoList)) {
      $dara.Model.validateArray(this.alertInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertsWithEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAlertsWithEventResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeAlertsWithEventResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeAlertsWithEventResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeAlertsWithEventResponseBodyDataResponseData },
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

export class DescribeAlertsWithEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The request return value.
   * 
   * @example
   * 123456
   */
  data?: DescribeAlertsWithEventResponseBodyData;
  /**
   * @remarks
   * The request return message.
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
   * - true: Successful.
   * - false: Failed.
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
      data: DescribeAlertsWithEventResponseBodyData,
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

