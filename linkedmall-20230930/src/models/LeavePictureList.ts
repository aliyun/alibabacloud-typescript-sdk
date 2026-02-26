// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LeavePictureList extends $dara.Model {
  desc?: string;
  /**
   * @example
   * https://
   */
  picture?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      picture: 'picture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      picture: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

