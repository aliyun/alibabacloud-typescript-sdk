// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaterialByIdResponseBodyData extends $dara.Model {
  author?: string;
  /**
   * @example
   * 2023-03-21 11:34:19
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  docKeywords?: string[];
  /**
   * @example
   * pdf
   */
  docType?: string;
  /**
   * @example
   * https://www.example.com
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @example
   * 32
   */
  id?: number;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @example
   * https://www.example.com
   */
  publicUrl?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * user_upload
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  thumbnailInBase64?: string;
  title?: string;
  /**
   * @example
   * 2022-04-08 19:33:01
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  /**
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

