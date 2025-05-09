// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPagedInstanceResponseBodyDataInstance } from "./GetPagedInstanceResponseBodyDataInstance";


export class GetPagedInstanceResponseBodyData extends $dara.Model {
  instance?: GetPagedInstanceResponseBodyDataInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': GetPagedInstanceResponseBodyDataInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

