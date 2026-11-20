// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRuntimeQrCodeConfigChannelMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform type.
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
   * The third-party channel code, such as dingtalk-connector (DingTalk), feishu (Lark), or wecom (WeCom). If the current agent platform and provider do not support the channel, the error code ChannelConfig.NotSupported is returned, and no messages are sent.
   * 
   * This parameter is required.
   * 
   * @example
   * feishu
   */
  code?: string;
  /**
   * @remarks
   * The list of runtime resource IDs, such as cloud desktop IDs. You can specify 1 to 200 IDs.
   * 
   * This parameter is required.
   */
  runtimeIds?: string[];
  /**
   * @remarks
   * The runtime environment type of the runtime resource. Currently, only CloudDesktop is supported.
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
      runtimeIds: 'RuntimeIds',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      code: 'string',
      runtimeIds: { 'type': 'array', 'itemType': 'string' },
      runtimeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runtimeIds)) {
      $dara.Model.validateArray(this.runtimeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

