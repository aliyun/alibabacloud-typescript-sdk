// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsResponseBodyAppsAppItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the app.
   * 
   * @example
   * 20112314518278
   */
  appId?: number;
  /**
   * @remarks
   * The name of the app.
   * 
   * @example
   * CreateApptest
   */
  appName?: string;
  /**
   * @remarks
   * The description of the app.
   * 
   * @example
   * App test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

