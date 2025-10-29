// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackgroundPicRequest extends $dara.Model {
  /**
   * @example
   * 1.jpg
   */
  filename?: string;
  /**
   * @example
   * material/INPUT_CHAT_BACKGROUND_PIC/Mt.CN2VNOPRC5QU2
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'filename',
      ossKey: 'ossKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
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

