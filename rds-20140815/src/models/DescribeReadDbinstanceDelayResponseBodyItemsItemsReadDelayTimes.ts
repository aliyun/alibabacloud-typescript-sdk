// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes extends $dara.Model {
  readDelayTime?: string[];
  static names(): { [key: string]: string } {
    return {
      readDelayTime: 'ReadDelayTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readDelayTime: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readDelayTime)) {
      $dara.Model.validateArray(this.readDelayTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

