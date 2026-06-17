// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawChannelRequest extends $dara.Model {
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
   * The channel configuration object.
   * 
   * @example
   * {
   *     "enabled": true,
   *     "dmPolicy": "open",
   *     "allowFrom": [
   *         "*",
   *         "ou_abc"
   *     ]
   * }
   */
  channelConfig?: { [key: string]: any };
  /**
   * @remarks
   * The channel ID.
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
   * @example
   * @larksuite/openclaw-feishu@2026.4.7
   */
  npmPackage?: string;
  /**
   * @remarks
   * The ID of the channel plugin.
   * 
   * @example
   * openclaw-feishu
   */
  pluginId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the upgrade. The default value is `true`.
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

