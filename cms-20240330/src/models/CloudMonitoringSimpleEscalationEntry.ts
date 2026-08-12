// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringSimpleEscalationEntry extends $dara.Model {
  /**
   * @remarks
   * The comparison operator.
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The precondition.
   */
  preCondition?: string;
  /**
   * @remarks
   * The severity level.
   */
  severity?: string;
  /**
   * @remarks
   * The statistics method.
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold.
   */
  threshold?: string;
  /**
   * @remarks
   * The number of consecutive times the condition is triggered.
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

