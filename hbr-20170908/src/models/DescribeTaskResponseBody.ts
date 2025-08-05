// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * HttpCode
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The time when the task was complete. The time is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615607706
   */
  completedTime?: number;
  /**
   * @remarks
   * The time when the job was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615607706
   */
  createdTime?: number;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **created**: The job is created.
   * *   **expired**: The job expires.
   * *   **completed**: The job is completed.
   * *   **cancelled**: The job is canceled.
   * 
   * @example
   * completed
   */
  description?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * InstallBackupClientsTask
   */
  name?: string;
  /**
   * @remarks
   * The progress of the job. Valid values: 0 to 100. Unit: percentage (%). If the job fails, the value -1 is returned.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the job.
   * 
   * @example
   * {}
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the job was updated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1615607706
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedTime: 'CompletedTime',
      createdTime: 'CreatedTime',
      description: 'Description',
      message: 'Message',
      name: 'Name',
      progress: 'Progress',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedTime: 'number',
      createdTime: 'number',
      description: 'string',
      message: 'string',
      name: 'string',
      progress: 'number',
      requestId: 'string',
      result: 'string',
      success: 'boolean',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

