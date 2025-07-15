// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the application.
   */
  appConfigShrink?: string;
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
  extensionShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appConfigShrink: 'AppConfig',
      appId: 'AppId',
      appName: 'AppName',
      extensionShrink: 'Extension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfigShrink: 'string',
      appId: 'string',
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

