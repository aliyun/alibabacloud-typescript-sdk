// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaResponseBodyRegisteredMediaList extends $dara.Model {
  /**
   * @remarks
   * The URL of the OSS file.
   * 
   * @example
   * http://****.oss-cn-shanghai.aliyuncs.com/vod_sample_01.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The media ID in ApsaraVideo VOD. If the registered media file is an audio or video file, this parameter corresponds to the VideoId in ApsaraVideo VOD.
   * 
   * @example
   * d97af32828084d1896683b1aa38****
   */
  mediaId?: string;
  /**
   * @remarks
   * Specifies whether the media asset is newly registered or repeatedly registered.
   * 
   * - **true**: The media asset is newly registered.
   * - **false**: The media asset is repeatedly registered.
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
   * The list of URLs of the files that failed to be registered.
   */
  failedFileURLs?: string[];
  /**
   * @remarks
   * The list of media assets that are successfully registered in this request, including newly registered files and previously registered files.
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

