// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentIMChannelRequestBodyChannelConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display the thinking process in IM messages. Default value: false.
   */
  showThinking?: boolean;
  /**
   * @remarks
   * Specifies whether to display the tool calling process in IM messages. Default value: false.
   */
  showToolCalls?: boolean;
  static names(): { [key: string]: string } {
    return {
      showThinking: 'showThinking',
      showToolCalls: 'showToolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showThinking: 'boolean',
      showToolCalls: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentIMChannelRequestBody extends $dara.Model {
  /**
   * @remarks
   * The channel behavior configuration.
   */
  channelConfig?: CreateAgentIMChannelRequestBodyChannelConfig;
  /**
   * @remarks
   * The IM channel type. Valid values:
   * 
   * - DINGTALK: DingTalk.
   * - FEISHU: Lark.
   * - WECOM: WeCom.
   * 
   * This parameter is required.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The channel credentials. All fields must be provided and field values must be non-empty strings. DingTalk uses clientID and clientSecret. Lark uses appId and appSecret. WeCom uses botId and secret.
   * 
   * This parameter is required.
   */
  credential?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to enable the IM channel. Default value: true.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the ServiceEndpoint to bind. The endpoint must belong to the specified agent and its current version, be in the ready state, and have a public network address.
   * 
   * This parameter is required.
   * 
   * @example
   * se-1
   */
  serviceEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      channelConfig: 'channelConfig',
      channelType: 'channelType',
      credential: 'credential',
      enabled: 'enabled',
      serviceEndpointId: 'serviceEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelConfig: CreateAgentIMChannelRequestBodyChannelConfig,
      channelType: 'string',
      credential: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      enabled: 'boolean',
      serviceEndpointId: 'string',
    };
  }

  validate() {
    if(this.channelConfig && typeof (this.channelConfig as any).validate === 'function') {
      (this.channelConfig as any).validate();
    }
    if(this.credential) {
      $dara.Model.validateMap(this.credential);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentIMChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateAgentIMChannelRequestBody;
  /**
   * @remarks
   * A reserved idempotency token. The backend does not provide persistent idempotency guarantees in the current phase.
   * 
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAgentIMChannelRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

