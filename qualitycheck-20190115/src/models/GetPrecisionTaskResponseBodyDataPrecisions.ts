// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPrecisionTaskResponseBodyDataPrecisionsPrecision } from "./GetPrecisionTaskResponseBodyDataPrecisionsPrecision";


export class GetPrecisionTaskResponseBodyDataPrecisions extends $dara.Model {
  precision?: GetPrecisionTaskResponseBodyDataPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': GetPrecisionTaskResponseBodyDataPrecisionsPrecision },
    };
  }

  validate() {
    if(Array.isArray(this.precision)) {
      $dara.Model.validateArray(this.precision);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

