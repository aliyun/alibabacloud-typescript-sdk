// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActivatedAlertsResponseBodyPageAlertsDispatchRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 7021
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * NotificationPolicy1
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBodyPageAlerts extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 3888704
   */
  alertId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * Container CPU usage is greater than 80%
   */
  alertName?: string;
  /**
   * @remarks
   * The type of the alert.
   * 
   * @example
   * PROMETHEUS_MONITORING_ALERT_RULE
   */
  alertType?: string;
  /**
   * @remarks
   * The number of times that the alert event was received.
   * 
   * @example
   * 598
   */
  count?: number;
  /**
   * @remarks
   * The timestamp when the alert rule was created.
   * 
   * @example
   * 1616466300000
   */
  createTime?: number;
  /**
   * @remarks
   * The notification policies.
   */
  dispatchRules?: ListActivatedAlertsResponseBodyPageAlertsDispatchRules[];
  /**
   * @remarks
   * The timestamp when the alert was ended.
   * 
   * @example
   * 1616502540000
   */
  endsAt?: number;
  /**
   * @remarks
   * The extended fields that indicate the following tags:
   * 
   * *   The tags that are carried in the metrics of the alert rule expression.
   * *   The tags that are created based on the alert rule.
   * *   The default tags of Application Real-Time Monitoring Service (ARMS).
   */
  expandFields?: { [key: string]: any };
  /**
   * @remarks
   * The name of the object that is associated with the alert.
   * 
   * @example
   * testphp2
   */
  integrationName?: string;
  /**
   * @remarks
   * The type of the service integration that generated the alert.
   * 
   * @example
   * PROMETHEUS
   */
  integrationType?: string;
  /**
   * @remarks
   * The type of the object that is associated with the alert.
   * 
   * @example
   * cluster
   */
  involvedObjectKind?: string;
  /**
   * @remarks
   * The name of the service integration that generated the alert.
   * 
   * @example
   * Test integration-prometheus
   */
  involvedObjectName?: string;
  /**
   * @remarks
   * The description of the alert.
   * 
   * @example
   * Alarm name: PodRestart_testphp2,\\n Pod night-test-group-1-1-5f5d6f4d84-pszns is restart, Value: 133.33%, 1.33%
   */
  message?: string;
  /**
   * @remarks
   * The level of the alert. Valid values:
   * 
   * *   `critical`
   * *   `error`
   * *   `warn`
   * *   `page`
   * 
   * @example
   * critical
   */
  severity?: string;
  /**
   * @remarks
   * The timestamp when the alert was generated.
   * 
   * @example
   * 1616466300000
   */
  startsAt?: number;
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   `Active`
   * *   `Inhibited`
   * *   `Silenced`
   * *   `Resolved`
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertType: 'AlertType',
      count: 'Count',
      createTime: 'CreateTime',
      dispatchRules: 'DispatchRules',
      endsAt: 'EndsAt',
      expandFields: 'ExpandFields',
      integrationName: 'IntegrationName',
      integrationType: 'IntegrationType',
      involvedObjectKind: 'InvolvedObjectKind',
      involvedObjectName: 'InvolvedObjectName',
      message: 'Message',
      severity: 'Severity',
      startsAt: 'StartsAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      alertName: 'string',
      alertType: 'string',
      count: 'number',
      createTime: 'number',
      dispatchRules: { 'type': 'array', 'itemType': ListActivatedAlertsResponseBodyPageAlertsDispatchRules },
      endsAt: 'number',
      expandFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrationName: 'string',
      integrationType: 'string',
      involvedObjectKind: 'string',
      involvedObjectName: 'string',
      message: 'string',
      severity: 'string',
      startsAt: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dispatchRules)) {
      $dara.Model.validateArray(this.dispatchRules);
    }
    if(this.expandFields) {
      $dara.Model.validateMap(this.expandFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The alerts that have been triggered.
   */
  alerts?: ListActivatedAlertsResponseBodyPageAlerts[];
  /**
   * @remarks
   * The page number of the returned page.
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
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alerts: 'Alerts',
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alerts: { 'type': 'array', 'itemType': ListActivatedAlertsResponseBodyPageAlerts },
      page: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alerts)) {
      $dara.Model.validateArray(this.alerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponseBody extends $dara.Model {
  message?: string;
  /**
   * @remarks
   * The struct returned.
   */
  page?: ListActivatedAlertsResponseBodyPage;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDB74B8F-4123-482A-ABB7-7F440349****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      page: ListActivatedAlertsResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

