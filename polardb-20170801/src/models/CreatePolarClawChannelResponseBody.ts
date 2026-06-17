// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawChannelResponseBody extends $dara.Model {
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
   * The ID of the channel that was created.
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
   * The name of the installed npm package.
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
   * **The plugin ID.**
   * 
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @remarks
   * Indicates whether a new plugin was installed.
   * 
   * @example
   * true
   */
  pluginInstalled?: boolean;
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
      npmPackage: 'NpmPackage',
      ok: 'Ok',
      pluginId: 'PluginId',
      pluginInstalled: 'PluginInstalled',
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
      pluginInstalled: 'boolean',
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

