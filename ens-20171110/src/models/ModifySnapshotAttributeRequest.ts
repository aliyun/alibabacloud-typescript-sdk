// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnapshotAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the snapshot. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-bp199lyny9bb47pa****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * The name cannot start with **auto** because snapshots whose names start with auto are recognized as automatic snapshots.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

