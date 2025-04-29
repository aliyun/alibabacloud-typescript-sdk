// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDisk } from "./DescribeDisksResponseBodyDisksDisk";


export class DescribeDisksResponseBodyDisks extends $dara.Model {
  disk?: DescribeDisksResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDisk },
    };
  }

  validate() {
    if(Array.isArray(this.disk)) {
      $dara.Model.validateArray(this.disk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

