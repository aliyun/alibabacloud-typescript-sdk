// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeltaGetLastCursorRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the root file of the synced folder.
   * 
   * @example
   * 622fb09598ae66777c7040109a16f49381f6abe1
   */
  syncRootId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      syncRootId: 'sync_root_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      syncRootId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

