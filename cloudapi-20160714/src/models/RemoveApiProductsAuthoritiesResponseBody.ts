// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApiProductsAuthoritiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEB6EC62-B6C7-5082-A45A-45A204724AC2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

