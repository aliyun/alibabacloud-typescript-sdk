// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnablePolarClawPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the plugin to enable.
   * 
   * This parameter is required.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * Indicates whether to restart the gateway after the plugin is enabled. Default value: `true`.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      pluginId: 'PluginId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      pluginId: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

