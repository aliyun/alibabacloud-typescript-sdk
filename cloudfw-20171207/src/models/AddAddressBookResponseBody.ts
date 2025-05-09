// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAddressBookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UUID of the returned address book.
   * 
   * @example
   * f04ac7ce-628b-4cb7-be61-310222b7****
   */
  groupUuid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupUuid: 'GroupUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupUuid: 'string',
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

