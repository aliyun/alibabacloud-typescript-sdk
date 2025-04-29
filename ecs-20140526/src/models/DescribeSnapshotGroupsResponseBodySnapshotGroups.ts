// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroup } from "./DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroup";


export class DescribeSnapshotGroupsResponseBodySnapshotGroups extends $dara.Model {
  snapshotGroup?: DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroup[];
  static names(): { [key: string]: string } {
    return {
      snapshotGroup: 'SnapshotGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotGroup: { 'type': 'array', 'itemType': DescribeSnapshotGroupsResponseBodySnapshotGroupsSnapshotGroup },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotGroup)) {
      $dara.Model.validateArray(this.snapshotGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

