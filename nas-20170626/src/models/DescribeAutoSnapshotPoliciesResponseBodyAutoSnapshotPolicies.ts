// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy } from "./DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy";


export class DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPolicies extends $dara.Model {
  autoSnapshotPolicy?: DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy[];
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicy: 'AutoSnapshotPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicy: { 'type': 'array', 'itemType': DescribeAutoSnapshotPoliciesResponseBodyAutoSnapshotPoliciesAutoSnapshotPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.autoSnapshotPolicy)) {
      $dara.Model.validateArray(this.autoSnapshotPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

