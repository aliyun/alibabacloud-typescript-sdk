// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDatasetDocumentRequestDocumentMetadataAsrSentences extends $dara.Model {
  /**
   * @remarks
   * The end time in milliseconds.
   * 
   * @example
   * 2000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time in milliseconds.
   * 
   * @example
   * 1000
   */
  startTime?: number;
  /**
   * @remarks
   * The speech or caption information.
   * 
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentRequestDocumentMetadataKeyValues extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * xx
   */
  key?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * xx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentRequestDocumentMetadataVideoShots extends $dara.Model {
  /**
   * @remarks
   * The end time in milliseconds.
   * 
   * @example
   * 2000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time in milliseconds.
   * 
   * @example
   * 1000
   */
  startTime?: number;
  /**
   * @remarks
   * The text information from the video shot analysis.
   * 
   * @example
   * xxx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentRequestDocumentMetadata extends $dara.Model {
  /**
   * @remarks
   * The speech or caption information.
   */
  asrSentences?: AddDatasetDocumentRequestDocumentMetadataAsrSentences[];
  /**
   * @remarks
   * The metadata in a key-value structure.
   */
  keyValues?: AddDatasetDocumentRequestDocumentMetadataKeyValues[];
  /**
   * @remarks
   * The description of the metadata. This field is deprecated.
   * 
   * @example
   * xxx
   */
  text?: string;
  /**
   * @remarks
   * The video shot information.
   */
  videoShots?: AddDatasetDocumentRequestDocumentMetadataVideoShots[];
  static names(): { [key: string]: string } {
    return {
      asrSentences: 'AsrSentences',
      keyValues: 'KeyValues',
      text: 'Text',
      videoShots: 'VideoShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrSentences: { 'type': 'array', 'itemType': AddDatasetDocumentRequestDocumentMetadataAsrSentences },
      keyValues: { 'type': 'array', 'itemType': AddDatasetDocumentRequestDocumentMetadataKeyValues },
      text: 'string',
      videoShots: { 'type': 'array', 'itemType': AddDatasetDocumentRequestDocumentMetadataVideoShots },
    };
  }

  validate() {
    if(Array.isArray(this.asrSentences)) {
      $dara.Model.validateArray(this.asrSentences);
    }
    if(Array.isArray(this.keyValues)) {
      $dara.Model.validateArray(this.keyValues);
    }
    if(Array.isArray(this.videoShots)) {
      $dara.Model.validateArray(this.videoShots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentRequestDocumentMultimodalMedias extends $dara.Model {
  /**
   * @remarks
   * The URL of the file. The URL must be accessible over the public network.
   * 
   * @example
   * http://xxx
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique identifier of the multimodal data. The system automatically generates this ID. You do not need to specify this parameter.
   * 
   * @example
   * xxxx
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the multimodal data.
   * 
   * - image: an image
   * 
   * - video: a video
   * 
   * @example
   * image
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
   * @remarks
   * The unique identifier of the category.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 正文
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to disable the indexing of multimodal data, such as images and videos, in the current record. The default value is true.
   * 
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @remarks
   * The unique business ID of the document.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * The type of the document.
   * 
   * - plainText: plain text. The content parameter is required.
   * 
   * - richText: rich text in HTML format. The content parameter is required.
   * 
   * - text: a text file. The url parameter is required.
   * 
   * - pdf: a PDF file. The url parameter is required.
   * 
   * - word: a Word document. The url parameter is required.
   * 
   * - image: an image. The url parameter is required. Most common image formats are supported, such as GIF, PNG, JPG, and JPEG.
   * 
   * - video: a video. The url parameter is required. Most common video formats are supported, such as MP4, AVI, WMV, and MOV.
   * 
   * @example
   * image
   */
  docType?: string;
  /**
   * @remarks
   * The unique system ID of the document. The system automatically generates this ID. You do not need to specify this parameter.
   * 
   * @example
   * xxxx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xxx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xxxx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xxx
   */
  extend3?: string;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: AddDatasetDocumentRequestDocumentMetadata;
  /**
   * @remarks
   * Deprecated. This parameter is not available.
   * 
   * @example
   * xxxx
   */
  multimodalIndexName?: string;
  /**
   * @remarks
   * A list of multimodal data in the document.
   * 
   * - If a document, such as a rich text document, contains multimodal data like images or videos, you can pass the data using this parameter. This allows the data to be retrieved in search results.
   * 
   * - If the document itself is multimodal data, leave this field empty and specify the data using the docType and url parameters.
   */
  multimodalMedias?: AddDatasetDocumentRequestDocumentMultimodalMedias[];
  /**
   * @remarks
   * The publishing time.
   * 
   * @example
   * 2024-12-09 13:35:40
   */
  pubTime?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * xxx媒体
   */
  sourceFrom?: string;
  /**
   * @remarks
   * The summary of the article.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * The tag name.
   */
  tags?: string[];
  /**
   * @remarks
   * The title of the document.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the article. The URL must be accessible over the public network.
   * 
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      metadata: 'Metadata',
      multimodalIndexName: 'MultimodalIndexName',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      content: 'string',
      disableHandleMultimodalMedia: 'boolean',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      metadata: AddDatasetDocumentRequestDocumentMetadata,
      multimodalIndexName: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': AddDatasetDocumentRequestDocumentMultimodalMedias },
      pubTime: 'string',
      sourceFrom: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatasetDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the dataset.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * 数据集名称
   */
  datasetName?: string;
  /**
   * @remarks
   * The document.
   * 
   * This parameter is required.
   */
  document?: AddDatasetDocumentRequestDocument;
  /**
   * @remarks
   * The unique identifier of the Model Studio workspace. For more information, see [Obtain a workspaceId](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

