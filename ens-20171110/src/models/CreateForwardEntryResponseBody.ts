// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * @example
   * fwd-5tc07cw14metghn3siv4ak8do
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF6D6FA4-DACA-5822-A981-81006271D263
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

