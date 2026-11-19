// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The container image configuration.
   */
  containerImageSpecShrink?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * Test image
   */
  description?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * - VM: virtual machine image
   * - Container: container image
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * V1.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * app-image
   */
  name?: string;
  /**
   * @remarks
   * The virtual machine image configuration.
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

