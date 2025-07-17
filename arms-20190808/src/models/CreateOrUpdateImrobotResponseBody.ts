// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateIMRobotResponseBodyAlertRobot extends $dara.Model {
  /**
   * @remarks
   * The configurations of the alert card template.
   * 
   * @example
   * {     "button": [         "claim",         "close",         "follow",         "send_itsm",         "block",         "unResolvedIncident"     ],     "field": [         {             "fieldName": "alarmName",             "visible": true         },         {             "fieldName": "notificationPolicy",             "visible": true         },         {             "fieldName": "alarmContent",             "visible": true         },         {             "fieldName": "alarmTime",             "visible": true         },         {             "fieldName": "seriesChart",             "visible": true         },         {             "fieldName": "includeEvent",             "visible": true         },         {             "fieldName": "assigned",             "visible": true         },         {             "fieldName": "similarAlarm",             "visible": true         },         {             "fieldName": "operator",             "visible": true         }     ] }
   */
  cardTemplate?: string;
  /**
   * @remarks
   * Indicates whether daily statistics are sent. Valid values:
   * 
   * *   `false` (default): Daily statistics are not sent.
   * *   `true`: Daily statistics are sent.
   * 
   * @example
   * true
   */
  dailyNoc?: boolean;
  /**
   * @remarks
   * The point in time at which the daily statistics are sent. The information that ARMS sends at the specified points in time includes the total number of alerts generated on the current day, the number of cleared alerts, and the number of alerts to be cleared.
   * 
   * @example
   * 09:30,17:00
   */
  dailyNocTime?: string;
  /**
   * @remarks
   * Indicates whether the Outgoing feature is enabled.
   * 
   * @example
   * true
   */
  enableOutgoing?: boolean;
  /**
   * @remarks
   * The webhook URL of the IM chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=e1a049121******
   */
  robotAddress?: string;
  /**
   * @remarks
   * The ID of the IM chatbot.
   * 
   * @example
   * 123
   */
  robotId?: number;
  /**
   * @remarks
   * The name of the IM chatbot.
   * 
   * @example
   * Chatbot name
   */
  robotName?: string;
  /**
   * @remarks
   * The token required to enable the Outgoing feature.
   * 
   * @example
   * 1656558719183be1245ab44********
   */
  token?: string;
  /**
   * @remarks
   * The type of the IM chatbot. Valid values:
   * 
   * *   `dingding`: DingTalk chatbot
   * *   `wechat`: WeCom chatbot
   * 
   * @example
   * dingding
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cardTemplate: 'CardTemplate',
      dailyNoc: 'DailyNoc',
      dailyNocTime: 'DailyNocTime',
      enableOutgoing: 'EnableOutgoing',
      robotAddress: 'RobotAddress',
      robotId: 'RobotId',
      robotName: 'RobotName',
      token: 'Token',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardTemplate: 'string',
      dailyNoc: 'boolean',
      dailyNocTime: 'string',
      enableOutgoing: 'boolean',
      robotAddress: 'string',
      robotId: 'number',
      robotName: 'string',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateIMRobotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the IM chatbot.
   */
  alertRobot?: CreateOrUpdateIMRobotResponseBodyAlertRobot;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16AF921B-8187-489F-9913-43C808B4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertRobot: 'AlertRobot',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRobot: CreateOrUpdateIMRobotResponseBodyAlertRobot,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertRobot && typeof (this.alertRobot as any).validate === 'function') {
      (this.alertRobot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

