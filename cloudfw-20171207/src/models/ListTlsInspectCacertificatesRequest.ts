// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTlsInspectCACertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * C3E91391-16CD-1BFC-A133-******D429
   */
  caCertId?: string;
  /**
   * @remarks
   * The page number for a paged query. The default value is 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page for a paged query. The default value is 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      caCertId: 'CaCertId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

