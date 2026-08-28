// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentIMChannelResponseBodyDataChannelConfig extends $dara.Model {
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

export class CreateAgentIMChannelResponseBodyDataCredentialSummary extends $dara.Model {
  /**
   * @remarks
   * The list of configured secret field names. Secret values are not included.
   */
  configuredSecretFields?: string[];
  /**
   * @remarks
   * The non-sensitive credential fields and their values.
   */
  nonSecretFields?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      configuredSecretFields: 'configuredSecretFields',
      nonSecretFields: 'nonSecretFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuredSecretFields: { 'type': 'array', 'itemType': 'string' },
      nonSecretFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.configuredSecretFields)) {
      $dara.Model.validateArray(this.configuredSecretFields);
    }
    if(this.nonSecretFields) {
      $dara.Model.validateMap(this.nonSecretFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentIMChannelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent-1
   */
  agentId?: string;
  /**
   * @remarks
   * The channel behavior configuration.
   */
  channelConfig?: CreateAgentIMChannelResponseBodyDataChannelConfig;
  /**
   * @remarks
   * The IM channel type. Valid values:
   * 
   * - DINGTALK: DingTalk.
   * - FEISHU: Lark.
   * - WECOM: WeCom.
   * 
   * @example
   * DINGTALK
   */
  channelType?: string;
  /**
   * @remarks
   * The creation time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The channel credential summary. Only non-sensitive fields and configured secret field names are returned. Secret values are not returned.
   */
  credentialSummary?: CreateAgentIMChannelResponseBodyDataCredentialSummary;
  /**
   * @remarks
   * Specifies whether to enable the IM channel. Default value: true.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The public network access URL of the attached ServiceEndpoint.
   * 
   * @example
   * https://agent.example.com
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The IM channel ID.
   * 
   * @example
   * imc-1
   */
  imChannelId?: string;
  /**
   * @remarks
   * The ID of the ServiceEndpoint to bind. The endpoint must belong to the specified agent and its current version, be in the ready state, and have a public network address.
   * 
   * @example
   * se-1
   */
  serviceEndpointId?: string;
  /**
   * @remarks
   * The IM channel status. Valid values:
   * 
   * - CREATING: Being created.
   * - READY: Ready.
   * - UPDATING: Being updated.
   * - FAILED: Failed.
   * - DELETING: Being deleted.
   * - DELETE_FAILED: Deletion failed.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the current IM channel status.
   * 
   * @example
   * AppFlow creation failed
   */
  statusReason?: string;
  /**
   * @remarks
   * The update time in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      channelConfig: 'channelConfig',
      channelType: 'channelType',
      createTime: 'createTime',
      credentialSummary: 'credentialSummary',
      enabled: 'enabled',
      endpointUrl: 'endpointUrl',
      imChannelId: 'imChannelId',
      serviceEndpointId: 'serviceEndpointId',
      status: 'status',
      statusReason: 'statusReason',
      updateTime: 'updateTime',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      channelConfig: CreateAgentIMChannelResponseBodyDataChannelConfig,
      channelType: 'string',
      createTime: 'string',
      credentialSummary: CreateAgentIMChannelResponseBodyDataCredentialSummary,
      enabled: 'boolean',
      endpointUrl: 'string',
      imChannelId: 'string',
      serviceEndpointId: 'string',
      status: 'string',
      statusReason: 'string',
      updateTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.channelConfig && typeof (this.channelConfig as any).validate === 'function') {
      (this.channelConfig as any).validate();
    }
    if(this.credentialSummary && typeof (this.credentialSummary as any).validate === 'function') {
      (this.credentialSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentIMChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The IM channel information after creation.
   */
  data?: CreateAgentIMChannelResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request processing result message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAgentIMChannelResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

