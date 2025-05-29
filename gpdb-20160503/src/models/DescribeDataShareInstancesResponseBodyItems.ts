// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataShareInstancesResponseBodyItemsDBInstance } from "./DescribeDataShareInstancesResponseBodyItemsDbinstance";


export class DescribeDataShareInstancesResponseBodyItems extends $dara.Model {
  DBInstance?: DescribeDataShareInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDataShareInstancesResponseBodyItemsDBInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstance)) {
      $dara.Model.validateArray(this.DBInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

