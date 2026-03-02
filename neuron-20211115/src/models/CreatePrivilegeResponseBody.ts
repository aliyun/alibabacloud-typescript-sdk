// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Privilege } from "./Privilege";


export class CreatePrivilegeResponseBody extends $dara.Model {
  list?: Privilege[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': Privilege },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

