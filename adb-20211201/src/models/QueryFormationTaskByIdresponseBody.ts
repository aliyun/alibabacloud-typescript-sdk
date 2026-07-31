// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFormationTaskByIDResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task details.
   * 
   * @example
   * {
   *     "id": 123,
   *     "taskName": "sale_db",
   *     "scheduleState": "NORMAL",
   *     "frequency": {"type": "custom", "cron": "0 0/1 * * * ?"},
   *     "failedCount": 0,
   *     "lastTaskInstContent": "{\\"task_inst_id\\":67890,\\"state\\":\\"SUCCESS\\"}"
   *   }
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DC10091-348D-12B1-906D-AB49D658012E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

