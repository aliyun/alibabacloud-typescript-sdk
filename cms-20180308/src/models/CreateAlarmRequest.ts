// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * >
   */
  comparisonOperator?: string;
  contactGroups?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"instanceId":"i-2zecrzcri3d6fhd2ff7j "}]
   */
  dimensions?: string;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CPUUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  notifyType?: number;
  /**
   * @example
   * 60
   */
  period?: number;
  regionId?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 90
   */
  threshold?: string;
  /**
   * @example
   * http://www.net.cn/example_callback.htm
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      dryRun: 'DryRun',
      endTime: 'EndTime',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      name: 'Name',
      namespace: 'Namespace',
      notifyType: 'NotifyType',
      period: 'Period',
      regionId: 'RegionId',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
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
      dryRun: 'boolean',
      endTime: 'number',
      evaluationCount: 'number',
      metricName: 'string',
      name: 'string',
      namespace: 'string',
      notifyType: 'number',
      period: 'number',
      regionId: 'string',
      silenceTime: 'number',
      startTime: 'number',
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

