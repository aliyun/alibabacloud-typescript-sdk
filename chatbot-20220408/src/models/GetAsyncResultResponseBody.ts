// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task result, returned as a JSON-formatted string.
   * 
   * @example
   * {"message":"执行完成"}
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F79E7305-5314-5069-A701-9591AD051902
   */
  requestId?: string;
  /**
   * @remarks
   * The task\\"s execution status. Valid values:
   * 
   * | Value   | Description                      |
   * | ------- | -------------------------------- |
   * | Success | The task completed successfully. |
   * | Running | The task is running.             |
   * | Fail    | The task failed.                 |
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

