// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStyleLearningResultResponseBodyDataContentList extends $dara.Model {
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 内容
   */
  content?: string;
  /**
   * @remarks
   * The time when the content was created.
   * 
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @remarks
   * The user who created the content.
   * 
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * The time when the content was last modified.
   * 
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @remarks
   * The user who last modified the content.
   * 
   * @example
   * 修改用户
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleLearningResultResponseBodyDataMaterialInfoList extends $dara.Model {
  /**
   * @remarks
   * The author.
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * The time when the material was created.
   * 
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the material.
   * 
   * @example
   * 创建用户ID
   */
  createUser?: string;
  /**
   * @remarks
   * The name of the user who created the material.
   * 
   * @example
   * 创建用户姓名
   */
  createUserName?: string;
  /**
   * @remarks
   * The document tags used for purposes such as categorization. Separate keywords with commas.
   */
  docKeywords?: string[];
  /**
   * @remarks
   * The document type. Valid values: pdf, word, url, and image.
   * 
   * @example
   * 文档类型，pdf、word、url、image
   */
  docType?: string;
  /**
   * @remarks
   * The URL of the file uploaded by the customer. This is for record-keeping only.
   * 
   * @example
   * 外部客户上传的URL，仅用作记录保存
   */
  externalUrl?: string;
  /**
   * @remarks
   * The length of the file content.
   * 
   * @example
   * 41
   */
  fileLength?: number;
  /**
   * @remarks
   * The raw HTML content after parsing.
   * 
   * @example
   * 解析后的原始html内容
   */
  htmlContent?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 50
   */
  id?: number;
  /**
   * @remarks
   * The publishing time.
   * 
   * @example
   * 发布时间
   */
  pubTime?: string;
  /**
   * @remarks
   * A temporary public URL.
   * 
   * @example
   * 临时的对外公开的URL
   */
  publicUrl?: string;
  /**
   * @remarks
   * The sharing property, stored as a bitmask. The first bit indicates sharing within the workspace, the second within the tenant, and the third system-wide.
   * 
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @remarks
   * The source of the document. Valid values: user_upload, search, and viewpoint.
   * 
   * @example
   * 文档来源，user_upload、search、viewpoint
   */
  srcFrom?: string;
  /**
   * @remarks
   * The document summary.
   * 
   * @example
   * 文档摘要
   */
  summary?: string;
  /**
   * @remarks
   * The parsed text content. This is empty for images.
   * 
   * @example
   * 解析后的文本内容，对于图片来说为空
   */
  textContent?: string;
  /**
   * @remarks
   * The Base64-encoded thumbnail for image documents.
   * 
   * @example
   * 图片文档类型的Base64缩略图
   */
  thumbnailInBase64?: string;
  /**
   * @remarks
   * The document title.
   * 
   * @example
   * 文档标题
   */
  title?: string;
  /**
   * @remarks
   * The time when the material was last modified.
   * 
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user who last modified the material.
   * 
   * @example
   * 修改用户ID
   */
  updateUser?: string;
  /**
   * @remarks
   * The name of the user who last modified the material.
   * 
   * @example
   * 修改用户姓名
   */
  updateUserName?: string;
  /**
   * @remarks
   * The internal storage URL of the document. It supports multiple protocols, such as \\`http\\://\\`, \\`file://\\`, and \\`ftp\\://\\`. This URL is for long-term storage of uploaded files and is deleted on expiration.
   * 
   * @example
   * 内部文档保存的URL，支持多协议，http://,file://,ftp://:客户上传时保存到内部存储的URL、长期保存、到期删除
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
      fileLength: 'FileLength',
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
      fileLength: 'number',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleLearningResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content generated by AIGC.
   * 
   * @example
   * AIGC 生成的内容
   */
  aigcResult?: string;
  /**
   * @remarks
   * A list of custom content entities.
   */
  contentList?: GetStyleLearningResultResponseBodyDataContentList[];
  /**
   * @remarks
   * A list of custom content IDs.
   */
  customTextIdList?: number[];
  /**
   * @remarks
   * The ID of the style learning analysis result.
   * 
   * @example
   * 33
   */
  id?: number;
  /**
   * @remarks
   * A list of material IDs.
   */
  materialIdList?: number[];
  /**
   * @remarks
   * A list of detailed information about the materials.
   */
  materialInfoList?: GetStyleLearningResultResponseBodyDataMaterialInfoList[];
  /**
   * @remarks
   * The user-revised content.
   * 
   * @example
   * 用户修订后内容
   */
  rewriteResult?: string;
  /**
   * @remarks
   * The user-revised content.
   * 
   * @example
   * 用户修订后内容
   */
  styleName?: string;
  /**
   * @remarks
   * The ID of the style analysis task.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      aigcResult: 'AigcResult',
      contentList: 'ContentList',
      customTextIdList: 'CustomTextIdList',
      id: 'Id',
      materialIdList: 'MaterialIdList',
      materialInfoList: 'MaterialInfoList',
      rewriteResult: 'RewriteResult',
      styleName: 'StyleName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aigcResult: 'string',
      contentList: { 'type': 'array', 'itemType': GetStyleLearningResultResponseBodyDataContentList },
      customTextIdList: { 'type': 'array', 'itemType': 'number' },
      id: 'number',
      materialIdList: { 'type': 'array', 'itemType': 'number' },
      materialInfoList: { 'type': 'array', 'itemType': GetStyleLearningResultResponseBodyDataMaterialInfoList },
      rewriteResult: 'string',
      styleName: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    if(Array.isArray(this.customTextIdList)) {
      $dara.Model.validateArray(this.customTextIdList);
    }
    if(Array.isArray(this.materialIdList)) {
      $dara.Model.validateArray(this.materialIdList);
    }
    if(Array.isArray(this.materialInfoList)) {
      $dara.Model.validateArray(this.materialInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStyleLearningResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetStyleLearningResultResponseBodyData;
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
   * success
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
      data: GetStyleLearningResultResponseBodyData,
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

