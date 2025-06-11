// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddExternalSAMLIdPCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAML signing certificate.
   * 
   * @example
   * idp-c-00wk2fb4foracls0****
   */
  certificateId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12B3E332-DD16-515B-B695-39BA233AA172
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
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

