// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCancelOrderV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2023-08-10 17:45:32
   */
  cancelTime?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

