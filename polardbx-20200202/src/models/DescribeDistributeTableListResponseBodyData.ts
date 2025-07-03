// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDistributeTableListResponseBodyDataTables } from "./DescribeDistributeTableListResponseBodyDataTables";


export class DescribeDistributeTableListResponseBodyData extends $dara.Model {
  tables?: DescribeDistributeTableListResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': DescribeDistributeTableListResponseBodyDataTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

