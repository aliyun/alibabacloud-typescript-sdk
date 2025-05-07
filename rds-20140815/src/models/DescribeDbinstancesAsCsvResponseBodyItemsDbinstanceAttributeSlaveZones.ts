// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesAsCsvResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
  slaveRegion?: string[];
  static names(): { [key: string]: string } {
    return {
      slaveRegion: 'slaveRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveRegion: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.slaveRegion)) {
      $dara.Model.validateArray(this.slaveRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

