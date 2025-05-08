// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGsResponseBodySDGsAvaliableRegionIds extends $dara.Model {
  /**
   * @remarks
   * The time when the SDG was created on the node.
   * 
   * @example
   * 2023-02-27 15:13:26
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-hangzhou-26
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * mock-clone_snapshot_id
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the SDG on the node. Valid values:
   * 
   * *   **sdg_making**
   * *   **sdg_saving**
   * *   **sdg_copying**
   * *   **failed**
   * *   **success**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      regionId: 'string',
      snapshotId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

