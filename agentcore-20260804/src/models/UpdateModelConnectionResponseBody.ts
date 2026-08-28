// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelConnectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of API keys configured in the model connection.
   * 
   * @example
   * 1
   */
  apiKeyCount?: number;
  /**
   * @remarks
   * The model connection ID.
   * 
   * @example
   * mc-1
   */
  connectionId?: string;
  /**
   * @remarks
   * The time when the resource was created, in RFC 3339 UTC format.
   * 
   * @example
   * 2026-08-09T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether access credentials have been configured for the model connection.
   */
  credentialConfigured?: boolean;
  /**
   * @remarks
   * The description of the model connection. The description can be up to 255 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The absolute HTTP or HTTPS address of the upstream model service. The address can be up to 1024 characters in length.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The model connection name. The name must be 1 to 128 non-whitespace characters in length.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The model invocation protocol. Currently, only OpenAI/v1 is supported. If not specified in Settings when the model connection is created, this default value is used.
   * 
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @remarks
   * The model provider type.
   * 
   * @example
   * qwen
   */
  providerType?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The failure summary returned when the model connection fails to be published or fails to be deleted but remains in the Deleting state. This value is empty for other states.
   * 
   * @example
   * GatewayOperationException
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the resource was last updated, in RFC 3339 UTC format.
   * 
   * @example
   * 2026-08-09T00:00:00Z
   */
  updatedAt?: string;
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
      apiKeyCount: 'apiKeyCount',
      connectionId: 'connectionId',
      createdAt: 'createdAt',
      credentialConfigured: 'credentialConfigured',
      description: 'description',
      endpoint: 'endpoint',
      name: 'name',
      protocol: 'protocol',
      providerType: 'providerType',
      status: 'status',
      statusReason: 'statusReason',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyCount: 'number',
      connectionId: 'string',
      createdAt: 'string',
      credentialConfigured: 'boolean',
      description: 'string',
      endpoint: 'string',
      name: 'string',
      protocol: 'string',
      providerType: 'string',
      status: 'string',
      statusReason: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelConnectionResponseBody extends $dara.Model {
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
   * The updated model connection information.
   */
  data?: UpdateModelConnectionResponseBodyData;
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
   * request-1
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
      data: UpdateModelConnectionResponseBodyData,
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

