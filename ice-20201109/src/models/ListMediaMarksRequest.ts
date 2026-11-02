// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaMarksRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 411bed50018971edb60b0764a0ec6***
   */
  mediaId?: string;
  /**
   * @remarks
   * **[Deprecated]** The mark IDs. You can specify multiple IDs separated by commas.
   * 
   * @example
   * mark-f82d*****4994b0915948ef7e16,mark-3d56d*****4c8fa9ae2a1f9e5d2d60
   */
  mediaMarkIds?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaMarkIds: 'MediaMarkIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaMarkIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

