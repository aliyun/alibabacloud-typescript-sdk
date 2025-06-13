// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImages2LibResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100001
   */
  imgId?: string;
  static names(): { [key: string]: string } {
    return {
      imgId: 'ImgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

