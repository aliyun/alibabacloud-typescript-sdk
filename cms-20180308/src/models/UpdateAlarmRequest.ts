// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlarmRequest extends $dara.Model {
  /**
   * @example
   * >
   */
  comparisonOperator?: string;
  contactGroups?: string;
  /**
   * @example
   * false
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
   * 576fbae7-2fd1-411a-ae13-6f09f4fafdde
   */
  id?: string;
  /**
   * @example
   * test_modify
   */
  name?: string;
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
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40
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
      dryRun: 'DryRun',
      endTime: 'EndTime',
      evaluationCount: 'EvaluationCount',
      id: 'Id',
      name: 'Name',
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
      dryRun: 'boolean',
      endTime: 'number',
      evaluationCount: 'number',
      id: 'string',
      name: 'string',
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

