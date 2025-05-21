// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetProjectTaskResponseBodyResultList extends $dara.Model {
  errorMsg?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 11
   */
  taskId?: string;
  /**
   * @example
   * http
   */
  videoDownloadUrl?: string;
  /**
   * @example
   * 1000
   */
  videoDuration?: number;
  /**
   * @example
   * http
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      status: 'status',
      taskId: 'taskId',
      videoDownloadUrl: 'videoDownloadUrl',
      videoDuration: 'videoDuration',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      status: 'string',
      taskId: 'string',
      videoDownloadUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

