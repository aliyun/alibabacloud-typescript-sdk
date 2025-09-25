// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilterDocumentListResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * 29368126816
   */
  docId?: string;
  /**
   * @example
   * {"a": "1"}
   */
  documentMeta?: { [key: string]: any };
  /**
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * sdfgsjdfg
   */
  libraryId?: string;
  /**
   * @example
   * WaitRefresh
   */
  statusCode?: string;
  title?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  records?: GetFilterDocumentListResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  totalPages?: number;
  /**
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
   * @example
   * null
   */
  cost?: number;
  data?: GetFilterDocumentListResponseBodyData;
  /**
   * @example
   * null
   */
  dataType?: string;
  /**
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 7ADF010C-FD89-569D-A079-2D4D5247E943
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

