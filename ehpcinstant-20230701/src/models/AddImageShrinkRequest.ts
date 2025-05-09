// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageShrinkRequest extends $dara.Model {
  containerImageSpecShrink?: string;
  description?: string;
  imageType?: string;
  /**
   * @example
   * V1.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app-image
   */
  name?: string;
  VMImageSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      containerImageSpecShrink: 'ContainerImageSpec',
      description: 'Description',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      name: 'Name',
      VMImageSpecShrink: 'VMImageSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpecShrink: 'string',
      description: 'string',
      imageType: 'string',
      imageVersion: 'string',
      name: 'string',
      VMImageSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

