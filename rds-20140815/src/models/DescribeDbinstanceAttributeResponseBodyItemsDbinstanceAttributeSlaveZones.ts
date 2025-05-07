// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeSlaveZonesSlaveZone";


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
  slaveZone?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone[];
  static names(): { [key: string]: string } {
    return {
      slaveZone: 'SlaveZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveZone: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone },
    };
  }

  validate() {
    if(Array.isArray(this.slaveZone)) {
      $dara.Model.validateArray(this.slaveZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

