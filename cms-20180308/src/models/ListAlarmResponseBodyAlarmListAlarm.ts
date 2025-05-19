// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmResponseBodyAlarmListAlarm extends $dara.Model {
  /**
   * @example
   * >
   */
  comparisonOperator?: string;
  /**
   * @example
   * ["test4nudou"]
   */
  contactGroups?: string;
  /**
   * @example
   * ["{\\"instanceId\\":\\" i-abcdefgh123456\\"}"]
   */
  dimensions?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 24
   */
  endTime?: number;
  /**
   * @example
   * 3
   */
  evaluationCount?: number;
  /**
   * @example
   * i-2ze3w55tr2rcpejpcfap_72071739-396b-497d-849c-59a73de44bcf
   */
  id?: string;
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
   * 0
   */
  notifyType?: number;
  /**
   * @example
   * 300
   */
  period?: number;
  /**
   * @example
   * 86400
   */
  silenceTime?: number;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * ok
   */
  state?: string;
  /**
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @example
   * null
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      enable: 'Enable',
      endTime: 'EndTime',
      evaluationCount: 'EvaluationCount',
      id: 'Id',
      metricName: 'MetricName',
      name: 'Name',
      namespace: 'Namespace',
      notifyType: 'NotifyType',
      period: 'Period',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      state: 'State',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      enable: 'boolean',
      endTime: 'number',
      evaluationCount: 'number',
      id: 'string',
      metricName: 'string',
      name: 'string',
      namespace: 'string',
      notifyType: 'number',
      period: 'number',
      silenceTime: 'number',
      startTime: 'number',
      state: 'string',
      statistics: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

