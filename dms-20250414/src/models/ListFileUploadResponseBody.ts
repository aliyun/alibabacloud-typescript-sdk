// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileUploadResponseBodyData extends $dara.Model {
  /**
   * @example
   * 16738266********
   */
  aliyunParentUid?: string;
  /**
   * @example
   * 20372822********
   */
  aliyunUid?: string;
  downloadLink?: string;
  /**
   * @example
   * TextReport
   */
  fileCategory?: string;
  /**
   * @example
   * Agent
   */
  fileFrom?: string;
  /**
   * @example
   * f-8*******01m
   */
  fileId?: string;
  /**
   * @example
   * samele_report.md
   */
  fileName?: string;
  /**
   * @example
   * 7453
   */
  fileSize?: number;
  /**
   * @example
   * md
   */
  fileType?: string;
  /**
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  intranetDownloadLink?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * h8r********4fch
   */
  sessionId?: string;
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
  data?: ListFileUploadResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
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

