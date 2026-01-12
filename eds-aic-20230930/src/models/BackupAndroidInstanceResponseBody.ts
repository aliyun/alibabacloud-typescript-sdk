// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupAndroidInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @example
   * bf-b0qbg3pbpjkn7****
   */
  backupFileId?: string;
  /**
   * @example
   * a-58ftsoo90p0qa****.ab
   */
  backupFileName?: string;
  /**
   * @example
   * t-bp67acfmxazb4p****
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

export class BackupAndroidInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  data?: BackupAndroidInstanceResponseBodyData[];
  /**
   * @example
   * 440D7342-5FC2-5E7C-B2DB-D0B4EAC2BDF1
   */
  requestId?: string;
  /**
   * @example
   * t-14xwibw7pyrjd****
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
      data: { 'type': 'array', 'itemType': BackupAndroidInstanceResponseBodyData },
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

