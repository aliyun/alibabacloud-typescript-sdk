// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarClawChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * feishu
   */
  channelId?: string;
  /**
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @example
   * true
   */
  uninstallPlugin?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelId: 'ChannelId',
      pluginId: 'PluginId',
      restart: 'Restart',
      uninstallPlugin: 'UninstallPlugin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelId: 'string',
      pluginId: 'string',
      restart: 'boolean',
      uninstallPlugin: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

