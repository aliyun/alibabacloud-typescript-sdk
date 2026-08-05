// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application configuration.
   */
  appConfig?: { [key: string]: string };
  /**
   * @remarks
   * The name of the interactive message application. The length must be 2 to 16 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The extension field.
   */
  extension?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      appName: 'AppName',
      extension: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

