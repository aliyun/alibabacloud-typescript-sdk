// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetURLUploadInfosResponseBodyURLUploadInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the upload job was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T01:11:01Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the upload job was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T01:01:01Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * error_message
   */
  errorMessage?: string;
  /**
   * @remarks
   * The size of the uploaded media file. Unit: byte.
   * 
   * @example
   * 24
   */
  fileSize?: string;
  /**
   * @remarks
   * The ID of the upload job.
   * 
   * @example
   * 86c1925fba0****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the uploaded media file.
   * 
   * @example
   * 93ab850b4f6f54b6e91d24d81d4****
   */
  mediaId?: string;
  /**
   * @remarks
   * The status of the URL-based upload job. For more information about the valid values and value description of the parameter, see the "Status: the status of a video" section of the [Basic structures](https://help.aliyun.com/document_detail/52839.html) topic.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The upload URL of the source file.
   * 
   * > A maximum of 100 URLs can be returned.
   * 
   * @example
   * http://****.mp4
   */
  uploadURL?: string;
  /**
   * @remarks
   * The custom configurations. The value is a JSON string. For more information, see the "UserData: specifies the custom configurations for media upload" section of the [Request parameters](https://help.aliyun.com/document_detail/86952.html) topic.
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
   * The job IDs or upload URLs that do not exist.
   */
  nonExists?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about URL-based upload jobs. For more information, see the "URLUploadInfo: the information about a URL-based upload job" section of the [Basic structures](https://help.aliyun.com/document_detail/52839.html) topic.
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

