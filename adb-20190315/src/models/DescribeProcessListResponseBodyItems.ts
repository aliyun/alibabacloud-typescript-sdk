// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessListResponseBodyItemsProcess } from "./DescribeProcessListResponseBodyItemsProcess";


export class DescribeProcessListResponseBodyItems extends $dara.Model {
  process?: DescribeProcessListResponseBodyItemsProcess[];
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: { 'type': 'array', 'itemType': DescribeProcessListResponseBodyItemsProcess },
    };
  }

  validate() {
    if(Array.isArray(this.process)) {
      $dara.Model.validateArray(this.process);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

