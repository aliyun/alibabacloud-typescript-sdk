// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationBaseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * c627c157-560d-43ff-****-************
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application. The name must start with a letter, and can contain letters, digits, underscores (_), and hyphens (-). The name can be up to 36 characters in length.
   * 
   * @example
   * hello-edas
   */
  appName?: string;
  /**
   * @remarks
   * The description of the application. The description can be up to 256 characters in length.
   * 
   * @example
   * Test application
   */
  desc?: string;
  /**
   * @remarks
   * The owner of the application. The value can be up to 127 characters in length.
   * 
   * @example
   * test@aliyun_xxx.com
   */
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      desc: 'Desc',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      desc: 'string',
      owner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

