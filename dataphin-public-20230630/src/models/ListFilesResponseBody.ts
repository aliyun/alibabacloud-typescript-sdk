// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyFileList extends $dara.Model {
  /**
   * @remarks
   * File category
   * 
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @remarks
   * File content
   * 
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @remarks
   * Creator
   * 
   * @example
   * 1212111
   */
  creator?: string;
  /**
   * @remarks
   * File directory
   * 
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @remarks
   * File type, such as directory
   * 
   * @example
   * directory
   */
  fileType?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1717483193830
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 1717483193830
   */
  gmtModified?: number;
  /**
   * @remarks
   * File ID
   * 
   * @example
   * 111231112
   */
  id?: number;
  /**
   * @remarks
   * Last modifier
   * 
   * @example
   * 1212111
   */
  lastModifier?: string;
  /**
   * @remarks
   * File name
   * 
   * @example
   * xx测试
   */
  name?: string;
  /**
   * @remarks
   * Project ID
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
   * Request error code. OK indicates a normal request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * File list
   */
  fileList?: ListFilesResponseBodyFileList[];
  /**
   * @remarks
   * Backend response HTTP code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request error message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful
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

