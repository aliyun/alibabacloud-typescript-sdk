// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmCompositeCompareConfig extends $dara.Model {
  /**
   * @remarks
   * The aggregation method for metric data. For example, `AVG`, `SUM`, or `MAX`.
   * 
   * This parameter is required.
   */
  aggregate?: string;
  /**
   * @remarks
   * The operator for comparing the aggregated metric data against the `threshold`. For example, `GREATER_THAN` or `LESS_THAN`.
   * 
   * This parameter is required.
   */
  operator?: string;
  /**
   * @remarks
   * The value to compare the aggregated metric data against. An alert is triggered when the metric data meets the condition defined by the `operator`.
   * 
   * This parameter is required.
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      operator: 'operator',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      operator: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

