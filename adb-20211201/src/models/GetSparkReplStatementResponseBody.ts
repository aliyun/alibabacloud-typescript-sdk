// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkReplStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 144740799645****
   */
  aliyunUid?: number;
  /**
   * @remarks
   * The executed code.
   * 
   * @example
   * print(1+1)
   */
  code?: string;
  /**
   * @remarks
   * The execution status of the code. Valid values:
   * - CANCELLED: The execution is canceled.
   * - RUNNING: The execution is in progress.
   * - SUCCEEDED: The execution is completed.
   * - ERROR: The execution failed.
   * 
   * @example
   * RUNNING
   */
  codeState?: string;
  /**
   * @remarks
   * The type of the code. Valid values:
   * - PYTHON
   * - SCALA
   * 
   * @example
   * PYTHON
   */
  codeType?: string;
  /**
   * @remarks
   * The array of column names.
   */
  columns?: string[];
  /**
   * @remarks
   * The end time of the task. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1730968194000
   */
  endTime?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * stackoverflow error
   */
  error?: string;
  /**
   * @remarks
   * The output result, which is a string in JSON format.
   * 
   * @example
   * {"text/plain": 2}
   */
  output?: string;
  /**
   * @remarks
   * The type of the output result.
   * 
   * @example
   * TEXT
   */
  outputType?: string;
  /**
   * @remarks
   * The start time of the task. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1730968194000
   */
  startTime?: number;
  /**
   * @remarks
   * The unique ID of the code block in this Spark job.
   * 
   * @example
   * 123
   */
  statementId?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      code: 'Code',
      codeState: 'CodeState',
      codeType: 'CodeType',
      columns: 'Columns',
      endTime: 'EndTime',
      error: 'Error',
      output: 'Output',
      outputType: 'OutputType',
      startTime: 'StartTime',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      code: 'string',
      codeState: 'string',
      codeType: 'string',
      columns: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      error: 'string',
      output: 'string',
      outputType: 'string',
      startTime: 'number',
      statementId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkReplStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkReplStatementResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkReplStatementResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

