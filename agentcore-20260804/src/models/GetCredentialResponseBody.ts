// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialResponseBodyDataBoundAgents extends $dara.Model {
  /**
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @example
   * agent-01
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentName: 'agentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBodyData extends $dara.Model {
  boundAgents?: GetCredentialResponseBodyDataBoundAgents[];
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @example
   * cred-123456
   */
  credentialId?: string;
  /**
   * @example
   * {"apiKey":"****************"}
   */
  credentialMetadata?: string;
  /**
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @example
   * 线上环境调用模型服务使用的 API Key
   */
  description?: string;
  /**
   * @example
   * model-api-key
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      boundAgents: 'boundAgents',
      createdAt: 'createdAt',
      credentialId: 'credentialId',
      credentialMetadata: 'credentialMetadata',
      credentialType: 'credentialType',
      description: 'description',
      name: 'name',
      regionId: 'regionId',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundAgents: { 'type': 'array', 'itemType': GetCredentialResponseBodyDataBoundAgents },
      createdAt: 'string',
      credentialId: 'string',
      credentialMetadata: 'string',
      credentialType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boundAgents)) {
      $dara.Model.validateArray(this.boundAgents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetCredentialResponseBodyData;
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
   * request-123456
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
      data: GetCredentialResponseBodyData,
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

