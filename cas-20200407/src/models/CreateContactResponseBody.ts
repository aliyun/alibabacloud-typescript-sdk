// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 1352570
   */
  contactId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71CE8C5B-3737-52A9-97D0-2A9746059A45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
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

