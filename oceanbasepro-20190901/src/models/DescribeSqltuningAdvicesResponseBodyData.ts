// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLTuningAdvicesResponseBodyDataColumns } from "./DescribeSqltuningAdvicesResponseBodyDataColumns";
import { DescribeSQLTuningAdvicesResponseBodyDataPlan } from "./DescribeSqltuningAdvicesResponseBodyDataPlan";


export class DescribeSQLTuningAdvicesResponseBodyData extends $dara.Model {
  /**
   * @example
   * c1;c2;c3
   */
  columnNames?: string;
  columns?: DescribeSQLTuningAdvicesResponseBodyDataColumns[];
  /**
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @example
   * Local/Global
   */
  localityType?: string;
  plan?: DescribeSQLTuningAdvicesResponseBodyDataPlan;
  /**
   * @example
   * test_table
   */
  table?: string;
  /**
   * @example
   * PLAN_BINDING/INDEX_CREATION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      columns: 'Columns',
      dbName: 'DbName',
      localityType: 'LocalityType',
      plan: 'Plan',
      table: 'Table',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: 'string',
      columns: { 'type': 'array', 'itemType': DescribeSQLTuningAdvicesResponseBodyDataColumns },
      dbName: 'string',
      localityType: 'string',
      plan: DescribeSQLTuningAdvicesResponseBodyDataPlan,
      table: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.plan && typeof (this.plan as any).validate === 'function') {
      (this.plan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

