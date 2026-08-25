// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelConnectionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  apiKeyCount?: number;
  apiKeys?: string[];
  /**
   * @example
   * mc-1
   */
  connectionId?: string;
  /**
   * @example
   * 2026-08-09T00:00:00Z
   */
  createdAt?: string;
  credentialConfigured?: boolean;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * OpenAI/v1
   */
  protocol?: string;
  /**
   * @example
   * qwen
   */
  providerType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * GatewayOperationException
   */
  statusReason?: string;
  /**
   * @example
   * 2026-08-09T00:00:00Z
   */
  updatedAt?: string;
  /**
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetModelConnectionResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * request-1
   */
  requestId?: string;
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

