// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the application.
   */
  appConfig?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * The name of the interactive messaging application.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The extended field.
   */
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      appId: 'AppId',
      appName: 'AppName',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      appId: 'string',
      appName: 'string',
      extension: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.appConfig) {
      $dara.Model.validateMap(this.appConfig);
    }
    if(this.extension) {
      $dara.Model.validateMap(this.extension);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

