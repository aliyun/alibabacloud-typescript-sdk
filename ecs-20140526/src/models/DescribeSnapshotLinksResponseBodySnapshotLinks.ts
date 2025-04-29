// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink } from "./DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink";


export class DescribeSnapshotLinksResponseBodySnapshotLinks extends $dara.Model {
  snapshotLink?: DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink[];
  static names(): { [key: string]: string } {
    return {
      snapshotLink: 'SnapshotLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotLink: { 'type': 'array', 'itemType': DescribeSnapshotLinksResponseBodySnapshotLinksSnapshotLink },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotLink)) {
      $dara.Model.validateArray(this.snapshotLink);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

