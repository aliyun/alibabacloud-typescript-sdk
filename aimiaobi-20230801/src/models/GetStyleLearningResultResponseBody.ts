// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStyleLearningResultResponseBodyDataContentList extends $dara.Model {
  /**
   * @example
   * 内容
   */
  content?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 创建用户
   */
  createUser?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
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
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * 创建时间
   */
  createTime?: string;
  /**
   * @example
   * 创建用户ID
   */
  createUser?: string;
  /**
   * @example
   * 创建用户姓名
   */
  createUserName?: string;
  docKeywords?: string[];
  /**
   * @example
   * 文档类型，pdf、word、url、image
   */
  docType?: string;
  /**
   * @example
   * 外部客户上传的URL，仅用作记录保存
   */
  externalUrl?: string;
  /**
   * @example
   * 41
   */
  fileLength?: number;
  /**
   * @example
   * 解析后的原始html内容
   */
  htmlContent?: string;
  /**
   * @example
   * 50
   */
  id?: number;
  /**
   * @example
   * 发布时间
   */
  pubTime?: string;
  /**
   * @example
   * 临时的对外公开的URL
   */
  publicUrl?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * 文档来源，user_upload、search、viewpoint
   */
  srcFrom?: string;
  /**
   * @example
   * 文档摘要
   */
  summary?: string;
  /**
   * @example
   * 解析后的文本内容，对于图片来说为空
   */
  textContent?: string;
  /**
   * @example
   * 图片文档类型的Base64缩略图
   */
  thumbnailInBase64?: string;
  /**
   * @example
   * 文档标题
   */
  title?: string;
  /**
   * @example
   * 修改时间
   */
  updateTime?: string;
  /**
   * @example
   * 修改用户ID
   */
  updateUser?: string;
  /**
   * @example
   * 修改用户姓名
   */
  updateUserName?: string;
  /**
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
   * @example
   * AIGC 生成的内容
   */
  aigcResult?: string;
  contentList?: GetStyleLearningResultResponseBodyDataContentList[];
  customTextIdList?: number[];
  /**
   * @example
   * 33
   */
  id?: number;
  materialIdList?: number[];
  materialInfoList?: GetStyleLearningResultResponseBodyDataMaterialInfoList[];
  /**
   * @example
   * 用户修订后内容
   */
  rewriteResult?: string;
  /**
   * @example
   * 文体风格名称
   */
  styleName?: string;
  /**
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
   * @example
   * NoData
   */
  code?: string;
  data?: GetStyleLearningResultResponseBodyData;
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

