// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  formDatas?: { [key: string]: string };
  /**
   * @example
   * https://bucket-name.oss-cn-hangzhou.aliyuncs.com
   */
  postUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      formDatas: 'FormDatas',
      postUrl: 'PostUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      formDatas: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      postUrl: 'string',
    };
  }

  validate() {
    if(this.formDatas) {
      $dara.Model.validateMap(this.formDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GenerateUploadConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateUploadConfigResponseBodyData,
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

