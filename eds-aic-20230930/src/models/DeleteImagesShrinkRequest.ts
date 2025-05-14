// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImagesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images.
   * 
   * This parameter is required.
   */
  imageIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageIdsShrink: 'ImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

