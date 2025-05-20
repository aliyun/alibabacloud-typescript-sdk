// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeltaRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor of the incremental information.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  cursor?: string;
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
   * The maximum number of results to return. Valid values: 0 to 100. Default value: 100.
   * 
   * The number of returned results must be less than or equal to the specified number.
   * 
   * @example
   * 50
   */
  limit?: number;
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
      cursor: 'cursor',
      driveId: 'drive_id',
      limit: 'limit',
      syncRootId: 'sync_root_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      driveId: 'string',
      limit: 'number',
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

