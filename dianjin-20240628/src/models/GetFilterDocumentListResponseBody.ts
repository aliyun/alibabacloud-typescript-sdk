// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilterDocumentListResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * Document ID.
   * 
   * @example
   * 29368126816
   */
  docId?: string;
  /**
   * @remarks
   * Document metadata.
   * 
   * @example
   * {"a": "1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @remarks
   * File type.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Document library ID.
   * 
   * @example
   * sdfgsjdfg
   */
  libraryId?: string;
  /**
   * @remarks
   * Document status. Valid values: WaitRefresh (waiting for refresh), InQueue (pending), FetchingData (retrieving data), Embedding (processing document), Error (failed), Completed (active), Null (unknown).
   * 
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  /**
   * @remarks
   * Document title.
   * 
   * @example
   * 公司文档
   */
  title?: string;
  /**
   * @remarks
   * Document URL.
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

export class GetFilterDocumentListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Records.
   */
  records?: GetFilterDocumentListResponseBodyDataRecords[];
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 10
   */
  totalPages?: number;
  /**
   * @remarks
   * Total number of records.
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
      records: { 'type': 'array', 'itemType': GetFilterDocumentListResponseBodyDataRecords },
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

export class GetFilterDocumentListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Time spent on the request, in milliseconds.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * Response data.
   */
  data?: GetFilterDocumentListResponseBodyData;
  /**
   * @remarks
   * Data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7ADF010C-FD89-569D-A079-2D4D5247E943
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Timestamp.
   * 
   * @example
   * 2024-01-01 00:00:00
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
      data: GetFilterDocumentListResponseBodyData,
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

