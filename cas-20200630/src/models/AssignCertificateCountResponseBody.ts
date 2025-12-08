// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignCertificateCountResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  certCount?: number;
  /**
   * @example
   * 0
   */
  currentYearFreeCertCount?: number;
  /**
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

