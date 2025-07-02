// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHBaseTablesResponseBodyDataAnalysis } from "./ListDoctorHbaseTablesResponseBodyDataAnalysis";
import { ListDoctorHBaseTablesResponseBodyDataMetrics } from "./ListDoctorHbaseTablesResponseBodyDataMetrics";


export class ListDoctorHBaseTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The diagnosis result.
   */
  analysis?: ListDoctorHBaseTablesResponseBodyDataAnalysis;
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHBaseTablesResponseBodyDataMetrics;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tb_item
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      metrics: 'Metrics',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHBaseTablesResponseBodyDataAnalysis,
      metrics: ListDoctorHBaseTablesResponseBodyDataMetrics,
      tableName: 'string',
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

