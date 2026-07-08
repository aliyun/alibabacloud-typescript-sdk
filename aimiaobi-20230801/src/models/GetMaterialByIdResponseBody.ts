// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaterialByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Author
   * 
   * @example
   * 文档作者
   */
  author?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2023-03-21 11:34:19
   */
  createTime?: string;
  /**
   * @remarks
   * Creator user ID
   * 
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @remarks
   * Document tags used for classification and other purposes. Separate multiple keywords with commas.
   */
  docKeywords?: string[];
  /**
   * @remarks
   * Document type, such as pdf, word, url, or image
   * 
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @remarks
   * URL uploaded by an external customer. Used only for record keeping.
   * 
   * @example
   * https://www.example.com
   */
  externalUrl?: string;
  /**
   * @remarks
   * Web page content
   * 
   * @example
   * 网页内容
   */
  htmlContent?: string;
  /**
   * @remarks
   * Primary key
   * 
   * @example
   * 32
   */
  id?: number;
  /**
   * @remarks
   * Publication time
   * 
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @remarks
   * Temporary public URL
   * 
   * @example
   * https://www.example.com
   */
  publicUrl?: string;
  /**
   * @remarks
   * Sharing attribute stored as bit flags. The first bit indicates sharing within the workspace, the second bit indicates sharing within the tenant, and the third bit indicates system-wide sharing.
   * 
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @remarks
   * Document source, such as user_upload, search, or viewpoint
   * 
   * @example
   * user_upload
   */
  srcFrom?: string;
  /**
   * @remarks
   * Document summary
   * 
   * @example
   * 文档摘要
   */
  summary?: string;
  /**
   * @remarks
   * Parsed text content. Empty for images.
   * 
   * @example
   * 文本内容
   */
  textContent?: string;
  /**
   * @remarks
   * Base64-encoded thumbnail for image documents
   * 
   * @example
   * Base64编码的缩略图
   */
  thumbnailInBase64?: string;
  /**
   * @remarks
   * Document title
   * 
   * @example
   * 文档标题
   */
  title?: string;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 2022-04-08 19:33:01
   */
  updateTime?: string;
  /**
   * @remarks
   * Modifier user ID
   * 
   * @example
   * 1
   */
  updateUser?: string;
  /**
   * @remarks
   * Internal document storage URL
   * 
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      publicUrl: 'PublicUrl',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      thumbnailInBase64: 'ThumbnailInBase64',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      createTime: 'string',
      createUser: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      publicUrl: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      thumbnailInBase64: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docKeywords)) {
      $dara.Model.validateArray(this.docKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetMaterialByIdResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates success: true for success, false for failure
   * 
   * @example
   * false
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
      data: GetMaterialByIdResponseBodyData,
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

