// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignCertificateCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of assigned certificates.
   * 
   * @example
   * 2
   */
  certCount?: number;
  /**
   * @remarks
   * The number of free certificates for the current year.
   * 
   * @example
   * 0
   */
  currentYearFreeCertCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E77C4794-F24F-58CB-9929-F0F0C0EDE7B2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certCount: 'CertCount',
      currentYearFreeCertCount: 'CurrentYearFreeCertCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCount: 'number',
      currentYearFreeCertCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

