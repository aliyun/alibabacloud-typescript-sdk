// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFaultDiagnosisOverallDataResponseBodyMetricData } from "./DescribeFaultDiagnosisOverallDataResponseBodyMetricData";
import { DescribeFaultDiagnosisOverallDataResponseBodyOverallData } from "./DescribeFaultDiagnosisOverallDataResponseBodyOverallData";


export class DescribeFaultDiagnosisOverallDataResponseBody extends $dara.Model {
  metricData?: DescribeFaultDiagnosisOverallDataResponseBodyMetricData;
  overallData?: DescribeFaultDiagnosisOverallDataResponseBodyOverallData;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: DescribeFaultDiagnosisOverallDataResponseBodyMetricData,
      overallData: DescribeFaultDiagnosisOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metricData && typeof (this.metricData as any).validate === 'function') {
      (this.metricData as any).validate();
    }
    if(this.overallData && typeof (this.overallData as any).validate === 'function') {
      (this.overallData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

