// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUploadConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the file. You can use this value as a URL for AI Writing Assistant.
   * 
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  /**
   * @remarks
   * The credentials for uploading the file to OSS.
   * 
   * ```json
   * {
   *   "OSSAccessKeyId": "xxx",
   *   "Signature": "xxx+xxx=",
   *   "MaxSize": 31457280,
   *   "key": "aimiaobi/dataset/2_2/xx.txt",
   *   "policy": "xxx=="
   * }
   * ```
   */
  formDatas?: { [key: string]: string };
  /**
   * @remarks
   * The address for uploading the file to OSS. This is a dedicated OSS domain name for AI Writing Assistant. The value is fixed to \\`https\\://aimiaobi-service-prod.oss-cn-beijing.aliyuncs.com/\\`.
   * 
   * @example
   * https://aimiaobi-service-prod.oss-cn-beijing.aliyuncs.com/
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
   * @remarks
   * The status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GenerateUploadConfigResponseBodyData;
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
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success. \\`false\\` indicates failure.
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

