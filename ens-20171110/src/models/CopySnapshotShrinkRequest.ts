// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopySnapshotShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of destination nodes.
   * 
   * This parameter is required.
   */
  destinationRegionIdsShrink?: string;
  /**
   * @remarks
   * The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  destinationSnapshotDescription?: string;
  /**
   * @remarks
   * The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testSnapshotName
   */
  destinationSnapshotName?: string;
  /**
   * @remarks
   * The ID of the source snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp1c0doj0taqyzzl****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationRegionIdsShrink: 'DestinationRegionIds',
      destinationSnapshotDescription: 'DestinationSnapshotDescription',
      destinationSnapshotName: 'DestinationSnapshotName',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationRegionIdsShrink: 'string',
      destinationSnapshotDescription: 'string',
      destinationSnapshotName: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

