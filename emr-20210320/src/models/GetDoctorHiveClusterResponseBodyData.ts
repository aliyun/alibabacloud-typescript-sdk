// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHiveClusterResponseBodyDataAnalysis } from "./GetDoctorHiveClusterResponseBodyDataAnalysis";
import { GetDoctorHiveClusterResponseBodyDataFormats } from "./GetDoctorHiveClusterResponseBodyDataFormats";
import { GetDoctorHiveClusterResponseBodyDataMetrics } from "./GetDoctorHiveClusterResponseBodyDataMetrics";


export class GetDoctorHiveClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: GetDoctorHiveClusterResponseBodyDataAnalysis;
  /**
   * @remarks
   * The information from the perspective of storage formats.
   */
  formats?: GetDoctorHiveClusterResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHiveClusterResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveClusterResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveClusterResponseBodyDataFormats },
      metrics: GetDoctorHiveClusterResponseBodyDataMetrics,
    };
  }

  validate() {
    if(this.analysis && typeof (this.analysis as any).validate === 'function') {
      (this.analysis as any).validate();
    }
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
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

