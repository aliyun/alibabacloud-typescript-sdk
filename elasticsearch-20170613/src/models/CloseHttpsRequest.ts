// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseHttpsRequest extends $dara.Model {
  /**
   * @remarks
   * A unique token used to ensure idempotence of the request. The client generates this value. The value must be unique across different requests and can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B350****
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

