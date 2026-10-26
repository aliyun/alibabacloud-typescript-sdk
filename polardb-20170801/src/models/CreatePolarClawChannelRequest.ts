// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawChannelRequest extends $dara.Model {
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
   * The channel configuration.
   * 
   * @example
   * {
   *     "enabled": true,
   *     "dmPolicy": "open",
   *     "allowFrom": [
   *         "*"
   *     ]
   * }
   */
  channelConfig?: { [key: string]: any };
  /**
   * @remarks
   * The unique identifier of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * feishu
   */
  channelId?: string;
  /**
   * @remarks
   * The npm package name of the channel plugin, including the version number.
   * 
   * This parameter is required.
   * 
   * @example
   * @larksuite/openclaw-lark@2026.4.7
   */
  npmPackage?: string;
  /**
   * @remarks
   * The channel plugin name.
   * 
   * This parameter is required.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after creation. Default value: true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelConfig: 'ChannelConfig',
      channelId: 'ChannelId',
      npmPackage: 'NpmPackage',
      pluginId: 'PluginId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      channelId: 'string',
      npmPackage: 'string',
      pluginId: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    if(this.channelConfig) {
      $dara.Model.validateMap(this.channelConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

