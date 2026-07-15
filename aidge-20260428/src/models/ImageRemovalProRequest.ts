// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemovalProRequest extends $dara.Model {
  /**
   * @remarks
   * The call type. Valid values:
   * - true: asynchronous.
   * - false: synchronous.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The URL of the image to process.
   * 
   * This parameter is required.
   * 
   * @example
   * https://cbu01.alicdn.com/imgextra/i2/1067106875/O1CN013rvpXP20enxPQttb3_!!4611686018427380283-0-item_pic.jpg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

