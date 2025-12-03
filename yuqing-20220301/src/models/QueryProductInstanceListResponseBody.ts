// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProductInstance } from "./ProductInstance";


export class QueryProductInstanceListResponseBody extends $dara.Model {
  instanceList?: ProductInstance[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'instanceList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': ProductInstance },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

