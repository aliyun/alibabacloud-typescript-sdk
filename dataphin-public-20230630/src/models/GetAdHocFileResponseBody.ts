// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdHocFileResponseBodyFileInfo extends $dara.Model {
  /**
   * @example
   * select 1;
   */
  content?: string;
  /**
   * @example
   * 12121
   */
  creator?: string;
  /**
   * @example
   * /xx1/xx2/
   */
  directory?: string;
  /**
   * @example
   * 12121111
   */
  id?: number;
  /**
   * @example
   * 12121
   */
  lastModifier?: string;
  /**
   * @example
   * xx测试
   */
  name?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  fileInfo?: GetAdHocFileResponseBodyFileInfo;
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

