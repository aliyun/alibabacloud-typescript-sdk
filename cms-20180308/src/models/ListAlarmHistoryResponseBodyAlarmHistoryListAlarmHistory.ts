// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmHistoryResponseBodyAlarmHistoryListAlarmHistory extends $dara.Model {
  /**
   * @example
   * 1548926982000
   */
  alarmTime?: number;
  contactGroups?: string;
  /**
   * @example
   * {"instanceId":"XXX"}
   */
  dimension?: string;
  /**
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @example
   * 1a775e37-dfba-430c-ab9f-7036475c8bfb_2dbe619b-0483-402e-9437-7c7a38fba7ed
   */
  id?: string;
  /**
   * @example
   * test-demo
   */
  instanceName?: string;
  /**
   * @example
   * 2851651669
   */
  lastTime?: number;
  /**
   * @example
   * CPUUtilization
   */
  metricName?: string;
  name?: string;
  /**
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @example
   * ALARM
   */
  state?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  /**
   * @example
   * 84401454
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTime: 'AlarmTime',
      contactGroups: 'ContactGroups',
      dimension: 'Dimension',
      evaluationCount: 'EvaluationCount',
      id: 'Id',
      instanceName: 'InstanceName',
      lastTime: 'LastTime',
      metricName: 'MetricName',
      name: 'Name',
      namespace: 'Namespace',
      state: 'State',
      status: 'Status',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTime: 'number',
      contactGroups: 'string',
      dimension: 'string',
      evaluationCount: 'number',
      id: 'string',
      instanceName: 'string',
      lastTime: 'number',
      metricName: 'string',
      name: 'string',
      namespace: 'string',
      state: 'string',
      status: 'number',
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

