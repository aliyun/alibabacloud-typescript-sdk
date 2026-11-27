// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ioeh****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application. Only a single name is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * defaultName
   */
  appName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

