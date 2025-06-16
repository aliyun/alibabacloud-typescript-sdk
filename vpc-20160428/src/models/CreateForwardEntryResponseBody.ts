// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * @example
   * fwd-119smw5tkasdf****
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4AEE536-A97A-40EB-9EBE-53A6948A6928
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
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

