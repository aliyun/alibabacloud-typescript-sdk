// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBroadcastStickerRequest extends $dara.Model {
  /**
   * @example
   * sticker.png
   */
  fileName?: string;
  /**
   * @example
   * material/INPUT_BROADCAST_STICKER/Mt.CPRLVQRR27YU2
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      ossKey: 'ossKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      ossKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

