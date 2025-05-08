// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * [{xxxxxx}]
   */
  imageData?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'ImageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

