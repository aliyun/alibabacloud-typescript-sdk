// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Car } from "./Car";


export class DetectImageCarsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The vehicles.
   * 
   * This parameter is required.
   */
  cars?: Car[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8745209-DD0E-027E-8ABA-085E0C******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cars: 'Cars',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cars: { 'type': 'array', 'itemType': Car },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cars)) {
      $dara.Model.validateArray(this.cars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

