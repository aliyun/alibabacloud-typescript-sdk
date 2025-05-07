// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddDatasetDocumentRequestDocumentMultimodalMedias } from "./AddDatasetDocumentRequestDocumentMultimodalMedias";


export class AddDatasetDocumentRequestDocument extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @example
   * 业务文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 文档类型
   */
  docType?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * 扩展字段1
   */
  extend1?: string;
  /**
   * @example
   * 扩展字段2
   */
  extend2?: string;
  /**
   * @example
   * 扩展字段3
   */
  extend3?: string;
  /**
   * @example
   * 模型名称 todo 商业化 仅个别账号可传入
   */
  multimodalIndexName?: string;
  multimodalMedias?: AddDatasetDocumentRequestDocumentMultimodalMedias[];
  /**
   * @example
   * 2024-12-09 13:35:40
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * xxxxx@xxxxx.com
   */
  title?: string;
  /**
   * @example
   * xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalIndexName: 'MultimodalIndexName',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      disableHandleMultimodalMedia: 'boolean',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalIndexName: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': AddDatasetDocumentRequestDocumentMultimodalMedias },
      pubTime: 'string',
      sourceFrom: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

