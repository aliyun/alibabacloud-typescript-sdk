// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The SQL code. This parameter accepts one or more SQL statements for execution.
   * 
   * @example
   * SHOW TABLES
   */
  codeContent?: string;
  /**
   * @remarks
   * The ID of the default DLF Catalog.
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
   * The limit value. The value must be between 1 and 10000, inclusive.
   * 
   * @example
   * 1000
   */
  limit?: number;
  /**
   * @remarks
   * The ID of the SQL session. The session must be created in the Session Manager module of the EMR Serverless Spark workspace.
   * 
   * @example
   * sc-dfahdfjafhajd****
   */
  sqlComputeId?: string;
  taskBizId?: string;
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
      taskBizId: 'taskBizId',
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
      taskBizId: 'string',
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

