// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertHistoriesResponseBodyPageBeanAlarmHistories extends $dara.Model {
  /**
   * @remarks
   * The content of the alert notification.
   * 
   * @example
   * "Alert name: Alert1\\nAlert time: 2020-07-24 12:14:00\\nAlert content: A total of four alerts are triggered: \\*\\*\\*\\*"
   */
  alarmContent?: string;
  /**
   * @remarks
   * The response code returned after the alert notification was sent.
   * 
   * @example
   * 200
   */
  alarmResponseCode?: number;
  /**
   * @remarks
   * The webhook URL, such as the webhook URL of a DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=91f2f65002fefe0ab9b71e6590c5ca504348cad742ff01e9c8ab204439ca****
   */
  alarmSources?: string;
  /**
   * @remarks
   * The time when the alert notification was sent.
   * 
   * @example
   * 1595564179000
   */
  alarmTime?: number;
  /**
   * @remarks
   * The type of the alert rule. Default value: 4. Valid values:
   * 
   * *   `1`: a custom alert rule that is used to monitor drill-down data sets
   * *   `3`: a custom alert rule that is used to monitor tiled data sets
   * *   `4`: an alert rule that is used to monitor web pages, including the default alert rule for browser monitoring
   * *   `5`: an alert rule that is used to monitor applications, including the default alert rule for application monitoring
   * *   `6`: the default alert rule for browser monitoring
   * *   `7`: the default alert rule for application monitoring
   * *   `8`: a Tracing Analysis alert rule
   * *   `101`: a Prometheus alert rule
   * 
   * @example
   * 4
   */
  alarmType?: number;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * someone@example.com
   */
  emails?: string;
  /**
   * @remarks
   * The ID of the alert notification.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The mobile phone number of the alert contact.
   * 
   * @example
   * 1381111****
   */
  phones?: string;
  /**
   * @remarks
   * The internal fields.
   * 
   * @example
   * ""
   */
  strategyId?: string;
  /**
   * @remarks
   * The internal fields.
   * 
   * @example
   * ""
   */
  target?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 113197164949****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContent: 'AlarmContent',
      alarmResponseCode: 'AlarmResponseCode',
      alarmSources: 'AlarmSources',
      alarmTime: 'AlarmTime',
      alarmType: 'AlarmType',
      emails: 'Emails',
      id: 'Id',
      phones: 'Phones',
      strategyId: 'StrategyId',
      target: 'Target',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContent: 'string',
      alarmResponseCode: 'number',
      alarmSources: 'string',
      alarmTime: 'number',
      alarmType: 'number',
      emails: 'string',
      id: 'number',
      phones: 'string',
      strategyId: 'string',
      target: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The information about alert records.
   */
  alarmHistories?: SearchAlertHistoriesResponseBodyPageBeanAlarmHistories[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmHistories: 'AlarmHistories',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistories: { 'type': 'array', 'itemType': SearchAlertHistoriesResponseBodyPageBeanAlarmHistories },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarmHistories)) {
      $dara.Model.validateArray(this.alarmHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  pageBean?: SearchAlertHistoriesResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2FC13182-B9AF-4E6B-BE51-72669B7C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertHistoriesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

