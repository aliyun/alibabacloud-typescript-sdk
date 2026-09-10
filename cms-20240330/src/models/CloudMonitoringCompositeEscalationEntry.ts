// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringCompositeEscalationEntry extends $dara.Model {
  /**
   * @remarks
   * The comparison operator.
   * 
   * @example
   * GT
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * cpuUsage
   */
  metricName?: string;
  /**
   * @remarks
   * The collection period, in seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The precondition.
   * 
   * @example
   * 3 consecutive times
   */
  preCondition?: string;
  /**
   * @remarks
   * The statistical method.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 80
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      metricName: 'metricName',
      period: 'period',
      preCondition: 'preCondition',
      statistics: 'statistics',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

