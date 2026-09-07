// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumUploadFilesResponseBodyDataFileList extends $dara.Model {
  fileName?: string;
  lastModifiedTime?: any;
  size?: string;
  uuid?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      lastModifiedTime: 'LastModifiedTime',
      size: 'Size',
      uuid: 'Uuid',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      lastModifiedTime: 'any',
      size: 'string',
      uuid: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumUploadFilesResponseBodyData extends $dara.Model {
  fileList?: GetRumUploadFilesResponseBodyDataFileList[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': GetRumUploadFilesResponseBodyDataFileList },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRumUploadFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success. Other values indicate exceptions.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The file list.
   */
  data?: GetRumUploadFilesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned when the call fails.
   * 
   * @example
   * 内部错误，请联系管理员。
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2983BEF7-4A0D-47A2-94A2-8E9C5E63****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the query is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetRumUploadFilesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

