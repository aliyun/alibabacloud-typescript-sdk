// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID. Only a single ID is supported.
   * 
   * Only custom images are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * m-5taesrgwpo9zqj9cjqu792****
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

