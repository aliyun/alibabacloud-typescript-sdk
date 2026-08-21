// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaResponseBodyRegisteredMediaList extends $dara.Model {
  /**
   * @remarks
   * The OSS file URL.
   * 
   * @example
   * http://****.oss-cn-shanghai.aliyuncs.com/vod_sample_01.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The VOD media ID. If the registered media file is an audio or video file, this value corresponds to the VideoId in ApsaraVideo VOD.
   * 
   * @example
   * d97af32828084d1896683b1aa38****
   */
  mediaId?: string;
  /**
   * @remarks
   * Indicates whether the media asset is newly registered or repeatedly registered.
   * 
   * - **true**: newly registered.
   * - **false**: repeatedly registered.
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
   * The list of file URLs that failed to be registered.
   */
  failedFileURLs?: string[];
  /**
   * @remarks
   * The list of media assets that are successfully registered, including both newly registered files and previously registered files.
   */
  registeredMediaList?: RegisterMediaResponseBodyRegisteredMediaList[];
  /**
   * @remarks
   * The request ID.
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

