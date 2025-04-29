// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage } from "./DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage";


export class DescribeSnapshotPackageResponseBodySnapshotPackages extends $dara.Model {
  snapshotPackage?: DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage[];
  static names(): { [key: string]: string } {
    return {
      snapshotPackage: 'SnapshotPackage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotPackage: { 'type': 'array', 'itemType': DescribeSnapshotPackageResponseBodySnapshotPackagesSnapshotPackage },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotPackage)) {
      $dara.Model.validateArray(this.snapshotPackage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

