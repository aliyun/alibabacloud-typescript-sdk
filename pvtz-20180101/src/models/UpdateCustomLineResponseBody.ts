// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 765001
   */
  lineId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
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

