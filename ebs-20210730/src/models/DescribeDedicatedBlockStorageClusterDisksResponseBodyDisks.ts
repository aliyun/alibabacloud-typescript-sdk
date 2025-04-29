// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk } from "./DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk";


export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * Details about the cloud disks.
   */
  disk?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk },
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

