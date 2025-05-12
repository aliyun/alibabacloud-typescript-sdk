// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * 3EB7FCEE-D731-4948-85A3-4B2C341CA983
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-2ze81owrnv9pity4****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

