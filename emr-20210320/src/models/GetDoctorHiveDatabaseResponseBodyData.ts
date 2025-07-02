// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHiveDatabaseResponseBodyDataAnalysis } from "./GetDoctorHiveDatabaseResponseBodyDataAnalysis";
import { GetDoctorHiveDatabaseResponseBodyDataFormats } from "./GetDoctorHiveDatabaseResponseBodyDataFormats";
import { GetDoctorHiveDatabaseResponseBodyDataMetrics } from "./GetDoctorHiveDatabaseResponseBodyDataMetrics";


export class GetDoctorHiveDatabaseResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: GetDoctorHiveDatabaseResponseBodyDataAnalysis;
  /**
   * @remarks
   * The information from the perspective of storage formats.
   */
  formats?: GetDoctorHiveDatabaseResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: GetDoctorHiveDatabaseResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: GetDoctorHiveDatabaseResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': GetDoctorHiveDatabaseResponseBodyDataFormats },
      metrics: GetDoctorHiveDatabaseResponseBodyDataMetrics,
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

