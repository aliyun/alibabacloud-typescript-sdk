// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePictureSearchAppRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](206608) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e429560124b44b685095df81a27****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The description of the image search application instance.
   * 
   * The description can contain Chinese characters, uppercase and lowercase letters, digits, underscores (_), and hyphens (-). It can be up to 1,024 characters in length, and each Chinese character counts as two characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 以图搜图Demo2
   */
  description?: string;
  /**
   * @remarks
   * The name of the image search application instance. 
   * 
   * The name can contain Chinese characters, uppercase and lowercase letters, digits, underscores (_), and hyphens (-). It can be up to 64 characters in length, and each Chinese character counts as two characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 新以图搜图
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

