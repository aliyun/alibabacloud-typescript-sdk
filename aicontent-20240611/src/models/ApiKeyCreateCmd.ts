// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiKeyCreateCmd extends $dara.Model {
  /**
   * @remarks
   * The customer ID. A value of null indicates the default customer.
   * 
   * @example
   * 1
   */
  clientId?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

