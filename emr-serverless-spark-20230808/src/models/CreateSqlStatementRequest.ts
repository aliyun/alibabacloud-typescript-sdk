// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The SQL code. You can specify one or more SQL statements.
   * 
   * @example
   * SHOW TABLES
   */
  codeContent?: string;
  /**
   * @remarks
   * The default Data Lake Formation (DLF) catalog ID.
   * 
   * @example
   * default_catalog
   */
  defaultCatalog?: string;
  /**
   * @remarks
   * The name of the default database.
   * 
   * @example
   * default
   */
  defaultDatabase?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 10000.
   * 
   * @example
   * 1000
   */
  limit?: number;
  /**
   * @remarks
   * The SQL session ID. You can create an SQL session in the workspace created in EMR Serverless Spark.
   * 
   * @example
   * sc-dfahdfjafhajd****
   */
  sqlComputeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      codeContent: 'codeContent',
      defaultCatalog: 'defaultCatalog',
      defaultDatabase: 'defaultDatabase',
      limit: 'limit',
      sqlComputeId: 'sqlComputeId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeContent: 'string',
      defaultCatalog: 'string',
      defaultDatabase: 'string',
      limit: 'number',
      sqlComputeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

