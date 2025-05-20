// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutonomousNotifyEventsInRangeResponseBodyDataList extends $dara.Model {
  t?: string[];
  static names(): { [key: string]: string } {
    return {
      t: 'T',
    };
  }

  static types(): { [key: string]: any } {
    return {
      t: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.t)) {
      $dara.Model.validateArray(this.t);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

