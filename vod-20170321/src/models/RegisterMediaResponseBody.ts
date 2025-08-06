// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaResponseBodyRegisteredMediaList extends $dara.Model {
  /**
   * @remarks
   * The URL of the media file.
   * 
   * @example
   * http://****.oss-cn-shanghai.aliyuncs.com/vod_sample_01.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The ID of the media file that is registered with ApsaraVideo VOD. If the registered media file is an audio or video file, the value of this parameter is the same as that of the VideoId parameter.
   * 
   * @example
   * d97af32828084d1896683b1aa38****
   */
  mediaId?: string;
  /**
   * @remarks
   * Indicates whether the media file is newly registered or repeatedly registered. Valid values:
   * 
   * *   **true**: The media file is newly registered.
   * *   **false**: The media file is repeatedly registered.
   * 
   * @example
   * false
   */
  newRegister?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      mediaId: 'MediaId',
      newRegister: 'NewRegister',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      mediaId: 'string',
      newRegister: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URLs of the media files that failed to be registered.
   */
  failedFileURLs?: string[];
  /**
   * @remarks
   * The media files that are registered, including newly registered and repeatedly registered media files.
   */
  registeredMediaList?: RegisterMediaResponseBodyRegisteredMediaList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14F43C5C-8033-448B-AD04F64E5098****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedFileURLs: 'FailedFileURLs',
      registeredMediaList: 'RegisteredMediaList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedFileURLs: { 'type': 'array', 'itemType': 'string' },
      registeredMediaList: { 'type': 'array', 'itemType': RegisterMediaResponseBodyRegisteredMediaList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedFileURLs)) {
      $dara.Model.validateArray(this.failedFileURLs);
    }
    if(Array.isArray(this.registeredMediaList)) {
      $dara.Model.validateArray(this.registeredMediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

