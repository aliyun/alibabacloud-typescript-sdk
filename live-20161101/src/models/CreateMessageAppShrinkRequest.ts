// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the application.
   */
  appConfigShrink?: string;
  /**
   * @remarks
   * The name of the interactive message application. The name must be 2 to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The extended fields.
   */
  extensionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appConfigShrink: 'AppConfig',
      appName: 'AppName',
      extensionShrink: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfigShrink: 'string',
      appName: 'string',
      extensionShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

