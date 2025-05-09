// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddImageRequestContainerImageSpec } from "./AddImageRequestContainerImageSpec";
import { AddImageRequestVMImageSpec } from "./AddImageRequestVmimageSpec";


export class AddImageRequest extends $dara.Model {
  containerImageSpec?: AddImageRequestContainerImageSpec;
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
  VMImageSpec?: AddImageRequestVMImageSpec;
  static names(): { [key: string]: string } {
    return {
      containerImageSpec: 'ContainerImageSpec',
      description: 'Description',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      name: 'Name',
      VMImageSpec: 'VMImageSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpec: AddImageRequestContainerImageSpec,
      description: 'string',
      imageType: 'string',
      imageVersion: 'string',
      name: 'string',
      VMImageSpec: AddImageRequestVMImageSpec,
    };
  }

  validate() {
    if(this.containerImageSpec && typeof (this.containerImageSpec as any).validate === 'function') {
      (this.containerImageSpec as any).validate();
    }
    if(this.VMImageSpec && typeof (this.VMImageSpec as any).validate === 'function') {
      (this.VMImageSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

