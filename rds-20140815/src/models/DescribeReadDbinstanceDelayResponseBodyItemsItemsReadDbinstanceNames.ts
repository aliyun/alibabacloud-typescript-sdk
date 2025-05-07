// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames extends $dara.Model {
  readDBInstanceName?: string[];
  static names(): { [key: string]: string } {
    return {
      readDBInstanceName: 'ReadDBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readDBInstanceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readDBInstanceName)) {
      $dara.Model.validateArray(this.readDBInstanceName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

