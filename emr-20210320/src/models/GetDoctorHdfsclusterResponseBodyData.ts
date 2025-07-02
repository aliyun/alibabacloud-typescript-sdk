// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHDFSClusterResponseBodyDataAnalysis } from "./GetDoctorHdfsclusterResponseBodyDataAnalysis";
import { GetDoctorHDFSClusterResponseBodyDataMetrics } from "./GetDoctorHdfsclusterResponseBodyDataMetrics";


export class GetDoctorHDFSClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: GetDoctorHDFSClusterResponseBodyDataAnalysis;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHDFSClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHDFSClusterResponseBodyDataAnalysis,
      metrics: GetDoctorHDFSClusterResponseBodyDataMetrics,
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

