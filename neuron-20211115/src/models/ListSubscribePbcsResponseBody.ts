// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Pbc } from "./Pbc";


export class ListSubscribePbcsResponseBody extends $dara.Model {
  requestId?: string;
  result?: Pbc[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': Pbc },
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

