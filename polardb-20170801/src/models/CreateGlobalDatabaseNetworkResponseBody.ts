// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDatabaseNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GDN.
   * 
   * @example
   * gd-m5ex5wqfqbou*****
   */
  GDNId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C61892A4-0850-4516-9E26-44D96C1782DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      GDNId: 'GDNId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNId: 'string',
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

