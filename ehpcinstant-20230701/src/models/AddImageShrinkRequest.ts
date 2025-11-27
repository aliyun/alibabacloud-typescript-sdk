// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the container image.
   */
  containerImageSpecShrink?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Test image
   */
  description?: string;
  /**
   * @remarks
   * The type of the images. Valid values:
   * 
   * *   VM: virtual machine image.
   * *   Container: the container image.
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * V1.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * The name of the custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * app-image
   */
  name?: string;
  /**
   * @remarks
   * The image configuration of the virtual machine.
   */
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

