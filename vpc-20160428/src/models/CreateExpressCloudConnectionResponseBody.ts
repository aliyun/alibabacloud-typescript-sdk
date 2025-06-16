// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressCloudConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECC instance.
   * 
   * @example
   * ecc-jg************
   */
  eccId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C004F022-1CC2-4958-9937-675513A2CD7E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eccId: 'EccId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eccId: 'string',
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

