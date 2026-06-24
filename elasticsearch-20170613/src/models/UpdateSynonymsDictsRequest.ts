// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSynonymsDictsRequest extends $dara.Model {
  body?: string;
  /**
   * @remarks
   * A unique token used to ensure idempotence of the request. The client generates this value. The value must be unique across different requests and cannot exceed 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
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

