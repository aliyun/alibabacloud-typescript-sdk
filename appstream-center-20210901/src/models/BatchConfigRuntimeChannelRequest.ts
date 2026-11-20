// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchConfigRuntimeChannelRequestChannelConfigs extends $dara.Model {
  /**
   * @remarks
   * The third-party channel code, such as dingtalk-connector (DingTalk), feishu (Lark), and wecom (WeCom). System channel codes are case-insensitive. Configuring wechat and jvsclaw is not supported. If these values are passed, the entire request fails and the error code ChannelConfig.NotSupported is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * dingtalk-connector
   */
  code?: string;
  /**
   * @remarks
   * The JSON string for channel configuration.
   * 
   * - Simple mode: only appKey and appSecret are allowed.
   * - Custom mode: all configuration items required for the channel under the current agent provider must be included.
   * 
   * If the string is not valid JSON, the error code InvalidParameter.ValueInvalid is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * {"appKey":"testKey","appSecret":"testSecret"}
   */
  config?: string;
  /**
   * @remarks
   * The configuration mode. Valid values:
   * 
   * - Simple: simple configuration mode.
   * - Custom: custom configuration mode.
   * 
   * This parameter is required.
   * 
   * @example
   * Simple
   */
  configMode?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * If this parameter is not specified, the system automatically uses the code as the name.
   * 
   * @example
   * DingTalk
   */
  name?: string;
  /**
   * @remarks
   * The agent runtime ID. The ID mappings are as follows:
   * 
   * - JVS Computer: the JVS Computer ID, in the format of jvs-xxxx.
   * - OpenClaw: the cloud desktop ID, in the format of ecd-xxxx.
   * - Hermes Agent: the Hermes Agent ID, in the format of jvs-xxxx.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-xgads
   */
  runtimeId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      config: 'Config',
      configMode: 'ConfigMode',
      name: 'Name',
      runtimeId: 'RuntimeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      config: 'string',
      configMode: 'string',
      name: 'string',
      runtimeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchConfigRuntimeChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform, such as ENTERPRISE. If the value is invalid, the error code InvalidParameter.AgentPlatform is returned.
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
   * - JVS Computer: Specify OpenClaw.
   * - OpenClaw: Specify OpenClaw.
   * - Hermes Agent: Specify HermesAgent.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The list of channel configurations. A maximum of 200 items are supported. Each configuration item specifies an agent runtime and the third-party channel to be configured for it. Different channel configurations can be delivered to different runtimes. Multiple configuration items for the same runtime are processed sequentially.
   * 
   * This parameter is required.
   */
  channelConfigs?: BatchConfigRuntimeChannelRequestChannelConfigs[];
  /**
   * @remarks
   * The agent runtime type, such as CloudDesktop (Cloud Desktop).
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
      channelConfigs: 'ChannelConfigs',
      runtimeType: 'RuntimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      channelConfigs: { 'type': 'array', 'itemType': BatchConfigRuntimeChannelRequestChannelConfigs },
      runtimeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelConfigs)) {
      $dara.Model.validateArray(this.channelConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

