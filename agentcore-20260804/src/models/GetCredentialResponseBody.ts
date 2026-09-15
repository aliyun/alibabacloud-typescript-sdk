// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialResponseBodyDataBoundAgents extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
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

export class GetCredentialResponseBodyDataResourceRefs extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the resource.
   * 
   * @example
   * agent-xxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name. This value is empty if the resource has been deleted.
   * 
   * @example
   * my-agent
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type, such as agent.
   * 
   * @example
   * agent
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
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
  /**
   * @remarks
   * The list of agents bound to the credential.
   */
  boundAgents?: GetCredentialResponseBodyDataBoundAgents[];
  /**
   * @remarks
   * The creation time in UTC, formatted according to RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The credential ID.
   * 
   * @example
   * cred-123456
   */
  credentialId?: string;
  /**
   * @remarks
   * The masked content of the credential. When credentialType is apiKey, the value of apiKey is returned as asterisks (*) of equal length.
   * 
   * @example
   * {"apiKey":"****************"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The credential type. Currently, only apiKey is supported.
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @remarks
   * The credential description, up to 256 characters in length.
   * 
   * @example
   * API Key used to call model services in the production environment
   */
  description?: string;
  /**
   * @remarks
   * The credential name. The name must be unique within the workspace and can contain only letters, digits, periods (.), underscores (_), and hyphens (-). The name must be 3 to 128 characters in length and cannot use runtime reserved names.
   * 
   * @example
   * model-api-key
   */
  name?: string;
  /**
   * @remarks
   * The region ID where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Each item contains resourceType, resourceId, and resourceName. If the resource has been deleted, resourceName is empty.
   */
  resourceRefs?: GetCredentialResponseBodyDataResourceRefs[];
  /**
   * @remarks
   * The scope of resources to which the credential applies.
   * 
   * @example
   * ALL
   */
  resourceScope?: string;
  /**
   * @remarks
   * The time of the last modification in UTC, formatted according to RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
      resourceRefs: 'resourceRefs',
      resourceScope: 'resourceScope',
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
      resourceRefs: { 'type': 'array', 'itemType': GetCredentialResponseBodyDataResourceRefs },
      resourceScope: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boundAgents)) {
      $dara.Model.validateArray(this.boundAgents);
    }
    if(Array.isArray(this.resourceRefs)) {
      $dara.Model.validateArray(this.resourceRefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The credential details.
   */
  data?: GetCredentialResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message. An error description is returned if the request fails.
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
   * request-123456
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

