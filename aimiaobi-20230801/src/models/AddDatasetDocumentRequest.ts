// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDatasetDocumentRequestDocumentMultimodalMedias extends $dara.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class AddDatasetDocumentRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  document?: AddDatasetDocumentRequestDocument;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      document: 'Document',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      datasetName: 'string',
      document: AddDatasetDocumentRequestDocument,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

