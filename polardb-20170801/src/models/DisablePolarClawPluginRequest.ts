// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisablePolarClawPluginRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the plugin to disable.
   * 
   * This parameter is required.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway. Default value: true.
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

