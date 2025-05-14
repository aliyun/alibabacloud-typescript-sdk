// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * defaultAppName
   */
  appName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * default description.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the icon.
   * 
   * @example
   * https://defaultIcon.png
   */
  iconUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
      iconUrl: 'IconUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
      iconUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

