// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterialDocumentsResponseBodyDataFileAttr extends $dara.Model {
  /**
   * @remarks
   * Duration.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * File content length.
   * 
   * @example
   * 1048576
   */
  fileLength?: number;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * xxx.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * Video height.
   * 
   * @example
   * 1024
   */
  height?: number;
  /**
   * @remarks
   * File MIME type.
   * 
   * @example
   * image/png
   */
  mimeType?: string;
  /**
   * @remarks
   * Video width.
   * 
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      fileLength: 'FileLength',
      fileName: 'FileName',
      height: 'Height',
      mimeType: 'MimeType',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      fileLength: 'number',
      fileName: 'string',
      height: 'number',
      mimeType: 'string',
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

export class ListMaterialDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Author.
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * Creator user ID.
   * 
   * @example
   * "1"
   */
  createUser?: string;
  /**
   * @remarks
   * Creator username.
   * 
   * @example
   * 创建用户名
   */
  createUserName?: string;
  /**
   * @remarks
   * Document tags used for categorization. Separate keywords with commas.
   */
  docKeywords?: string[];
  /**
   * @remarks
   * Document type: pdf, word, url, or image.
   * 
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @remarks
   * URL uploaded by an external customer, used only for record keeping.
   * 
   * @example
   * https://www.example.com
   */
  externalUrl?: string;
  /**
   * @remarks
   * Media file properties.
   */
  fileAttr?: ListMaterialDocumentsResponseBodyDataFileAttr;
  /**
   * @remarks
   * Unique file identity.
   * 
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  /**
   * @remarks
   * Web page content.
   * 
   * @example
   * 网页内容
   */
  htmlContent?: string;
  /**
   * @remarks
   * Primary key.
   * 
   * @example
   * 35
   */
  id?: number;
  /**
   * @remarks
   * Publish time. Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  pubTime?: string;
  /**
   * @remarks
   * Temporary public URL.
   * 
   * @example
   * https://www.example.com
   */
  publicUrl?: string;
  /**
   * @remarks
   * Public property, stored by bit. The first bit indicates if it is shared within the workspace, the second bit indicates if it is shared within the tenant, and the third bit indicates if it is shared system-wide.
   * 
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @remarks
   * Document source: user_upload, search, or viewpoint.
   * 
   * @example
   * user_upload
   */
  srcFrom?: string;
  /**
   * @remarks
   * Document summary.
   * 
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @remarks
   * Parsed text content. This is empty for images.
   * 
   * @example
   * 文档内容
   */
  textContent?: string;
  /**
   * @remarks
   * Base64 thumbnail for image document types.
   * 
   * @example
   * base64编码的图像二进制数据
   */
  thumbnailInBase64?: string;
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * 文档标题
   */
  title?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * Modifier user ID.
   * 
   * @example
   * "1"
   */
  updateUser?: string;
  /**
   * @remarks
   * The name of the user who updated the document.
   * 
   * @example
   * 更新用户名
   */
  updateUserName?: string;
  /**
   * @remarks
   * URL for internal document storage. Supports multiple protocols (http\\://, file://, ftp\\://). This URL is saved to internal storage when a customer uploads a file, stored long-term, and deleted upon expiration.
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
      createUserName: 'CreateUserName',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
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
      updateUserName: 'UpdateUserName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      createTime: 'string',
      createUser: 'string',
      createUserName: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      fileAttr: ListMaterialDocumentsResponseBodyDataFileAttr,
      fileKey: 'string',
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
      updateUserName: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docKeywords)) {
      $dara.Model.validateArray(this.docKeywords);
    }
    if(this.fileAttr && typeof (this.fileAttr as any).validate === 'function') {
      (this.fileAttr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * List object.
   */
  data?: ListMaterialDocumentsResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description.
   * 
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @remarks
   * Unique request identity.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Is successful: true for success, false for failure.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListMaterialDocumentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

