// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentIMChannelRequestBodyChannelConfig extends $dara.Model {
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

export class UpdateAgentIMChannelRequestBody extends $dara.Model {
  /**
   * @remarks
   * The channel behavior configuration. When provided, the entire configuration is replaced. An empty object restores default values.
   */
  channelConfig?: UpdateAgentIMChannelRequestBodyChannelConfig;
  /**
   * @remarks
   * Specifies whether to enable the IM channel. Default value: true (when created).
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the bound ServiceEndpoint. The endpoint must belong to the specified agent and its current version, be in the ready state, and have a public endpoint address.
   * 
   * @example
   * se-1
   */
  serviceEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      channelConfig: 'channelConfig',
      enabled: 'enabled',
      serviceEndpointId: 'serviceEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelConfig: UpdateAgentIMChannelRequestBodyChannelConfig,
      enabled: 'boolean',
      serviceEndpointId: 'string',
    };
  }

  validate() {
    if(this.channelConfig && typeof (this.channelConfig as any).validate === 'function') {
      (this.channelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentIMChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateAgentIMChannelRequestBody;
  /**
   * @remarks
   * The reserved idempotency token. The backend does not provide persistent idempotency guarantees in this phase.
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
      body: UpdateAgentIMChannelRequestBody,
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

