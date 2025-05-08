// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
  /**
   * @remarks
   * The ID of the user to which the application belongs.
   * 
   * @example
   * 12345
   */
  userId?: string;
  /**
   * @remarks
   * The region where the application resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The microservice namespace where the application resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * example-app-name
   */
  appName?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 123456abcde@12345abcde
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      regionId: 'RegionId',
      namespace: 'Namespace',
      appName: 'AppName',
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      regionId: 'string',
      namespace: 'string',
      appName: 'string',
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

