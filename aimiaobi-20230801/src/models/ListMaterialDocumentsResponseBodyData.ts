// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMaterialDocumentsResponseBodyDataFileAttr } from "./ListMaterialDocumentsResponseBodyDataFileAttr";


export class ListMaterialDocumentsResponseBodyData extends $dara.Model {
  author?: string;
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  createUserName?: string;
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
  fileAttr?: ListMaterialDocumentsResponseBodyDataFileAttr;
  fileKey?: string;
  htmlContent?: string;
  /**
   * @example
   * 35
   */
  id?: number;
  /**
   * @example
   * 2023-03-18 02:00:00
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
   * 2023-03-18 02:00:00
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  updateUserName?: string;
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

