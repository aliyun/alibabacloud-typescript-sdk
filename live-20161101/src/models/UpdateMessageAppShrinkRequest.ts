// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application configuration.
   */
  appConfigShrink?: string;
  /**
   * @remarks
   * Interactive message application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * VKL3***
   */
  appId?: string;
  /**
   * @remarks
   * Interactive message application name.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * Extension field.
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

