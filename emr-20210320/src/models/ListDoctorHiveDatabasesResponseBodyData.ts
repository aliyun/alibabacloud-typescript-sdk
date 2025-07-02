// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHiveDatabasesResponseBodyDataAnalysis } from "./ListDoctorHiveDatabasesResponseBodyDataAnalysis";
import { ListDoctorHiveDatabasesResponseBodyDataFormats } from "./ListDoctorHiveDatabasesResponseBodyDataFormats";
import { ListDoctorHiveDatabasesResponseBodyDataMetrics } from "./ListDoctorHiveDatabasesResponseBodyDataMetrics";


export class ListDoctorHiveDatabasesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: ListDoctorHiveDatabasesResponseBodyDataAnalysis;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db1
   */
  databaseName?: string;
  /**
   * @remarks
   * The information from the perspective of storage formats.
   */
  formats?: ListDoctorHiveDatabasesResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHiveDatabasesResponseBodyDataMetrics;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      databaseName: 'DatabaseName',
      formats: 'Formats',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHiveDatabasesResponseBodyDataAnalysis,
      databaseName: 'string',
      formats: { 'type': 'array', 'itemType': ListDoctorHiveDatabasesResponseBodyDataFormats },
      metrics: ListDoctorHiveDatabasesResponseBodyDataMetrics,
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

