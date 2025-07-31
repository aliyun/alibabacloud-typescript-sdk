// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesResponseBodyFileList extends $dara.Model {
  /**
   * @example
   * tempCode
   */
  category?: string;
  /**
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @example
   * 1212111
   */
  creator?: string;
  /**
   * @example
   * /xx/x
   */
  directory?: string;
  /**
   * @example
   * directory
   */
  fileType?: string;
  /**
   * @example
   * 1717483193830
   */
  gmtCreate?: number;
  /**
   * @example
   * 1717483193830
   */
  gmtModified?: number;
  /**
   * @example
   * 111231112
   */
  id?: number;
  /**
   * @example
   * 1212111
   */
  lastModifier?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  fileList?: ListFilesResponseBodyFileList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

