// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringSimpleEscalationEntry extends $dara.Model {
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
   * The precondition.
   * 
   * @example
   * 3 consecutive times
   */
  preCondition?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
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
  /**
   * @remarks
   * The number of consecutive times the condition must be met to trigger an alert.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'comparisonOperator',
      preCondition: 'preCondition',
      severity: 'severity',
      statistics: 'statistics',
      threshold: 'threshold',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      severity: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

