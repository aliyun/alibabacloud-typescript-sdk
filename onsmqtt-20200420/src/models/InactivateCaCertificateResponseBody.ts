// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InactivateCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. This ID is unique for each request. You can use it to troubleshoot and locate issues.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number (SN) of the unregistered CA certificate. The SN uniquely identifies a CA certificate.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

