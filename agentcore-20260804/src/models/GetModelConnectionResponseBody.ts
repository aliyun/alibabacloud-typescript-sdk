// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelConnectionResponseBodyData extends $dara.Model {
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
   * The list of API keys used to access the upstream model service. The list contains at least one non-empty value.
   */
  apiKeys?: string[];
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
   * The time when the resource was created. The time is in RFC 3339 UTC format.
   * 
   * @example
   * 2026-08-09T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether access credentials are configured for the model connection.
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
   * The absolute HTTP or HTTPS URL of the upstream model service. The URL can be up to 1,024 characters in length.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the model connection. The name must be 1 to 128 non-whitespace characters in length.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The protocol used to invoke the model. Currently, only OpenAI/v1 is supported. If no Settings are specified during model creation, this default value is used.
   * 
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @remarks
   * The type of the model provider.
   * 
   * @example
   * qwen
   */
  providerType?: string;
  /**
   * @remarks
   * The ID of the region to which the resource belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The failure summary returned when the model connection fails to be published, or when deletion fails but the resource remains in the deleting state. This field is empty in other states.
   * 
   * @example
   * GatewayOperationException
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the resource was last updated. The time is in RFC 3339 UTC format.
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
      apiKeys: 'apiKeys',
      connectionId: 'connectionId',
      createdAt: 'createdAt',
      credentialConfigured: 'credentialConfigured',
      description: 'description',
      endpoint: 'endpoint',
      name: 'name',
      protocol: 'protocol',
      providerType: 'providerType',
      regionId: 'regionId',
      status: 'status',
      statusReason: 'statusReason',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyCount: 'number',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      connectionId: 'string',
      createdAt: 'string',
      credentialConfigured: 'boolean',
      description: 'string',
      endpoint: 'string',
      name: 'string',
      protocol: 'string',
      providerType: 'string',
      regionId: 'string',
      status: 'string',
      statusReason: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value is SUCCESS when the request is successful.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The detailed information about the model connection.
   */
  data?: GetModelConnectionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value is 200 when the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message about the request processing result.
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
   * Indicates whether the request is successful.
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
      data: GetModelConnectionResponseBodyData,
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

