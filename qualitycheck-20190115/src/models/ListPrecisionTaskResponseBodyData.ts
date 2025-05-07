// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrecisionTaskResponseBodyDataPrecisionTask } from "./ListPrecisionTaskResponseBodyDataPrecisionTask";


export class ListPrecisionTaskResponseBodyData extends $dara.Model {
  precisionTask?: ListPrecisionTaskResponseBodyDataPrecisionTask[];
  static names(): { [key: string]: string } {
    return {
      precisionTask: 'PrecisionTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      precisionTask: { 'type': 'array', 'itemType': ListPrecisionTaskResponseBodyDataPrecisionTask },
    };
  }

  validate() {
    if(Array.isArray(this.precisionTask)) {
      $dara.Model.validateArray(this.precisionTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

