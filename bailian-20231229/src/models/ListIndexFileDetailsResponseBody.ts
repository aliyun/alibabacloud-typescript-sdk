// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexFileDetailsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @example
   * DashSplitter
   */
  chunkMode?: string;
  /**
   * @example
   * 600
   */
  chunkSize?: string;
  /**
   * @example
   * 110002
   */
  code?: string;
  /**
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @example
   * true
   */
  enableHeaders?: string;
  /**
   * @example
   * 1744856423000
   */
  gmtModified?: number;
  /**
   * @example
   * doc_c134aa2073204a5d936d870bf960f56axxxxxxxx
   */
  id?: string;
  /**
   * @example
   * check fileUrlKey[file_path] / fileNameKey[null] / fileExtensionKey[file_extension] is invalid
   */
  message?: string;
  name?: string;
  /**
   * @example
   * 100
   */
  overlapSize?: string;
  /**
   * @example
   * 996764
   */
  size?: number;
  /**
   * @example
   * cate_21a407a3372c4ba7aedc649709143f0cxxxxxxxx
   */
  sourceId?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
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
  documents?: ListIndexFileDetailsResponseBodyDataDocuments[];
  /**
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
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
   * @example
   * InvalidParameter
   */
  code?: string;
  data?: ListIndexFileDetailsResponseBodyData;
  /**
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
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

