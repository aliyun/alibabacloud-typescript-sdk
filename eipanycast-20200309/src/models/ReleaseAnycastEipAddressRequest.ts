// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseAnycastEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP to be released.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

