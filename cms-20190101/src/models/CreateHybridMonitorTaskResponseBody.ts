// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridMonitorTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * yamlConfigFail
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 28CEA2E0-3E90-51B2-A7E8-B1ED75534E49
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The ID of the monitoring task.
   * 
   * @example
   * 36****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

