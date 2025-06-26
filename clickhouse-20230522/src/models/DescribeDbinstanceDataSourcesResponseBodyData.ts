// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceDataSourcesResponseBodyDataColumns } from "./DescribeDbinstanceDataSourcesResponseBodyDataColumns";


export class DescribeDBInstanceDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The columns.
   */
  columns?: DescribeDBInstanceDataSourcesResponseBodyDataColumns[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The account.
   * 
   * @example
   * default
   */
  schemas?: string;
  /**
   * @remarks
   * The tables.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      DBInstanceId: 'DBInstanceId',
      schemas: 'Schemas',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': DescribeDBInstanceDataSourcesResponseBodyDataColumns },
      DBInstanceId: 'string',
      schemas: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

