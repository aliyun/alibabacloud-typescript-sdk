// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableAccessCountResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The number of accesses to the table.
   * 
   * @example
   * 6
   */
  accessCount?: string;
  /**
   * @remarks
   * The ID of the cluster to which the table belongs.
   * 
   * @example
   * amv-2ze627uzpkh8a8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The date when the table was accessed.
   * 
   * @example
   * 2022-09-26
   */
  reportDate?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * CUSTOMER
   */
  tableName?: string;
  /**
   * @remarks
   * The database to which the table belongs.
   * 
   * @example
   * tpch
   */
  tableSchema?: string;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      instanceName: 'InstanceName',
      reportDate: 'ReportDate',
      tableName: 'TableName',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'string',
      instanceName: 'string',
      reportDate: 'string',
      tableName: 'string',
      tableSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

