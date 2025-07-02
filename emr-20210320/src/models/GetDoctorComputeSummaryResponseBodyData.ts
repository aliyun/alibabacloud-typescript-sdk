// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorComputeSummaryResponseBodyDataAnalysis } from "./GetDoctorComputeSummaryResponseBodyDataAnalysis";
import { GetDoctorComputeSummaryResponseBodyDataMetrics } from "./GetDoctorComputeSummaryResponseBodyDataMetrics";


export class GetDoctorComputeSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The resource analysis information.
   */
  analysis?: GetDoctorComputeSummaryResponseBodyDataAnalysis;
  /**
   * @remarks
   * The metrics.
   */
  metrics?: GetDoctorComputeSummaryResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorComputeSummaryResponseBodyDataAnalysis,
      metrics: GetDoctorComputeSummaryResponseBodyDataMetrics,
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

