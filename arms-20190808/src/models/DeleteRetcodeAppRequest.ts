// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRetcodeAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1231
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The process identifier (PID) of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * aokcdqn3ly@741623b4e91****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      pid: 'Pid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      pid: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

