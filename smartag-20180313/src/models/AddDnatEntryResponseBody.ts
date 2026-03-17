// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnatEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * @example
   * fwd-kxe4fq3xuzczze****
   */
  dnatEntryId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 56BF6C79-C77D-41A0-86DD-A4B156E784EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dnatEntryId: 'DnatEntryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnatEntryId: 'string',
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

