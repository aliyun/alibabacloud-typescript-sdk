// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCapacityReservationResponseBody extends $dara.Model {
  /**
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0F******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

