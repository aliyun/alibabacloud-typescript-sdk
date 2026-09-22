// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01ABBD93-1ABB-4D92-B496-1A3D20EC0697
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the snapshot-consistent group.
   * 
   * @example
   * ssg-j6ciyh3k52qp7ovm****
   */
  snapshotGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotGroupId: 'SnapshotGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

