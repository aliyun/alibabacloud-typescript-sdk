// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance } from "./DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance";


export class DescribeDisksResponseBodyDisksDiskMountInstances extends $dara.Model {
  mountInstance?: DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance[];
  static names(): { [key: string]: string } {
    return {
      mountInstance: 'MountInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountInstance: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDisksDiskMountInstancesMountInstance },
    };
  }

  validate() {
    if(Array.isArray(this.mountInstance)) {
      $dara.Model.validateArray(this.mountInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

