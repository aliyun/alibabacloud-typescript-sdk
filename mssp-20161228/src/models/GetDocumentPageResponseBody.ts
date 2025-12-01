// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Delivered by.
   * 
   * @example
   * luna
   */
  deliveredBy?: string;
  /**
   * @remarks
   * Report name.
   * 
   * @example
   * month report
   */
  documentName?: string;
  /**
   * @remarks
   * Service report type.
   * 
   * @example
   * 3
   */
  documentType?: string;
  /**
   * @remarks
   * Primary key ID of the document.
   * 
   * @example
   * 346409
   */
  id?: number;
  /**
   * @remarks
   * Report status.
   * 
   * @example
   * uploaded
   */
  reportStatus?: string;
  /**
   * @remarks
   * Report generation time.
   * 
   * @example
   * 2023-03-21 17:26:34
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      deliveredBy: 'DeliveredBy',
      documentName: 'DocumentName',
      documentType: 'DocumentType',
      id: 'Id',
      reportStatus: 'ReportStatus',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveredBy: 'string',
      documentName: 'string',
      documentType: 'string',
      id: 'number',
      reportStatus: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page in the returned data.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of queried items.
   * 
   * @example
   * 3149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * API response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: GetDocumentPageResponseBodyData[];
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
   * Prompt message for the result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: GetDocumentPageResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 04DAD7B4-E1DA-5C2C-8E5C-A1EDC880CF60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. - **true**: The call was successful. - **false**: The call failed.
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
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetDocumentPageResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: GetDocumentPageResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

