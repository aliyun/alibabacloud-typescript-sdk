// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can obtain the value from the AppId parameter returned by the [Create an application](https://help.aliyun.com/document_detail/113266.html) or [List applications](https://help.aliyun.com/document_detail/114000.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The new name of the application.
   * - The name can be up to 128 characters in length and can contain only Chinese characters, uppercase and lowercase letters, digits, periods (.), hyphens (-), and at signs (@).
   * - The name must be encoded in UTF-8.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The new description of the application.
   * - The description can be up to 512 characters in length.
   * - The description must be encoded in UTF-8.
   * 
   * @example
   * my first app.
   */
  description?: string;
  /**
   * @remarks
   * The new status of the application. Valid values:
   * - **Normal**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Disable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      description: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

