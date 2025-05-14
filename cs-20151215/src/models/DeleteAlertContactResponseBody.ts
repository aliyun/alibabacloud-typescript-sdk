// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAlertContactResponseBodyResult } from "./DeleteAlertContactResponseBodyResult";


export class DeleteAlertContactResponseBody extends $dara.Model {
  result?: DeleteAlertContactResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DeleteAlertContactResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

