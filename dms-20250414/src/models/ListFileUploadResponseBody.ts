// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileUploadResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud master account.
   * 
   * @example
   * 16738266********
   */
  aliyunParentUid?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 20372822********
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The public download link.
   */
  downloadLink?: string;
  /**
   * @remarks
   * The file category.
   * 
   * @example
   * TextReport
   */
  fileCategory?: string;
  /**
   * @remarks
   * The file source.
   * 
   * @example
   * Agent
   */
  fileFrom?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * f-8*******01m
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * samele_report.md
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 7453
   */
  fileSize?: number;
  /**
   * @remarks
   * The file extension.
   * 
   * @example
   * md
   */
  fileType?: string;
  /**
   * @remarks
   * The time when the file was created.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The internal download link.
   */
  intranetDownloadLink?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * h8r********4fch
   */
  sessionId?: string;
  /**
   * @remarks
   * The upload path.
   */
  uploadLocation?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunParentUid: 'AliyunParentUid',
      aliyunUid: 'AliyunUid',
      downloadLink: 'DownloadLink',
      fileCategory: 'FileCategory',
      fileFrom: 'FileFrom',
      fileId: 'FileId',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileType: 'FileType',
      gmtCreated: 'GmtCreated',
      intranetDownloadLink: 'IntranetDownloadLink',
      region: 'Region',
      sessionId: 'SessionId',
      uploadLocation: 'UploadLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunParentUid: 'string',
      aliyunUid: 'string',
      downloadLink: 'string',
      fileCategory: 'string',
      fileFrom: 'string',
      fileId: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileType: 'string',
      gmtCreated: 'string',
      intranetDownloadLink: 'string',
      region: 'string',
      sessionId: 'string',
      uploadLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileUploadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of file objects.
   */
  data?: ListFileUploadResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFileUploadResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

