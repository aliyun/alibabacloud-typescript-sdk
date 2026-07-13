// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAtiRegistrantRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request.
   * 
   * Generate a parameter value from your client to ensure that the value is unique among different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the verified registrant.
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

