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

export class BatchGetProjectTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11
   */
  requestId?: string;
  resultList?: BatchGetProjectTaskResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultList: 'resultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': BatchGetProjectTaskResponseBodyResultList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

