// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIImageInfoResponseBodyAIImageInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the image information.
   * 
   * @example
   * b89a6aabf1b6197ebd6fe6cf29****
   */
  AIImageInfoId?: string;
  /**
   * @remarks
   * The time when the file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-15T03:30:03Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the image file.
   */
  fileURL?: string;
  /**
   * @remarks
   * The format of the image. Valid values: **gif** and **png**.
   * 
   * @example
   * gif
   */
  format?: string;
  /**
   * @remarks
   * The ID of the image AI processing job.
   * 
   * @example
   * cf08a2c6e11ee1711b738b9067****
   */
  jobId?: string;
  /**
   * @remarks
   * The score of the image.
   * 
   * @example
   * 5.035636554444242
   */
  score?: string;
  /**
   * @remarks
   * The data version ID.
   * 
   * @example
   * b547f3f0e199c3b457369f3cf****
   */
  version?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 357a8748c5789d2726e6436aa****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageInfoId: 'AIImageInfoId',
      creationTime: 'CreationTime',
      fileURL: 'FileURL',
      format: 'Format',
      jobId: 'JobId',
      score: 'Score',
      version: 'Version',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageInfoId: 'string',
      creationTime: 'string',
      fileURL: 'string',
      format: 'string',
      jobId: 'string',
      score: 'string',
      version: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIImageInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image files that are uploaded for AI processing.
   */
  AIImageInfoList?: ListAIImageInfoResponseBodyAIImageInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D73420CD-D221-9122-5B8FA995A511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AIImageInfoList: 'AIImageInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIImageInfoList: { 'type': 'array', 'itemType': ListAIImageInfoResponseBodyAIImageInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.AIImageInfoList)) {
      $dara.Model.validateArray(this.AIImageInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

