// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTlsInspectCACertificatesRequest extends $dara.Model {
  /**
   * @example
   * C3E91391-16CD-1BFC-A133-******D429
   */
  caCertId?: string;
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

