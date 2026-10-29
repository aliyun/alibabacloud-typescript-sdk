// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomImageRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter. The default value is empty and the length cannot exceed 100 characters. Multiple calls with the same ClientToken perform only one creation operation.
   * 
   * @example
   * 20393E53-8FF1-524C-B494-B478A5369733
   */
  clientToken?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * create for cc5g group auth rules test
   */
  description?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * custom image name
   */
  imageName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * acp-2zecay9ponatdc4m****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      imageName: 'string',
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

