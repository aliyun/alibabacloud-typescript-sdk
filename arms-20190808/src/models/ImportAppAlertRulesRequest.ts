// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportAppAlertRulesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the alert contact groups. The value must be a JSON array.
   * 
   * @example
   * [123, 234]
   */
  contactGroupIds?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule after it is created. Default value: `false`.
   * 
   * *   `true`: enables the alert rule.
   * *   `false`: disables the alert rule.
   * 
   * @example
   * true
   */
  isAutoStart?: boolean;
  /**
   * @remarks
   * The process identifiers (PIDs) of the applications associated with the alert rule. The value must be a JSON array. For more information about how to obtain the PID, see [Obtain the PID of an application](~~186100#section-bkl-3j6-ezg~~).
   * 
   * This parameter is required.
   * 
   * @example
   * ["atc889zkcf@d8deedfa9bfxxxx", "acd129bfcf@d5daebfa6cdxxxx"]
   */
  pids?: string;
  /**
   * @remarks
   * The ID of the region where the associated applications reside.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ImportAppAlertRulesRequestTags[];
  /**
   * @remarks
   * The configurations of the alert template based on which you want to create an alert rule. The value must be a JSON string. You must set at least one of the **TemplateAlertId** and **TemplageAlertConfig** parameters. If you set both parameters, the **TemplateAlertId** parameter prevails. For more information about the TemplageAlertConfig parameter, see the following **additional information about the TemplageAlertConfig parameter**.
   * 
   * @example
   * [ { "contactGroupIds": "381", "alertType": 5, "alarmContext": { "subTitle": "", "content": "Alarm name: $alarm name\\nFilter condition: $filter\\nAlarm time : $Alarm time\\nAlarm content: $Alarm content\\nNote: Before the recovery email is received, the alarm is in continuous alarm, and you will be reminded again after 24 hours!" }, "alertLevel": "WARN", " metricParam": { "appId": "70901", "pid": "atc889zkcf@d8deedfa9bf****", "type": "TXN", "dimensions": [ { "type": "STATIC", "value ": "\\\\/hello_test_api_address\\\\/test1", "key": "rpc" } ] }, "alertWay": [ "SMS", "MAIL", "DING_ROBOT" ], "alertRule": { "rules" : [ { "measure": "appstat.txn.rt", "alias": "Entry call response time_ms", "aggregates": "AVG", "nValue": 1, "value": 1, "operator ": "CURRENT_GTE" } ], "operator": "|" }, "title": "Alarm template alarm name", "config": "{\\"continuous\\":false,\\"dataRevision\\":2, \\"ownerId\\":\\"123412341234\\"}", "notice": { "noticeStartTime": 1480521600000, "startTime": 1480521600000, "endTime": 1480607940000, "noticeEndTime": 1480607940000 }, "stat us": "NON " } ]
   */
  templageAlertConfig?: string;
  /**
   * @remarks
   * The ID of the alert template. You must set at least one of the **TemplateAlertId** and **TemplageAlertConfig** parameters. If you set both parameters, the **TemplateAlertId** parameter prevails.
   * 
   * @example
   * 324324234
   */
  templateAlertId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      pids: 'Pids',
      regionId: 'RegionId',
      tags: 'Tags',
      templageAlertConfig: 'TemplageAlertConfig',
      templateAlertId: 'TemplateAlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      pids: 'string',
      regionId: 'string',
      tags: { 'type': 'array', 'itemType': ImportAppAlertRulesRequestTags },
      templageAlertConfig: 'string',
      templateAlertId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

