// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDoctorHiveTablesResponseBodyDataAnalysis } from "./ListDoctorHiveTablesResponseBodyDataAnalysis";
import { ListDoctorHiveTablesResponseBodyDataFormats } from "./ListDoctorHiveTablesResponseBodyDataFormats";
import { ListDoctorHiveTablesResponseBodyDataMetrics } from "./ListDoctorHiveTablesResponseBodyDataMetrics";


export class ListDoctorHiveTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The analysis results.
   */
  analysis?: ListDoctorHiveTablesResponseBodyDataAnalysis;
  /**
   * @remarks
   * The table format information.
   */
  formats?: ListDoctorHiveTablesResponseBodyDataFormats[];
  /**
   * @remarks
   * The metric information.
   */
  metrics?: ListDoctorHiveTablesResponseBodyDataMetrics;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * DW
   */
  owner?: string;
  /**
   * @remarks
   * The table name. The table name must follow the naming rule in Hive. A name in the {Database name.Table name} format uniquely identifies a table.
   * 
   * @example
   * dw.dwd_creta_service_order_long_renew_long_da
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
      formats: 'Formats',
      metrics: 'Metrics',
      owner: 'Owner',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: ListDoctorHiveTablesResponseBodyDataAnalysis,
      formats: { 'type': 'array', 'itemType': ListDoctorHiveTablesResponseBodyDataFormats },
      metrics: ListDoctorHiveTablesResponseBodyDataMetrics,
      owner: 'string',
      tableName: 'string',
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

