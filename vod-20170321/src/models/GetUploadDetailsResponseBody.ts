// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDetailsResponseBodyUploadDetails extends $dara.Model {
  /**
   * @remarks
   * The time when the upload job was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-04-28T09:45:07Z
   */
  completionTime?: string;
  /**
   * @remarks
   * The time when the upload job was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-04-28T09:42:07Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The device model.
   * 
   * @example
   * Chrome
   */
  deviceModel?: string;
  /**
   * @remarks
   * The size of the uploaded file. Unit: byte.
   * 
   * @example
   * 46
   */
  fileSize?: number;
  /**
   * @remarks
   * The ID of the uploaded audio or video.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****
   */
  mediaId?: string;
  /**
   * @remarks
   * The time when the information about the media file was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-04-28T09:43:12Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The status of the video. For more information about the valid values and value description of the parameter, see the "Status: the status of a video" section of the [Basic structures](https://help.aliyun.com/document_detail/52839.html) topic.
   * 
   * @example
   * Uploading
   */
  status?: string;
  /**
   * @remarks
   * The title of the media file.
   * 
   * @example
   * Test details
   */
  title?: string;
  /**
   * @remarks
   * The IP address of the server that uploads the media file.
   * 
   * @example
   * 192.168.0.1
   */
  uploadIP?: string;
  /**
   * @remarks
   * The upload ratio.
   * 
   * @example
   * 0.038
   */
  uploadRatio?: number;
  /**
   * @remarks
   * The upload size. Unit: byte.
   * 
   * @example
   * 346
   */
  uploadSize?: number;
  /**
   * @remarks
   * The method that is used to upload the media file.
   * 
   * @example
   * WebSDK
   */
  uploadSource?: string;
  /**
   * @remarks
   * The status of the upload job. For more information about the valid values and value description of the parameter, see the "Status: the status of a URL-based upload job" section of the [Basic structures](https://help.aliyun.com/document_detail/52839.html) topic.
   * 
   * @example
   * Uploading
   */
  uploadStatus?: string;
  static names(): { [key: string]: string } {
    return {
      completionTime: 'CompletionTime',
      creationTime: 'CreationTime',
      deviceModel: 'DeviceModel',
      fileSize: 'FileSize',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      title: 'Title',
      uploadIP: 'UploadIP',
      uploadRatio: 'UploadRatio',
      uploadSize: 'UploadSize',
      uploadSource: 'UploadSource',
      uploadStatus: 'UploadStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTime: 'string',
      creationTime: 'string',
      deviceModel: 'string',
      fileSize: 'number',
      mediaId: 'string',
      modificationTime: 'string',
      status: 'string',
      title: 'string',
      uploadIP: 'string',
      uploadRatio: 'number',
      uploadSize: 'number',
      uploadSource: 'string',
      uploadStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media files that cannot be accessed.
   */
  forbiddenMediaIds?: string[];
  /**
   * @remarks
   * The IDs of the media files that do not exist.
   */
  nonExistMediaIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9E290613-04F4-47F4-795D30732077****
   */
  requestId?: string;
  /**
   * @remarks
   * The upload details.
   */
  uploadDetails?: GetUploadDetailsResponseBodyUploadDetails[];
  static names(): { [key: string]: string } {
    return {
      forbiddenMediaIds: 'ForbiddenMediaIds',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
      uploadDetails: 'UploadDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenMediaIds: { 'type': 'array', 'itemType': 'string' },
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      uploadDetails: { 'type': 'array', 'itemType': GetUploadDetailsResponseBodyUploadDetails },
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenMediaIds)) {
      $dara.Model.validateArray(this.forbiddenMediaIds);
    }
    if(Array.isArray(this.nonExistMediaIds)) {
      $dara.Model.validateArray(this.nonExistMediaIds);
    }
    if(Array.isArray(this.uploadDetails)) {
      $dara.Model.validateArray(this.uploadDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

