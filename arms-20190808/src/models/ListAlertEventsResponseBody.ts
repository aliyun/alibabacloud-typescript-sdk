// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertEventsResponseBodyPageBeanEventsAlarms extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * @example
   * 77444
   */
  alarmId?: number;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Test-triggered alert
   */
  alarmName?: string;
  /**
   * @remarks
   * The time when the alert was created.
   * 
   * @example
   * 2021-12-20 07:10:18
   */
  createTime?: string;
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   0: The alert is pending.
   * *   1: The alert is being handled.
   * *   2: The alert is cleared.
   * 
   * @example
   * 0
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
      alarmName: 'AlarmName',
      createTime: 'CreateTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'number',
      alarmName: 'string',
      createTime: 'string',
      state: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyPageBeanEventsNotificationPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 646093
   */
  id?: number;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * P1 alert notification policy
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyPageBeanEvents extends $dara.Model {
  /**
   * @remarks
   * The associated alerts.
   */
  alarms?: ListAlertEventsResponseBodyPageBeanEventsAlarms[];
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Test-triggered alert
   */
  alertName?: string;
  /**
   * @remarks
   * The annotations.
   * 
   * @example
   * [{\\"Name\\":\\"annotation-a\\",\\"Value\\":\\"annotation a value\\"}]
   */
  annotations?: string;
  /**
   * @remarks
   * The description of the alert event.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2021-12-20 17:42:16
   */
  endTime?: string;
  /**
   * @remarks
   * The URL of the alert event.
   * 
   * @example
   * https://xxx.xx/
   */
  generatorURL?: string;
  /**
   * @remarks
   * The user who handled the alert.
   * 
   * @example
   * Tom
   */
  handlerName?: string;
  /**
   * @remarks
   * The name of the alert integration.
   * 
   * @example
   * Custom integration
   */
  integrationName?: string;
  /**
   * @remarks
   * The type of the alert integration.
   * 
   * @example
   * CUSTOM
   */
  integrationType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * [{\\"name\\":\\"severity\\",\\"value\\":\\"error\\"}]
   */
  labels?: string;
  /**
   * @remarks
   * The associated notification policies.
   */
  notificationPolicies?: ListAlertEventsResponseBodyPageBeanEventsNotificationPolicies[];
  /**
   * @remarks
   * The time when the alert event was received.
   * 
   * @example
   * 2021-12-20 17:42:16
   */
  receiveTime?: string;
  /**
   * @remarks
   * The severity level of the alert. Valid values:
   * 
   * *   critical: P1
   * *   error: P2
   * *   warning: P3
   * *   page: P4
   * *   default: P6
   * 
   * @example
   * critical
   */
  severity?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2021-12-20 17:42:16
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the alert event. Valid values:
   * 
   * *   Active
   * *   Silenced
   * *   Resolved
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The number of times the event is triggered.
   * 
   * @example
   * 10
   */
  triggerCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      alertName: 'AlertName',
      annotations: 'Annotations',
      description: 'Description',
      endTime: 'EndTime',
      generatorURL: 'GeneratorURL',
      handlerName: 'HandlerName',
      integrationName: 'IntegrationName',
      integrationType: 'IntegrationType',
      labels: 'Labels',
      notificationPolicies: 'NotificationPolicies',
      receiveTime: 'ReceiveTime',
      severity: 'Severity',
      startTime: 'StartTime',
      status: 'Status',
      triggerCount: 'TriggerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyPageBeanEventsAlarms },
      alertName: 'string',
      annotations: 'string',
      description: 'string',
      endTime: 'string',
      generatorURL: 'string',
      handlerName: 'string',
      integrationName: 'string',
      integrationType: 'string',
      labels: 'string',
      notificationPolicies: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyPageBeanEventsNotificationPolicies },
      receiveTime: 'string',
      severity: 'string',
      startTime: 'string',
      status: 'string',
      triggerCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alarms)) {
      $dara.Model.validateArray(this.alarms);
    }
    if(Array.isArray(this.notificationPolicies)) {
      $dara.Model.validateArray(this.notificationPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The queried historical alert events.
   */
  events?: ListAlertEventsResponseBodyPageBeanEvents[];
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListAlertEventsResponseBodyPageBeanEvents },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  pageBean?: ListAlertEventsResponseBodyPageBean;
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
      pageBean: ListAlertEventsResponseBodyPageBean,
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

