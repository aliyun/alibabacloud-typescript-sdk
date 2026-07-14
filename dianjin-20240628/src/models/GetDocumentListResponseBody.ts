// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentListResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The document ID.
   * 
   * @example
   * 8326748346
   */
  docId?: string;
  /**
   * @remarks
   * The document metadata.
   */
  documentMeta?: { [key: string]: any };
  /**
   * @remarks
   * The document type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the library to which the document belongs.
   * 
   * @example
   * skjdhshbv
   */
  libraryId?: string;
  /**
   * @remarks
   * The document status. Valid values: WaitRefresh (waiting for refresh), InQueue (pending), FetchingData (retrieving data), Embedding (processing document), Error (error), Completed (available), and Null (unknown).
   * 
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  /**
   * @remarks
   * The document title.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The document URL. This field will be deprecated. The value is empty. To get the document URL, use the GetDocumentUrl operation.
   * 
   * @example
   * null
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      documentMeta: 'documentMeta',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      libraryId: 'libraryId',
      statusCode: 'statusCode',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      documentMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      libraryId: 'string',
      statusCode: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.documentMeta) {
      $dara.Model.validateMap(this.documentMeta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number. This is a paging parameter.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. This is a paging parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The records.
   */
  records?: GetDocumentListResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of pages. This is a paging parameter.
   * 
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      records: 'records',
      totalPages: 'totalPages',
      totalRecords: 'totalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': GetDocumentListResponseBodyDataRecords },
      totalPages: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetDocumentListResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GetDocumentListResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

