// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHBaseClusterResponseBodyDataAnalysis } from "./GetDoctorHbaseClusterResponseBodyDataAnalysis";
import { GetDoctorHBaseClusterResponseBodyDataMetrics } from "./GetDoctorHbaseClusterResponseBodyDataMetrics";


export class GetDoctorHBaseClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis result.
   */
  analysis?: GetDoctorHBaseClusterResponseBodyDataAnalysis;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHBaseClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHBaseClusterResponseBodyDataAnalysis,
      metrics: GetDoctorHBaseClusterResponseBodyDataMetrics,
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

