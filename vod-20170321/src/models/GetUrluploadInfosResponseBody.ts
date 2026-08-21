// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetURLUploadInfosResponseBodyURLUploadInfoList extends $dara.Model {
  /**
   * @remarks
   * The completion time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-01-01T01:11:01Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The creation time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-01-01T01:01:01Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error_message
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 24
   */
  fileSize?: string;
  /**
   * @remarks
   * The upload task ID.
   * 
   * @example
   * 86c1925fba0****
   */
  jobId?: string;
  /**
   * @remarks
   * The media ID.
   * 
   * @example
   * 93ab850b4f6f54b6e91d24d81d4****
   */
  mediaId?: string;
  /**
   * @example
   * 93ab850b4f654b6e91d24d81d44****
   */
  registeredMediaId?: string;
  /**
   * @remarks
   * The status of the URL-based upload task. For more information about the status values and descriptions, see [Status](https://help.aliyun.com/document_detail/52839.html).
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The URL of the source video file.
   * 
   * > A maximum of 100 records can be returned.
   * 
   * @example
   * http://****.mp4
   */
  uploadURL?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {"MessageCallback":"{"CallbackURL":"http://example.aliyundoc.com"}", "Extend":"{"localId":"***", "test":"www"}"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileSize: 'FileSize',
      jobId: 'JobId',
      mediaId: 'MediaId',
      registeredMediaId: 'RegisteredMediaId',
      status: 'Status',
      uploadURL: 'UploadURL',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileSize: 'string',
      jobId: 'string',
      mediaId: 'string',
      registeredMediaId: 'string',
      status: 'string',
      uploadURL: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetURLUploadInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of upload task IDs or URLs that do not exist.
   */
  nonExists?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of URL upload information. For more information about the fields and descriptions, see [URLUploadInfo](https://help.aliyun.com/document_detail/52839.html).
   */
  URLUploadInfoList?: GetURLUploadInfosResponseBodyURLUploadInfoList[];
  static names(): { [key: string]: string } {
    return {
      nonExists: 'NonExists',
      requestId: 'RequestId',
      URLUploadInfoList: 'URLUploadInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExists: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      URLUploadInfoList: { 'type': 'array', 'itemType': GetURLUploadInfosResponseBodyURLUploadInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.nonExists)) {
      $dara.Model.validateArray(this.nonExists);
    }
    if(Array.isArray(this.URLUploadInfoList)) {
      $dara.Model.validateArray(this.URLUploadInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

