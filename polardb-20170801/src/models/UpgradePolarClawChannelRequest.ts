// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * feishu
   */
  channelId?: string;
  /**
   * @example
   * @larksuite/openclaw-feishu@2026.4.7
   */
  npmPackage?: string;
  /**
   * @example
   * openclaw-feishu
   */
  pluginId?: string;
  /**
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

