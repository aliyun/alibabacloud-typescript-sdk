// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateIMRobotRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the alert card template. For more information about the parameters in the template, see the following section.
   * 
   * @example
   * {     "button": [         "claim",         "close",         "follow",         "send_itsm",         "block",         "unResolvedIncident"     ],     "field": [         {             "fieldName": "alarmName",             "visible": true         },         {             "fieldName": "notificationPolicy",             "visible": true         },         {             "fieldName": "alarmContent",             "visible": true         },         {             "fieldName": "alarmTime",             "visible": true         },         {             "fieldName": "seriesChart",             "visible": true         },         {             "fieldName": "includeEvent",             "visible": true         },         {             "fieldName": "assigned",             "visible": true         },         {             "fieldName": "similarAlarm",             "visible": true         },         {             "fieldName": "operator",             "visible": true         }     ] }
   */
  cardTemplate?: string;
  /**
   * @remarks
   * Specifies whether to send daily statistics. Valid values:
   * 
   * *   `false` (default): Daily statistics are not sent.
   * *   `true`: Daily statistics are sent. If you set the value to `true`, the **DailyNocTime** parameter is required.
   * 
   * @example
   * true
   */
  dailyNoc?: boolean;
  /**
   * @remarks
   * The points in time at which the daily statistics are sent. Separate multiple points in time with commas (,). The points in time are in the HH:SS format. The information that ARMS sends at the specified points in time includes the total number of alerts generated on the current day, the number of cleared alerts, and the number of alerts to be cleared.
   * 
   * @example
   * 09:30,17:00
   */
  dailyNocTime?: string;
  /**
   * @remarks
   * The signature key of DingTalk. If you specify a signature key, DingTalk authentication is performed by using the signature key. If you do not specify a signature key, a whitelist is used for authentication by default. The keyword of the whitelist is **Alert**.
   * 
   * @example
   * ******
   */
  dingSignKey?: string;
  /**
   * @remarks
   * Specifies whether to enable the Outgoing feature.
   * 
   * @example
   * true
   */
  enableOutgoing?: boolean;
  /**
   * @remarks
   * The webhook URL of the IM chatbot.
   * 
   * This parameter is required.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=e1a049121******
   */
  robotAddress?: string;
  /**
   * @remarks
   * The ID of the IM chatbot.
   * > If you do not specify the parameter, a new IM chatbot is created.
   * 
   * @example
   * 123
   */
  robotId?: number;
  /**
   * @remarks
   * The name of the IM chatbot.
   * 
   * This parameter is required.
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
   * *   `feishu`: Lark chatbot
   * 
   * This parameter is required.
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
      dingSignKey: 'DingSignKey',
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
      dingSignKey: 'string',
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

