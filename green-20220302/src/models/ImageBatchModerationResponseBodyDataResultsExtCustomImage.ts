// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationResponseBodyDataResultsExtCustomImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the hit custom image.
   * 
   * @example
   * 1965304870002
   */
  imageId?: string;
  /**
   * @remarks
   * Custom library ID
   * 
   * @example
   * 1965304870002
   */
  libId?: string;
  /**
   * @remarks
   * The name of the hit custom gallery.
   * 
   * @example
   * Whitelist
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

