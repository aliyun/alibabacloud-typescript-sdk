// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseTableResponseBodyDataAnalysis } from "./GetDoctorHbaseTableResponseBodyDataAnalysis";
import { GetDoctorHBaseTableResponseBodyDataMetrics } from "./GetDoctorHbaseTableResponseBodyDataMetrics";


export class GetDoctorHBaseTableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Diagnostic results.
   */
  analysis?: GetDoctorHBaseTableResponseBodyDataAnalysis;
  /**
   * @remarks
   * Metrics information.
   */
  metrics?: GetDoctorHBaseTableResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHBaseTableResponseBodyDataAnalysis,
      metrics: GetDoctorHBaseTableResponseBodyDataMetrics,
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

