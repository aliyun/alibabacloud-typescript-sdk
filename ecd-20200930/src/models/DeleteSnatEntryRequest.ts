// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  snatEntryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  snatTableId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snatEntryId: 'SnatEntryId',
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snatEntryId: 'string',
      snatTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

