// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * Test alert
   */
  alertName?: string;
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 12345
   */
  dispatchRuleId?: number;
  /**
   * @remarks
   * The end time of the alert sending history that you want to query. Specify the time in the `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2021-12-22 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The integration type.
   * 
   * *   ARMS
   * *   CLOUD_MONITOR
   * *   MSE
   * *   ARMS_CLOUD_DIALTEST
   * *   PROMETHEUS
   * *   LOG_SERVICE
   * *   CUSTOM
   * *   ARMS_PROMETHEUS
   * *   ARMS_APP_MON
   * *   ARMS_FRONT_MON
   * *   ARMS_CUSTOM
   * *   XTRACE
   * *   GRAFANA
   * *   ZABBIX
   * *   SKYWALKING
   * *   EVENT_BRIDGE
   * *   NAGIOS
   * *   OPENFALCON
   * *   ARMS_INSIGHTS
   * 
   * @example
   * ARMS_APP_MON
   */
  integrationType?: string;
  /**
   * @remarks
   * The notification object configured in the notification policy, responsible for handling alerts.
   * 
   * @example
   * Alice
   */
  owner?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The severity level of the alert. Valid values: P6, P5, P4, P3, P2, and P1. The preceding values are listed in ascending order of severity.
   * 
   * @example
   * P6
   */
  severity?: string;
  /**
   * @remarks
   * Specifies whether to query the activities that correspond to alerts. Valid values:
   * 
   * *   `false` (default value): The activities are not queried.
   * *   `true`: The activities in the last three days are queried.
   * 
   * @example
   * true
   */
  showActivities?: boolean;
  /**
   * @remarks
   * Specifies whether to query the events that correspond to alerts. Valid values:
   * 
   * *   `false` (default value): The events are not queried.
   * *   `true`: The events are queried.
   * 
   * @example
   * true
   */
  showEvents?: boolean;
  /**
   * @remarks
   * The number of alerts to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The start time of the alert sending history that you want to query. Specify the time in the `YYYY-MM-DD HH:mm:ss` format.
   * 
   * @example
   * 2021-12-10 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the alert. Valid values:
   * 
   * *   0: The alert is pending.
   * *   1: The alert is being handled.
   * *   2: The alert is handled.
   * 
   * @example
   * 2
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      dispatchRuleId: 'DispatchRuleId',
      endTime: 'EndTime',
      integrationType: 'IntegrationType',
      owner: 'Owner',
      page: 'Page',
      regionId: 'RegionId',
      severity: 'Severity',
      showActivities: 'ShowActivities',
      showEvents: 'ShowEvents',
      size: 'Size',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      dispatchRuleId: 'number',
      endTime: 'string',
      integrationType: 'string',
      owner: 'string',
      page: 'number',
      regionId: 'string',
      severity: 'string',
      showActivities: 'boolean',
      showEvents: 'boolean',
      size: 'number',
      startTime: 'string',
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

