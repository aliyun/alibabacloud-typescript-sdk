// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhysicalConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * pc-bp1ciz7ekd2grn1as****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A6A5EC5-6F6C-4906-9689-56ACE58A13E0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalConnectionId: 'PhysicalConnectionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionId: 'string',
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

