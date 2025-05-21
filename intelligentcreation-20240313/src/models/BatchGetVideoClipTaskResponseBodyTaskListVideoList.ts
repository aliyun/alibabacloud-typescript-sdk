// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetVideoClipTaskResponseBodyTaskListVideoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  beginTime?: number;
  description?: string;
  /**
   * @example
   * 11110
   */
  endTime?: number;
  errorMsg?: string;
  title?: string;
  /**
   * @example
   * https://e-ai.oss-cn-guangzhou.aliyuncs.com/video/jlkasdl.mp4
   */
  videoDownloadUrl?: string;
  videoName?: string;
  /**
   * @example
   * https://e-ai.oss-cn-guangzhou.aliyuncs.com/video/jlkasdl.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      description: 'description',
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      title: 'title',
      videoDownloadUrl: 'videoDownloadUrl',
      videoName: 'videoName',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      description: 'string',
      endTime: 'number',
      errorMsg: 'string',
      title: 'string',
      videoDownloadUrl: 'string',
      videoName: 'string',
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

