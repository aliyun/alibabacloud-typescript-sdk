// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. This is the value of the AppId parameter returned by the [CreateApp](https://help.aliyun.com/document_detail/113266.html) or [GetAppInfos](https://help.aliyun.com/document_detail/114000.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The new application name.
   * - The name can be up to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), hyphens (-), and at signs (@).
   * - UTF-8 encoding.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The new application description.
   * - The description can be up to 512 characters in length.
   * - UTF-8 encoding.
   * 
   * @example
   * my first app.
   */
  description?: string;
  /**
   * @remarks
   * The new application status. Valid values:
   * - **Normal**: Normal.
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

