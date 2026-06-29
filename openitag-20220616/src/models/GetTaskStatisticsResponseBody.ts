// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskStatistic } from "./TaskStatistic";


export class GetTaskStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return encoding. The default value is 0, indicating Normal execution.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details.
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Response message of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation Succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Job statistics.
   */
  taskStatistics?: TaskStatistic;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskStatistics: 'TaskStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskStatistics: TaskStatistic,
    };
  }

  validate() {
    if(this.taskStatistics && typeof (this.taskStatistics as any).validate === 'function') {
      (this.taskStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

