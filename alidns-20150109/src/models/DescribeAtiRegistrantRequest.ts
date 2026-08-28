// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAtiRegistrantRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters and cannot exceed 64 characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the real-name verified registrant.
   * 
   * This parameter is required.
   * 
   * @example
   * 2072277378616354816
   */
  registrantId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      registrantId: 'RegistrantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      registrantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

