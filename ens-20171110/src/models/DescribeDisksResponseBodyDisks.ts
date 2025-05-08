// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDisks } from "./DescribeDisksResponseBodyDisksDisks";


export class DescribeDisksResponseBodyDisks extends $dara.Model {
  disks?: DescribeDisksResponseBodyDisksDisks[];
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDisks },
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

