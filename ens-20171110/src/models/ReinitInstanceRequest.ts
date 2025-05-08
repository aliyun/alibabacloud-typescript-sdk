// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReinitInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image file that is used to reset the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * m-5wn1dhz5syoo9b48f440ntvad
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5vn4n3y4laeb2ii9zxxltlvzi
   * 
   * **if can be null:**
   * false
   */
  instanceId?: string;
  /**
   * @remarks
   * The password of the instance.
   * 
   * It must be 8 to 30 characters in length. It must include at least three of the following characters types: uppercase letters, lowercase letters, digits, and special characters. The following special character are supported: `()\\"~! @#$%^&*-_+={}[]:;\\"<>,.?/`
   * 
   * @example
   * ***
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

