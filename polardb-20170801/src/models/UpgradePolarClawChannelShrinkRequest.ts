// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawChannelShrinkRequest extends $dara.Model {
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
  channelConfigShrink?: string;
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
      channelConfigShrink: 'ChannelConfig',
      channelId: 'ChannelId',
      npmPackage: 'NpmPackage',
      pluginId: 'PluginId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelConfigShrink: 'string',
      channelId: 'string',
      npmPackage: 'string',
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

