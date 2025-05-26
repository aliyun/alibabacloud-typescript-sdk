// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkBatchSQLStatement } from "./SparkBatchSqlstatement";


export class SparkBatchSQL extends $dara.Model {
  /**
   * @example
   * amv-xxx
   */
  DBClusterId?: string;
  /**
   * @example
   * schema is not found
   */
  errMessage?: string;
  /**
   * @example
   * query
   */
  query?: string;
  /**
   * @example
   * 1723521767000
   */
  queryEndTime?: number;
  /**
   * @example
   * amv-202401-xx
   */
  queryId?: string;
  /**
   * @example
   * 1723521767000
   */
  queryStartTime?: number;
  /**
   * @example
   * RUNNING
   */
  queryState?: string;
  /**
   * @example
   * 1723521767000
   */
  querySubmissionTime?: number;
  /**
   * @example
   * spark_rg
   */
  resourceGroupName?: string;
  /**
   * @example
   * default
   */
  schema?: string;
  statements?: SparkBatchSQLStatement[];
  /**
   * @example
   * 12222222
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

