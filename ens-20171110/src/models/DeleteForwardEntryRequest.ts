// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNAT entry that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * fwd-5tfk8qgepr9ijjkqxt8do****
   */
  forwardEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

