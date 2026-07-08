// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPCACertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the certificate.
   * 
   * @example
   * 1ed65580-7e33-6a50-8630-dd13fdc009ee
   */
  identifier?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
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

