// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult } from "./DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult";


export class DescribeDiagnosticReportAttributesResponseBodyMetricResults extends $dara.Model {
  metricResult?: DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult[];
  static names(): { [key: string]: string } {
    return {
      metricResult: 'MetricResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricResult: { 'type': 'array', 'itemType': DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult },
    };
  }

  validate() {
    if(Array.isArray(this.metricResult)) {
      $dara.Model.validateArray(this.metricResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

