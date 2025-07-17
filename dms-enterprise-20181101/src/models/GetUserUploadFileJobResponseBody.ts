// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * test_bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The endpoint of the OSS bucket.
   * 
   * @example
   * http://oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the OSS object.
   * 
   * @example
   * test.sql
   */
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      endpoint: 'Endpoint',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      endpoint: 'string',
      objectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBodyUploadFileJobDetail extends $dara.Model {
  /**
   * @remarks
   * The key of the file that is returned after the file is uploaded. You can use this key when you upload the file as an attachment in a ticket.
   * 
   * @example
   * upload_3c7edea3-e4c3-4403-857d-737043036f69_test.sql
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * test.sql
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file. Unit: byte.
   * 
   * @example
   * 2968269
   */
  fileSize?: number;
  /**
   * @remarks
   * The purpose of the uploaded file. Valid values:
   * 
   * *   **datacorrect**: The file is uploaded to change data.
   * *   **order_info_attachment**: The file is uploaded as an attachment in a ticket.
   * *   **big-file**: The file is uploaded to import multiple data records at a time.
   * *   **sqlreview**: The file is uploaded for SQL review.
   * 
   * @example
   * datacorrect
   */
  fileSource?: string;
  /**
   * @remarks
   * The key of the file upload task.
   * 
   * @example
   * 65254a4c1614235217749100e
   */
  jobKey?: string;
  /**
   * @remarks
   * The status of the file upload task. Valid values:
   * 
   * *   **INIT**: The file upload task was initialized.
   * *   **PENDING**: The file upload task waited to be run.
   * *   **BE_SCHEDULED**: The file upload task waited to be scheduled.
   * *   **FAIL**: The file upload task failed.
   * *   **SUCCESS**: The file upload task was successful.
   * *   **RUNNING**: The file upload task was being run.
   * 
   * @example
   * SUCCESS
   */
  jobStatus?: string;
  /**
   * @remarks
   * The information about the status of the file upload task.
   * 
   * @example
   * success
   */
  jobStatusDesc?: string;
  /**
   * @remarks
   * The information about the Object Storage Service (OSS) bucket from which the file is uploaded.
   * 
   * > This parameter is returned if the value of **UploadType** is **OSS**.
   */
  uploadOSSParam?: GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam;
  /**
   * @remarks
   * The method used to upload the file. Valid values:
   * 
   * *   **URL**
   * *   **OSS**
   * 
   * @example
   * URL
   */
  uploadType?: string;
  /**
   * @remarks
   * The URL of the file.
   * 
   * > This parameter is returned if the value of **UploadType** is **URL**.
   * 
   * @example
   * http://xxxx/test.sql
   */
  uploadURL?: string;
  /**
   * @remarks
   * The size of the uploaded file. Unit: byte.
   * 
   * @example
   * 2968269
   */
  uploadedSize?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSource: 'FileSource',
      jobKey: 'JobKey',
      jobStatus: 'JobStatus',
      jobStatusDesc: 'JobStatusDesc',
      uploadOSSParam: 'UploadOSSParam',
      uploadType: 'UploadType',
      uploadURL: 'UploadURL',
      uploadedSize: 'UploadedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileSource: 'string',
      jobKey: 'string',
      jobStatus: 'string',
      jobStatusDesc: 'string',
      uploadOSSParam: GetUserUploadFileJobResponseBodyUploadFileJobDetailUploadOSSParam,
      uploadType: 'string',
      uploadURL: 'string',
      uploadedSize: 'number',
    };
  }

  validate() {
    if(this.uploadOSSParam && typeof (this.uploadOSSParam as any).validate === 'function') {
      (this.uploadOSSParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserUploadFileJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDEFE9F2-B3B4-42D0-83AE-ECF9FC067DCD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the file upload task.
   */
  uploadFileJobDetail?: GetUserUploadFileJobResponseBodyUploadFileJobDetail;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      uploadFileJobDetail: 'UploadFileJobDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      uploadFileJobDetail: GetUserUploadFileJobResponseBodyUploadFileJobDetail,
    };
  }

  validate() {
    if(this.uploadFileJobDetail && typeof (this.uploadFileJobDetail as any).validate === 'function') {
      (this.uploadFileJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

