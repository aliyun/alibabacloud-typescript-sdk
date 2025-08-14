// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrlUploadInfosResponseBodyURLUploadInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the upload job was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-26 21:47:37
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the upload job was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-07T10:03:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error code returned if the upload job failed.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the upload job failed.
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 64610
   */
  fileSize?: string;
  /**
   * @remarks
   * The ID of the upload job.
   * 
   * @example
   * 3829500c0fef429fa4ec1680b122d***
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the uploaded media file.
   * 
   * @example
   * 5014ca70f08171ecbf940764a0fd6***
   */
  mediaId?: string;
  /**
   * @remarks
   * The status of the upload job. For more information about the valid values of the parameter, see the "Status: the status of a URL-based upload job" section of the [Basic data types](https://help.aliyun.com/document_detail/52839.html) topic.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The upload URL of the source file.
   * 
   * >  A maximum of 100 URLs can be returned.
   * 
   * @example
   * http://****.mp4
   */
  uploadURL?: string;
  /**
   * @remarks
   * The user data. The value is a JSON string.
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

export class GetUrlUploadInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job IDs or upload URLs that do not exist.
   */
  nonExists?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The details about URL-based upload jobs.
   */
  URLUploadInfoList?: GetUrlUploadInfosResponseBodyURLUploadInfoList[];
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
      URLUploadInfoList: { 'type': 'array', 'itemType': GetUrlUploadInfosResponseBodyURLUploadInfoList },
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

