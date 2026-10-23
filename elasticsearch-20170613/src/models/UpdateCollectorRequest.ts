// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCollectorRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. The client generates the token, which must be unique across different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The collector configuration to update, represented as a JSON string.
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

