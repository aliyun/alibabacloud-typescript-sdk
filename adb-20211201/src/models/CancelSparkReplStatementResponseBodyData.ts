// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSparkReplStatementResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the cluster.
   * 
   * @example
   * 190063530332****
   */
  aliyunUid?: number;
  /**
   * @remarks
   * The code that is executed.
   * 
   * @example
   * print(1+1)
   */
  code?: string;
  /**
   * @remarks
   * The code execution status. Valid values:
   * 
   * *   CANCELLED
   * *   RUNNING
   * *   SUCCEEDED
   * *   ERROR
   * 
   * @example
   * RUNNING
   */
  codeState?: string;
  /**
   * @remarks
   * The code type. Valid values:
   * 
   * *   SCALA
   * *   PYTHON
   * 
   * @example
   * PYTHON
   */
  codeType?: string;
  /**
   * @remarks
   * The column names.
   */
  columns?: string[];
  /**
   * @remarks
   * The end time of the execution. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1730968056000
   */
  endTime?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * StackOverflow Exception:
   */
  error?: string;
  /**
   * @remarks
   * The code execution result, which is a JSON string that conforms to Apache Livy.
   * 
   * @example
   * {"text/plain": "2"}
   */
  output?: string;
  /**
   * @remarks
   * The execution result type, which is in the JSON format. Valid values:
   * 
   * *   TEXT: the text content that conforms to Apache Livy.
   * *   TABLE: the table content that conforms to Apache Livy.
   * 
   * @example
   * TEXT
   */
  outputType?: string;
  /**
   * @remarks
   * The start time of the execution. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1730968056000
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

