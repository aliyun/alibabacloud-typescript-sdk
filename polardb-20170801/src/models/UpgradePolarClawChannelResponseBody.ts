// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the upgraded channel.
   * 
   * @example
   * feishu
   */
  channelId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The name of the upgraded npm package.
   * 
   * @example
   * @larksuite/openclaw-lark@2026.4.7
   */
  npmPackage?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * The ID of the upgraded plugin.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * Indicates whether the plugin was upgraded.
   * 
   * @example
   * true
   */
  pluginUpgraded?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the gateway was restarted.
   * 
   * @example
   * true
   */
  restarted?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelId: 'ChannelId',
      code: 'Code',
      message: 'Message',
      npmPackage: 'NpmPackage',
      ok: 'Ok',
      pluginId: 'PluginId',
      pluginUpgraded: 'PluginUpgraded',
      requestId: 'RequestId',
      restarted: 'Restarted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelId: 'string',
      code: 'number',
      message: 'string',
      npmPackage: 'string',
      ok: 'boolean',
      pluginId: 'string',
      pluginUpgraded: 'boolean',
      requestId: 'string',
      restarted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

