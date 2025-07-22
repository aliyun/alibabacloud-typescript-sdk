// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteForwardEntryRequest extends $dara.Model {
  forwardEntryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  forwardTableId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
      forwardTableId: 'ForwardTableId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
      forwardTableId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

