// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarClawChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * **The application ID.**
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the deleted channel.
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
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * The ID of the uninstalled plugin.
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * Indicates whether the channel plugin was uninstalled.
   * 
   * @example
   * true
   */
  pluginUninstalled?: boolean;
  /**
   * @remarks
   * **The request ID.**
   * 
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
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
      ok: 'Ok',
      pluginId: 'PluginId',
      pluginUninstalled: 'PluginUninstalled',
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
      ok: 'boolean',
      pluginId: 'string',
      pluginUninstalled: 'boolean',
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

