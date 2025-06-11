// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource extends $dara.Model {
  /**
   * @remarks
   * The information about the storage resources of the node.
   */
  diskSize?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize,
    };
  }

  validate() {
    if(this.diskSize && typeof (this.diskSize as any).validate === 'function') {
      (this.diskSize as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

