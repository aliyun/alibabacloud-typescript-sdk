// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackupAppResponseBodyData extends $dara.Model {
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
   * MyBackup
   */
  backupFileName?: string;
  /**
   * @example
   * t-4ks224ujixw****
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

export class BackupAppResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  data?: BackupAppResponseBodyData[];
  /**
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
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
      data: { 'type': 'array', 'itemType': BackupAppResponseBodyData },
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

