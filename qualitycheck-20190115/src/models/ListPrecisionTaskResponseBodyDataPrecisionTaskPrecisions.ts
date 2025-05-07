// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision } from "./ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision";


export class ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisions extends $dara.Model {
  precision?: ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision[];
  static names(): { [key: string]: string } {
    return {
      precision: 'Precision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precision: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTaskPrecisionsPrecision },
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

