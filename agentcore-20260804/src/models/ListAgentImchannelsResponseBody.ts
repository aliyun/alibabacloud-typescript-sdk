// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentIMChannelsResponseBodyItemsChannelConfig extends $dara.Model {
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

export class ListAgentIMChannelsResponseBodyItemsCredentialSummary extends $dara.Model {
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

export class ListAgentIMChannelsResponseBodyItems extends $dara.Model {
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
  channelConfig?: ListAgentIMChannelsResponseBodyItemsChannelConfig;
  /**
   * @remarks
   * The IM channel type. Valid values:
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
  credentialSummary?: ListAgentIMChannelsResponseBodyItemsCredentialSummary;
  /**
   * @remarks
   * Indicates whether the IM channel is enabled. Default value upon creation: true.
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
   * The ID of the bound ServiceEndpoint. The endpoint must belong to the specified agent and its current version, be in the ready state, and have a public network address.
   * 
   * @example
   * se-1
   */
  serviceEndpointId?: string;
  /**
   * @remarks
   * The IM channel status. Valid values:
   * - CREATING: being created.
   * - READY: ready.
   * - UPDATING: being updated.
   * - FAILED: failed.
   * - DELETING: being deleted.
   * - DELETE_FAILED: deletion failed.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The reason for the current status of the IM channel.
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
      channelConfig: ListAgentIMChannelsResponseBodyItemsChannelConfig,
      channelType: 'string',
      createTime: 'string',
      credentialSummary: ListAgentIMChannelsResponseBodyItemsCredentialSummary,
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

export class ListAgentIMChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of SUCCESS indicates success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The IM channel list.
   */
  items?: ListAgentIMChannelsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries returned per page for this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that the last page has been reached.
   * 
   * @example
   * next-token-1
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The total number of records that match the query conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListAgentIMChannelsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

