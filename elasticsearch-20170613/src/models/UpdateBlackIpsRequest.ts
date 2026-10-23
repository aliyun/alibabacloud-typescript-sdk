// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBlackIpsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Use different values for different requests.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF***
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

