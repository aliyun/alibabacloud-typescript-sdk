// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot IDs. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s-2ze81owrnv9pity4****
   */
  snapshotId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snapshotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotId)) {
      $dara.Model.validateArray(this.snapshotId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

