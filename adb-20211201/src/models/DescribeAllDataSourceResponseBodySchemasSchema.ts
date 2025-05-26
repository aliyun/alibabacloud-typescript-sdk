// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllDataSourceResponseBodySchemasSchema extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp1pke2pcfavw****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The logical name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

