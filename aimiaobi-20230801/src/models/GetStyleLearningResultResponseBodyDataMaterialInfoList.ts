// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

