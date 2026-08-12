// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringCompositeEscalationEntry extends $dara.Model {
  /**
   * @remarks
   * The comparison operator.
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The metric name.
   */
  metricName?: string;
  /**
   * @remarks
   * The collection period, in seconds.
   */
  period?: number;
  /**
   * @remarks
   * The precondition.
   */
  preCondition?: string;
  /**
   * @remarks
   * The statistical method.
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold.
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

