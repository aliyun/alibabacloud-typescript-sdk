// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * *   Default value: **app-1000000**.
   * *   For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * *   The name can contain up to 128 characters in length, including Chinese letters, digits, and periods (.), dash (-), and at character (@).
   * *   The name can contain only UTF-8 characters.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * *   The description can contain up to 512 characters in length.
   * *   The description can contain only UTF-8 characters.
   * 
   * @example
   * my first app.
   */
  description?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   **Normal**
   * *   **Disable**
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

