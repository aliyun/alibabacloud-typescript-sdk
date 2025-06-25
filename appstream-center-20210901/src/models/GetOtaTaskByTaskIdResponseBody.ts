// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOtaTaskByTaskIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OtaTask.Running
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The task is running and cannot be sumitted.
   */
  message?: string;
  /**
   * @remarks
   * The OTA version.
   * 
   * @example
   * 0.0.1-R-20220708.110604
   */
  otaVersion?: string;
  /**
   * @remarks
   * The version description.
   */
  releaseNote?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The execution time of the OTA update task. The time follows the ISO 8601 standard.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-08-04T14:36:00+08:00
   */
  taskStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      otaVersion: 'OtaVersion',
      releaseNote: 'ReleaseNote',
      requestId: 'RequestId',
      taskStartTime: 'TaskStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      otaVersion: 'string',
      releaseNote: 'string',
      requestId: 'string',
      taskStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

