// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExperimentReportValue extends $dara.Model {
  /**
   * @example
   * true
   */
  baseline?: boolean;
  metricResults?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      baseline: 'Baseline',
      metricResults: 'MetricResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: 'boolean',
      metricResults: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  validate() {
    if(this.metricResults) {
      $dara.Model.validateMap(this.metricResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

