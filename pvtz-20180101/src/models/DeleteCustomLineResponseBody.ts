// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 520002
   */
  lineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A73F3BD0-B1A8-42A9-A9B6-689BBABC4891
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'string',
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

