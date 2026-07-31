// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkBatchSQLStatement } from "./SparkBatchSqlstatement";


export class SparkBatchSQL extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp17s73f016****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The error message for the query execution.
   * 
   * @example
   * schema is not found
   */
  errMessage?: string;
  /**
   * @remarks
   * The text of the query.
   * 
   * @example
   * SELECT * FROM db.tb
   */
  query?: string;
  /**
   * @remarks
   * The execution end timestamp of the query.
   * 
   * @example
   * 1723521767000
   */
  queryEndTime?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * sq172352176****
   */
  queryId?: string;
  /**
   * @remarks
   * The execution start timestamp of the query.
   * 
   * @example
   * 1723521767000
   */
  queryStartTime?: number;
  /**
   * @remarks
   * The execution status of the query. Valid values:
   * 
   * *   FAILED
   * *   RUNNING
   * *   CANCELED
   * *   PENDING
   * *   SUBMITTED
   * *   FINISHED
   * 
   * @example
   * RUNNING
   */
  queryState?: string;
  /**
   * @remarks
   * The submission timestamp of the query.
   * 
   * @example
   * 1723521767000
   */
  querySubmissionTime?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * spark_rg
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The name of the database for the query execution.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The execution results of the SQL statements.
   */
  statements?: SparkBatchSQLStatement[];
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 2198002412336****
   */
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      errMessage: 'ErrMessage',
      query: 'Query',
      queryEndTime: 'QueryEndTime',
      queryId: 'QueryId',
      queryStartTime: 'QueryStartTime',
      queryState: 'QueryState',
      querySubmissionTime: 'QuerySubmissionTime',
      resourceGroupName: 'ResourceGroupName',
      schema: 'Schema',
      statements: 'Statements',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      errMessage: 'string',
      query: 'string',
      queryEndTime: 'number',
      queryId: 'string',
      queryStartTime: 'number',
      queryState: 'string',
      querySubmissionTime: 'number',
      resourceGroupName: 'string',
      schema: 'string',
      statements: { 'type': 'array', 'itemType': SparkBatchSQLStatement },
      uid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.statements)) {
      $dara.Model.validateArray(this.statements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

