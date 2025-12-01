// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentPageRequest extends $dara.Model {
  /**
   * @remarks
   * Current page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * Document name.
   * 
   * @example
   * month report
   */
  documentName?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * 0
   */
  documentType?: string;
  /**
   * @remarks
   * Page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Report type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      deliveredBy: 'DeliveredBy',
      documentName: 'DocumentName',
      documentType: 'DocumentType',
      pageSize: 'PageSize',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deliveredBy: 'string',
      documentName: 'string',
      documentType: 'string',
      pageSize: 'number',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

