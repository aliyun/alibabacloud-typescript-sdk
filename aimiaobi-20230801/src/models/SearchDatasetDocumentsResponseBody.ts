// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatasetDocumentsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * 用户指定的文档唯一ID
   */
  docId?: string;
  /**
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @example
   * 2024-12-09 17:09:40
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
   * xx
   */
  title?: string;
  /**
   * @example
   * xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
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
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      sourceFrom: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBodyData extends $dara.Model {
  documents?: SearchDatasetDocumentsResponseBodyDataDocuments[];
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': SearchDatasetDocumentsResponseBodyDataDocuments },
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDatasetDocumentsResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SearchDatasetDocumentsResponseBodyData;
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
      data: SearchDatasetDocumentsResponseBodyData,
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

