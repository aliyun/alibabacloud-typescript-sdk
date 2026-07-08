// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocInfoResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @example
   * 200
   */
  height?: number;
  /**
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category where the document is stored.
   * 
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * 電視廣播2020年報
   */
  docName?: string;
  /**
   * @remarks
   * The document type.
   * 
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @remarks
   * The URL of the document.
   * 
   * @example
   * http://xxx/xxx.pdf
   */
  fileUrl?: string;
  pageInfo?: GetDocInfoResponseBodyDataPageInfo;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 1和0，当状态为1时 表示获取文档成功，用户可进行生成文档摘要、生脑图等操作
   */
  status?: number;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * 导入成功
   */
  statusMessage?: string;
  /**
   * @remarks
   * Text transcripts from the video\\"s audio.
   */
  videoContents?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docName: 'DocName',
      docType: 'DocType',
      fileUrl: 'FileUrl',
      pageInfo: 'PageInfo',
      status: 'Status',
      statusMessage: 'StatusMessage',
      videoContents: 'VideoContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docName: 'string',
      docType: 'string',
      fileUrl: 'string',
      pageInfo: GetDocInfoResponseBodyDataPageInfo,
      status: 'number',
      statusMessage: 'string',
      videoContents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.videoContents)) {
      $dara.Model.validateArray(this.videoContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetDocInfoResponseBodyData;
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
   * The response message.
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
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of `true` indicates success, and `false` indicates failure.
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
      data: GetDocInfoResponseBodyData,
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

