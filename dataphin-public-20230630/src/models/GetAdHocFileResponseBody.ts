// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdHocFileResponseBodyFileInfo extends $dara.Model {
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 12121
   */
  creator?: string;
  /**
   * @remarks
   * The directory where the file is located.
   * 
   * @example
   * /xx1/xx2/
   */
  directory?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 12121111
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   * 
   * @example
   * 12121
   */
  lastModifier?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 12132323
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creator: 'Creator',
      directory: 'Directory',
      id: 'Id',
      lastModifier: 'LastModifier',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      creator: 'string',
      directory: 'string',
      id: 'number',
      lastModifier: 'string',
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdHocFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the custom query file.
   */
  fileInfo?: GetAdHocFileResponseBodyFileInfo;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileInfo: 'FileInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileInfo: GetAdHocFileResponseBodyFileInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.fileInfo && typeof (this.fileInfo as any).validate === 'function') {
      (this.fileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

