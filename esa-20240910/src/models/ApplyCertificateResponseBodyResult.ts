// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyCertificateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Certificate domain.
   * 
   * @example
   * *.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Certificate ID.
   * 
   * @example
   * 30000478
   */
  id?: string;
  /**
   * @remarks
   * Status of the certificate application.
   * 
   * @example
   * Applying
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      id: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

