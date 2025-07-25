// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud phone instance.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-b0qbg3pbpjkn7****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The name of the backup file.
   * 
   * @example
   * a-58ftsoo90p0qa****.ab
   */
  backupFileName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-22ex666a5mco5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      backupFileId: 'string',
      backupFileName: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are backed up.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The object that is returned.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  data?: BackupFileResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C8439B9-7DBF-57F4-92AE-55A9B9D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the batch task.
   * 
   * @example
   * t-22ex666a5mco5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': BackupFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

