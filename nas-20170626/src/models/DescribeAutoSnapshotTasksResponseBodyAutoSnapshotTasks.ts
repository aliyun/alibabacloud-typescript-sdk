// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask } from "./DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask";


export class DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasks extends $dara.Model {
  autoSnapshotTask?: DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotTask: 'AutoSnapshotTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotTask: { 'type': 'array', 'itemType': DescribeAutoSnapshotTasksResponseBodyAutoSnapshotTasksAutoSnapshotTask },
    };
  }

  validate() {
    if(Array.isArray(this.autoSnapshotTask)) {
      $dara.Model.validateArray(this.autoSnapshotTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

