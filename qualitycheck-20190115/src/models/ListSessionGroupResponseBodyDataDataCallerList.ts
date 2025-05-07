// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionGroupResponseBodyDataDataCallerList extends $dara.Model {
  callerList?: string[];
  static names(): { [key: string]: string } {
    return {
      callerList: 'CallerList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.callerList)) {
      $dara.Model.validateArray(this.callerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

