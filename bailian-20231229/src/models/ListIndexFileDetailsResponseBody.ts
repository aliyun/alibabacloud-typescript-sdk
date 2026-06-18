// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexFileDetailsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * The custom chunking method.
   * 
   * @example
   * DashSplitter
   */
  chunkMode?: string;
  /**
   * @remarks
   * The length of a chunk, in characters.
   * 
   * @example
   * 600
   */
  chunkSize?: string;
  /**
   * @remarks
   * The error code that is returned if the document fails to be imported.
   * 
   * @example
   * 110002
   */
  code?: string;
  /**
   * @remarks
   * The format of the document. Valid values: pdf, docx, doc, txt, md, pptx, ppt, png, jpg, jpeg, bmp, gif, and EXCEL.
   * 
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @remarks
   * Indicates whether the table headers of Excel files in an unstructured knowledge base are concatenated.
   * 
   * @example
   * true
   */
  enableHeaders?: string;
  /**
   * @remarks
   * The time when the document was imported. This value is a Unix timestamp.
   * 
   * @example
   * 1744856423000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The document ID.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56axxxxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The error message that is returned if the document fails to be imported.
   * 
   * @example
   * check fileUrlKey[file_path] / fileNameKey[null] / fileExtensionKey[file_extension] is invalid
   */
  message?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * 翻译平台运维文档
   */
  name?: string;
  /**
   * @remarks
   * The overlap length of chunks.
   * 
   * @example
   * 100
   */
  overlapSize?: string;
  /**
   * @remarks
   * The size of the document, in bytes.
   * 
   * @example
   * 996764
   */
  size?: number;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * cate_21a407a3372c4ba7aedc649709143f0cxxxxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The import status of the document. Valid values:
   * 
   * - INSERT_ERROR: The document failed to be imported.
   * 
   * - RUNNING: The document is being imported.
   * 
   * - DELETED: The document has been deleted.
   * 
   * - FINISH: The document was imported successfully.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The sentence separator.
   * 
   * @example
   * " "
   */
  separator?: string;
  static names(): { [key: string]: string } {
    return {
      chunkMode: 'ChunkMode',
      chunkSize: 'ChunkSize',
      code: 'Code',
      documentType: 'DocumentType',
      enableHeaders: 'EnableHeaders',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      overlapSize: 'OverlapSize',
      size: 'Size',
      sourceId: 'SourceId',
      status: 'Status',
      separator: 'separator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkMode: 'string',
      chunkSize: 'string',
      code: 'string',
      documentType: 'string',
      enableHeaders: 'string',
      gmtModified: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      overlapSize: 'string',
      size: 'number',
      sourceId: 'string',
      status: 'string',
      separator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexFileDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of documents in the knowledge base. The documents are sorted by import time in descending order. This order is the same as the order in the console.
   */
  documents?: ListIndexFileDetailsResponseBodyDataDocuments[];
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2437
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': ListIndexFileDetailsResponseBodyDataDocuments },
      indexId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListIndexFileDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListIndexFileDetailsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIndexFileDetailsResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

