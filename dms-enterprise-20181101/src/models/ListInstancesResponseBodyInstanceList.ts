// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyInstanceListInstance } from "./ListInstancesResponseBodyInstanceListInstance";


export class ListInstancesResponseBodyInstanceList extends $dara.Model {
  instance?: ListInstancesResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceListInstance },
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

