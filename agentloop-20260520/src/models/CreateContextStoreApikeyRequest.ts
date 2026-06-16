// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextStoreAPIKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-api-key
   */
  name?: string;
  /**
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

