// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList } from "./DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList";


export class DescribeAlertsWithEventResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The description of the alert.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDesc?: string;
  /**
   * @remarks
   * The internal code of the alert description.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertDescCode?: string;
  /**
   * @remarks
   * The alert description in English.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  alertDescEn?: string;
  /**
   * @remarks
   * The details of the alert.
   * 
   * @example
   * {"main_user_id": "165295629792****";"log_uuid_count": "99";"attack_ip": "21.92.*.*"}
   */
  alertDetail?: string;
  /**
   * @remarks
   * The displayed details of the alert.
   * 
   * @example
   * aliyun
   */
  alertInfoList?: DescribeAlertsWithEventResponseBodyDataResponseDataAlertInfoList[];
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
  alertLevel?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Try SNMP weak password
   */
  alertName?: string;
  /**
   * @remarks
   * The internal code of the alert name.
   * 
   * @example
   * security_event_config.event_name.webshell
   */
  alertNameCode?: string;
  /**
   * @remarks
   * The alert name in English.
   * 
   * @example
   * Try SNMP weak password
   */
  alertNameEn?: string;
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
   * The sub-module of the alert source.
   * 
   * @example
   * waf
   */
  alertSrcProdModule?: string;
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitle?: string;
  /**
   * @remarks
   * The alert title in English.
   * 
   * @example
   * Scan-Try SNMP weak password
   */
  alertTitleEn?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * Scan
   */
  alertType?: string;
  /**
   * @remarks
   * The internal code of the alert type.
   * 
   * @example
   * security_event_config.event_name.webshellName
   */
  alertTypeCode?: string;
  /**
   * @remarks
   * The alert type in English.
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
   * The details of the asset.
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
   * The tag of the ATT\\&CK technique.
   * 
   * @example
   * T1595.002 Vulnerability Scanning
   */
  attCk?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   aliyun: Alibaba Cloud.
   * *   qcloud: Tencent Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The time when the alert was closed.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  endTime?: string;
  /**
   * @remarks
   * The details of the entity.
   * 
   * @example
   * [{&quot;entity_user_id&quot;:&quot;198921674491****&quot;,&quot;entity_account_id&quot;:&quot;N/A&quot;,&quot;entity_uuid&quot;:&quot;6245f979d5dd9ef8dd19bdc72228****&quot;,&quot;entity_type&quot;:&quot;host&quot;,&quot;entity_name&quot;:&quot;zhh-test-20240409&quot;,&quot;is_comprised&quot;:&quot;1&quot;,&quot;os_type&quot;:&quot;linux&quot;,&quot;entity_id&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_uuid&quot;:&quot;a88f44dd-b8d4-4ded-831c-77a4835****&quot;,&quot;host_name&quot;:&quot;zhh-test-2024****&quot;}]
   */
  entityList?: string;
  extendContent?: string;
  /**
   * @remarks
   * The time when the alert was received.
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
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * Indicates whether an attack is defended against. Valid values:
   * 
   * *   0: detected.
   * *   1: blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
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
   * The UUID of the alert log.
   * 
   * @example
   * cfw_d12e285a-a042-4d7e-be89-f8a795ef****
   */
  logUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is associated with the alert in SIEM.
   * 
   * @example
   * 127608589417****
   */
  mainUserId?: number;
  /**
   * @remarks
   * The time when the alert was triggered.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  occurTime?: string;
  /**
   * @remarks
   * The time at which the alert was first generated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  /**
   * @example
   * 176555323***
   */
  subUserName?: string;
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
      alertTitle: 'AlertTitle',
      alertTitleEn: 'AlertTitleEn',
      alertType: 'AlertType',
      alertTypeCode: 'AlertTypeCode',
      alertTypeEn: 'AlertTypeEn',
      alertUuid: 'AlertUuid',
      assetList: 'AssetList',
      attCk: 'AttCk',
      cloudCode: 'CloudCode',
      endTime: 'EndTime',
      entityList: 'EntityList',
      extendContent: 'ExtendContent',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      isDefend: 'IsDefend',
      logTime: 'LogTime',
      logUuid: 'LogUuid',
      mainUserId: 'MainUserId',
      occurTime: 'OccurTime',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
      subUserName: 'SubUserName',
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
      alertTitle: 'string',
      alertTitleEn: 'string',
      alertType: 'string',
      alertTypeCode: 'string',
      alertTypeEn: 'string',
      alertUuid: 'string',
      assetList: 'string',
      attCk: 'string',
      cloudCode: 'string',
      endTime: 'string',
      entityList: 'string',
      extendContent: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      isDefend: 'string',
      logTime: 'string',
      logUuid: 'string',
      mainUserId: 'number',
      occurTime: 'string',
      startTime: 'string',
      subUserId: 'number',
      subUserName: 'string',
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

