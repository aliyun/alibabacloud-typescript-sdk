// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeSnapshotWorkloads extends $dara.Model {
  name?: string;
  workloadId?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      workloadId: 'WorkloadId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      workloadId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

