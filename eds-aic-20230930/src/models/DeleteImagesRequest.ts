// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images.
   * 
   * This parameter is required.
   */
  imageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageIds)) {
      $dara.Model.validateArray(this.imageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

