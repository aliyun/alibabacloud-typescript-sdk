// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyFileList extends $dara.Model {
  /**
   * @remarks
   * The file category.
   * 
   * @example
   * tempCode
   */
  category?: string;
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
   * 1212111
   */
  creator?: string;
  /**
   * @remarks
   * The file directory.
   * 
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @remarks
   * The file type, such as directory.
   * 
   * @example
   * directory
   */
  fileType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1717483193830
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1717483193830
   */
  gmtModified?: number;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 111231112
   */
  id?: number;
  /**
   * @remarks
   * The last modifier.
   * 
   * @example
   * 1212111
   */
  lastModifier?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * xxTest
   */
  name?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 312112121
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      creator: 'Creator',
      directory: 'Directory',
      fileType: 'FileType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      creator: 'string',
      directory: 'string',
      fileType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
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

export class ListFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of files.
   */
  fileList?: ListFilesResponseBodyFileList[];
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileList: 'FileList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileList: { 'type': 'array', 'itemType': ListFilesResponseBodyFileList },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

