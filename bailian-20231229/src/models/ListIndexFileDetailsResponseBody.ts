// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexFileDetailsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * The custom chunking mode.
   * 
   * @example
   * DashSplitter
   */
  chunkMode?: string;
  /**
   * @remarks
   * The segment length, which is the number of characters in each text chunk.
   * 
   * @example
   * 600
   */
  chunkSize?: string;
  /**
   * @remarks
   * The error status code for file import.
   * 
   * @example
   * 110002
   */
  code?: string;
  /**
   * @remarks
   * The file format type. Valid values: pdf, docx, doc, txt, md, pptx, ppt, png, jpg, jpeg, bmp, gif, and EXCEL.
   * 
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @remarks
   * Indicates whether Excel file headers support concatenation.
   * 
   * @example
   * true
   */
  enableHeaders?: string;
  /**
   * @remarks
   * The time when the file was imported to the knowledge base, in UNIX timestamp format.
   * 
   * @example
   * 1744856423000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56axxxxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The error message for file import.
   * 
   * @example
   * check fileUrlKey[file_path] / fileNameKey[null] / fileExtensionKey[file_extension] is invalid
   */
  message?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 翻译平台运维文档
   */
  name?: string;
  /**
   * @remarks
   * The overlap length between segments.
   * 
   * @example
   * 100
   */
  overlapSize?: string;
  /**
   * @remarks
   * The file size, in bytes.
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
   * The file import status. Valid values:
   * 
   * - INSERT_ERROR: File import failed.
   * - RUNNING: File import in progress.
   * - DELETED: File deleted.
   * - FINISH: File import succeeded.
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
   * The list of files in the knowledge base, sorted by file import time in descending order (consistent with the console).
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
   * The returned number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned results.
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
   * The error status code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The data field returned by the operation.
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
   * The request ID.
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
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

