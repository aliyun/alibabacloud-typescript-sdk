// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SparkBatchSQLStatement extends $dara.Model {
  /**
   * @example
   * s20240122jsdx****
   */
  appId?: string;
  /**
   * @example
   * SELECT 100
   */
  code?: string;
  /**
   * @example
   * 1723521767000
   */
  endTime?: number;
  /**
   * @example
   * table is not found
   */
  error?: string;
  /**
   * @example
   * JSON格式执行结果集
   */
  result?: string;
  /**
   * @example
   * oss://yourbucket/result.json
   */
  resultUri?: string;
  /**
   * @example
   * 1723521767000
   */
  startTime?: number;
  /**
   * @example
   * RUNNING
   */
  state?: string;
  /**
   * @example
   * amv-20240711-stmt
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

