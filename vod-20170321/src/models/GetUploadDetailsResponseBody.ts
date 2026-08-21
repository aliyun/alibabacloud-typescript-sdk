// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDetailsResponseBodyUploadDetails extends $dara.Model {
  /**
   * @remarks
   * The completion time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-04-28T09:45:07Z
   */
  completionTime?: string;
  /**
   * @remarks
   * The creation time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
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
   * The file size. Unit: bytes.
   * 
   * @example
   * 46
   */
  fileSize?: number;
  /**
   * @remarks
   * The ID of the uploaded audio or video file.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****
   */
  mediaId?: string;
  /**
   * @remarks
   * The modification time. The time is in the _yyyy-MM-ddTHH:mm:ssZ_ format (UTC).
   * 
   * @example
   * 2019-04-28T09:43:12Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The video status. For the valid values and descriptions of video statuses, see the value list in [Status: video status](https://help.aliyun.com/document_detail/52839.html).
   * 
   * @example
   * Uploading
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Test file upload details
   */
  title?: string;
  /**
   * @remarks
   * The upload IP address.
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
   * The upload size. Unit: bytes.
   * 
   * @example
   * 346
   */
  uploadSize?: number;
  /**
   * @remarks
   * The upload source.
   * 
   * @example
   * WebSDK
   */
  uploadSource?: string;
  /**
   * @remarks
   * The upload task status. For the valid values and descriptions of upload statuses, see the value list in [Status: URL upload task status](https://help.aliyun.com/document_detail/52839.html).
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
   * The IDs of media files that cannot be accessed.
   */
  forbiddenMediaIds?: string[];
  /**
   * @remarks
   * The IDs of media files that do not exist.
   */
  nonExistMediaIds?: string[];
  /**
   * @remarks
   * The request ID.
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

