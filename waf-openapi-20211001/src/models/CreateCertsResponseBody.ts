// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 123456-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5BBA38B1-07AE-559F-8766-AB50****C300
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
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

