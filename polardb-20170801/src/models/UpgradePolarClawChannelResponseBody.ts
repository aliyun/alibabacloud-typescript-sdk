// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawChannelResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * feishu
   */
  channelId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * @larksuite/openclaw-lark@2026.4.7
   */
  npmPackage?: string;
  /**
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @example
   * openclaw-lark
   */
  pluginId?: string;
  /**
   * @example
   * true
   */
  pluginUpgraded?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  /**
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

