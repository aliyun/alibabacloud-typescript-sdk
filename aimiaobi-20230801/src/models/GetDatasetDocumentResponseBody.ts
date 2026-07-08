// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetDocumentResponseBodyDataMetadataAsrSentences extends $dara.Model {
  /**
   * @remarks
   * End time in milliseconds.
   * 
   * @example
   * 2000
   */
  endTime?: number;
  /**
   * @remarks
   * Start time in milliseconds.
   * 
   * @example
   * 1000
   */
  startTime?: number;
  /**
   * @remarks
   * ASR text content.
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

export class GetDatasetDocumentResponseBodyDataMetadataKeyValues extends $dara.Model {
  /**
   * @remarks
   * Parameter Name
   * 
   * @example
   * xx
   */
  key?: string;
  /**
   * @remarks
   * Parameter value
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

export class GetDatasetDocumentResponseBodyDataMetadataVideoShots extends $dara.Model {
  /**
   * @remarks
   * End time of the video shard in milliseconds.
   * 
   * @example
   * 2000
   */
  endTime?: number;
  /**
   * @remarks
   * Start time of the video shard in milliseconds.
   * 
   * @example
   * 1000
   */
  startTime?: number;
  /**
   * @remarks
   * Content of the video shard.
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

export class GetDatasetDocumentResponseBodyDataMetadata extends $dara.Model {
  /**
   * @remarks
   * ASR results.
   */
  asrSentences?: GetDatasetDocumentResponseBodyDataMetadataAsrSentences[];
  /**
   * @remarks
   * Key-value structure metadata
   */
  keyValues?: GetDatasetDocumentResponseBodyDataMetadataKeyValues[];
  /**
   * @remarks
   * Metadata for the document dimension.
   * 
   * @example
   * xx
   */
  text?: string;
  /**
   * @remarks
   * Video sharding information.
   */
  videoShots?: GetDatasetDocumentResponseBodyDataMetadataVideoShots[];
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
      asrSentences: { 'type': 'array', 'itemType': GetDatasetDocumentResponseBodyDataMetadataAsrSentences },
      keyValues: { 'type': 'array', 'itemType': GetDatasetDocumentResponseBodyDataMetadataKeyValues },
      text: 'string',
      videoShots: { 'type': 'array', 'itemType': GetDatasetDocumentResponseBodyDataMetadataVideoShots },
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

export class GetDatasetDocumentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Category UUID
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Content of the article.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * Whether this record is indexed in the multimodal index library.
   * 
   * @example
   * true
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @remarks
   * User-side unique ID of the document.
   * 
   * @example
   * xxx
   */
  docId?: string;
  /**
   * @remarks
   * Document type. For example, video or image.
   * 
   * @example
   * video
   */
  docType?: string;
  /**
   * @remarks
   * Unique ID of the document in the document system.
   * 
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Dictionary information.
   */
  metadata?: GetDatasetDocumentResponseBodyDataMetadata;
  /**
   * @remarks
   * Publication time in yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-05-14 08:54:33
   */
  pubTime?: string;
  /**
   * @remarks
   * Source of the document.
   * 
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @remarks
   * Document status. 100 means success. 0 means failure. 1 means indexing or queued.
   * 
   * @example
   * 100
   */
  status?: number;
  /**
   * @remarks
   * Summary of the article.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * Tags.
   */
  tags?: string[];
  /**
   * @remarks
   * Title of the document.
   * 
   * @example
   * 文档标题
   */
  title?: string;
  /**
   * @remarks
   * URL of the article.
   * 
   * @example
   * https://www.aliyun.com
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
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      status: 'Status',
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
      metadata: GetDatasetDocumentResponseBodyDataMetadata,
      pubTime: 'string',
      sourceFrom: 'string',
      status: 'number',
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetDocumentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data.
   */
  data?: GetDatasetDocumentResponseBodyData;
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
   * Error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique identifier of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. true means success. false means failure.
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
      data: GetDatasetDocumentResponseBodyData,
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

