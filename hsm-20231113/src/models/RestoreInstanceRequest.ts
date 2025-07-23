// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image that you want to use to restore the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * image-eaOGHkRDQgh4****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-mp90fxef****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

