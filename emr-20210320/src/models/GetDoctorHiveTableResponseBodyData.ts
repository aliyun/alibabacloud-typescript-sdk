// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHiveTableResponseBodyDataAnalysis } from "./GetDoctorHiveTableResponseBodyDataAnalysis";
import { GetDoctorHiveTableResponseBodyDataFormats } from "./GetDoctorHiveTableResponseBodyDataFormats";
import { GetDoctorHiveTableResponseBodyDataMetrics } from "./GetDoctorHiveTableResponseBodyDataMetrics";


export class GetDoctorHiveTableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: GetDoctorHiveTableResponseBodyDataAnalysis;
  /**
   * @remarks
   * The information from the perspective of formats.
   */
  formats?: GetDoctorHiveTableResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHiveTableResponseBodyDataMetrics;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * DW
   */
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveTableResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveTableResponseBodyDataFormats },
      metrics: GetDoctorHiveTableResponseBodyDataMetrics,
      owner: 'string',
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

