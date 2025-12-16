// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetDocumentResponseBodyDataMetadataAsrSentences extends $dara.Model {
  endTime?: number;
  startTime?: number;
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

export class GetDatasetDocumentResponseBodyDataMetadataVideoShots extends $dara.Model {
  endTime?: number;
  startTime?: number;
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
  asrSentences?: GetDatasetDocumentResponseBodyDataMetadataAsrSentences[];
  text?: string;
  videoShots?: GetDatasetDocumentResponseBodyDataMetadataVideoShots[];
  static names(): { [key: string]: string } {
    return {
      asrSentences: 'AsrSentences',
      text: 'Text',
      videoShots: 'VideoShots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrSentences: { 'type': 'array', 'itemType': GetDatasetDocumentResponseBodyDataMetadataAsrSentences },
      text: 'string',
      videoShots: { 'type': 'array', 'itemType': GetDatasetDocumentResponseBodyDataMetadataVideoShots },
    };
  }

  validate() {
    if(Array.isArray(this.asrSentences)) {
      $dara.Model.validateArray(this.asrSentences);
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
  content?: string;
  /**
   * @example
   * true
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  docType?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  metadata?: GetDatasetDocumentResponseBodyDataMetadata;
  /**
   * @example
   * 2024-05-14 08:54:33
   */
  pubTime?: string;
  /**
   * @example
   * 来源
   */
  sourceFrom?: string;
  status?: number;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  title?: string;
  /**
   * @example
   * https://www.aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      metadata: 'Metadata',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      status: 'Status',
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
      metadata: GetDatasetDocumentResponseBodyDataMetadata,
      pubTime: 'string',
      sourceFrom: 'string',
      status: 'number',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetDocumentResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetDatasetDocumentResponseBodyData;
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

