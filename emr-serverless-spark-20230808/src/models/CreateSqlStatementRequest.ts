// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlStatementRequest extends $dara.Model {
  /**
   * @remarks
   * The SQL code. You can specify one or more SQL statements to execute.
   * 
   * @example
   * SHOW TABLES
   */
  codeContent?: string;
  /**
   * @remarks
   * The default DLF catalog ID.
   * 
   * @example
   * default_catalog
   */
  defaultCatalog?: string;
  /**
   * @remarks
   * The default database name.
   * 
   * @example
   * default
   */
  defaultDatabase?: string;
  /**
   * @remarks
   * The limit value. Valid values: 1 to 10000.
   * 
   * @example
   * 1000
   */
  limit?: number;
  /**
   * @remarks
   * The SQL session ID. Create the session in the session management module of the EMR Serverless Spark workspace.
   * 
   * @example
   * sc-dfahdfjafhajd****
   */
  sqlComputeId?: string;
  /**
   * @remarks
   * The data development node ID.
   * 
   * @example
   * TSK-d87******************
   */
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

