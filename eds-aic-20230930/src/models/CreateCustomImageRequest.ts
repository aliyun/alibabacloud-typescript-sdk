// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomImageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. By default, this parameter is left empty. The token cannot exceed 64 characters in length.
   * 
   * @example
   * 20393E53-8FF1-524C-B494-B478A5369733
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the custom image.
   * 
   * @example
   * create for cc5g group auth rules test
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * custom image name
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the cloud phone instance.
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

