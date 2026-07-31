// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SparkBatchSQLStatement extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark job that executes the SQL statement.
   * 
   * @example
   * s20240122jsdx****
   */
  appId?: string;
  /**
   * @remarks
   * The text of the SQL statement.
   * 
   * @example
   * SELECT 100
   */
  code?: string;
  /**
   * @remarks
   * The execution end timestamp of the SQL statement.
   * 
   * @example
   * 1723521767000
   */
  endTime?: number;
  /**
   * @remarks
   * The error message for the SQL statement execution.
   * 
   * @example
   * table is not found
   */
  error?: string;
  /**
   * @remarks
   * The execution result of the SQL statement. The content is in the response format of the `DataFrame Show` statement in Spark.
   * 
   * @example
   * +---+-----+
   * |age| name|
   * +---+-----+
   * | 14|  Tom|
   * | 23|Alice|
   * +---+-----+
   */
  result?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) location where the execution results of the SQL statement are stored. If you do not specify a storage location, null is returned.
   * 
   * @example
   * oss://yourbucket/result.json
   */
  resultUri?: string;
  /**
   * @remarks
   * The execution start timestamp of the SQL statement.
   * 
   * @example
   * 1723521767000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the SQL statement. Valid values:
   * 
   * *   FAILED
   * *   RUNNING
   * *   CANCELED
   * *   PENDING
   * *   FINISHED
   * 
   * @example
   * RUNNING
   */
  state?: string;
  /**
   * @remarks
   * The ID of the SQL statement.
   * 
   * @example
   * sq1723521767****-0001
   */
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      endTime: 'EndTime',
      error: 'Error',
      result: 'Result',
      resultUri: 'ResultUri',
      startTime: 'StartTime',
      state: 'State',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      endTime: 'number',
      error: 'string',
      result: 'string',
      resultUri: 'string',
      startTime: 'number',
      state: 'string',
      statementId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

