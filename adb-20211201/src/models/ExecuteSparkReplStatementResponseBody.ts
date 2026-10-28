// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSparkReplStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account to which the cluster belongs.
   * 
   * @example
   * 17108278707****
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
   * - SUCCEEDED: The execution is successful.
   * - ERROR: The execution failed.
   * 
   * @example
   * RUNNING
   */
  codeState?: string;
  /**
   * @remarks
   * The type of the code. Valid values:
   * - SCALA
   * - PYTHON
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
   * The end time. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1730968125000
   */
  endTime?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * StackOverflow Exception
   */
  error?: string;
  /**
   * @remarks
   * The code execution result. It is a JSON-formatted string that follows the Apache Livy output standard.
   * 
   * @example
   * {"text/plain": 2}
   */
  output?: string;
  /**
   * @remarks
   * The serialization format of the execution result. The structure is a JSON object. Valid values:
   * - TEXT: The output is text content that follows the Apache Livy standard.
   * - TABLE: The output is table content that follows the Apache Livy standard.
   * 
   * @example
   * TEXT
   */
  outputType?: string;
  /**
   * @remarks
   * The start time. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1730968125000
   */
  startTime?: number;
  /**
   * @remarks
   * The unique ID of the code block in the Spark job.
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

export class ExecuteSparkReplStatementResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ExecuteSparkReplStatementResponseBodyData;
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
      data: ExecuteSparkReplStatementResponseBodyData,
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

