// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeChannelQrCodeDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform.
   * 
   * This parameter is required.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The channel code. It must be the same as the channel code used when initiating the QR code configuration channel, such as dingtalk-connector (DingTalk), feishu (Lark), or wecom (WeCom).
   * 
   * This parameter is required.
   * 
   * @example
   * dingtalk-connector
   */
  code?: string;
  /**
   * @remarks
   * The ID of the runtime, such as the ID of a cloud desktop.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-sdfdsx
   */
  runtimeId?: string;
  /**
   * @remarks
   * The runtime environment type of the runtime resource.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudDesktop
   */
  runtimeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      code: 'Code',
      runtimeId: 'RuntimeId',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      code: 'string',
      runtimeId: 'string',
      runtimeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

