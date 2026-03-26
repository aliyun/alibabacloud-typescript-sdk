// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMetric extends $dara.Model {
  /**
   * @remarks
   * The metric name.
   * 
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * The step number that generated the metric.
   */
  step?: number;
  /**
   * @remarks
   * The timestamp when the metric was generated.
   */
  timestamp?: number;
  /**
   * @remarks
   * The metric value.
   * 
   * This parameter is required.
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      step: 'Step',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      step: 'number',
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

