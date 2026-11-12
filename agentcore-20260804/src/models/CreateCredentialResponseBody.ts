// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialResponseBodyDataResourceRefs extends $dara.Model {
  /**
   * @remarks
   * The ID of the applicable MCP service.
   * 
   * @example
   * mcp-example
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name. This field is empty if the resource is deleted.
   * 
   * @example
   * my-mcp-service
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type. Currently, only mcpServer is supported, which indicates an MCP service.
   * 
   * @example
   * mcpServer
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

export class CreateCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time in RFC 3339 UTC format.
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
   * The masked result of the credential content. For the apiKey type, a masked key is returned. For the mcpHeader type, only header names are returned, and values are not returned.
   * 
   * @example
   * {"apiKey":"****************"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The credential type. Valid values: apiKey (API key) and mcpHeader (MCP request header).
   * 
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @remarks
   * The credential description. It can be up to 256 characters in length.
   * 
   * @example
   * API key used to call the model service in the production environment
   */
  description?: string;
  /**
   * @remarks
   * The credential name. It must be unique within the workspace, contain only letters, digits, periods, underscores, and hyphens, and be 3 to 99 characters in length. Runtime reserved names cannot be used.
   * 
   * @example
   * model-api-key
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of MCP services to which the credential applies.
   */
  resourceRefs?: CreateCredentialResponseBodyDataResourceRefs[];
  /**
   * @remarks
   * The applicable scope of the credential. ALL indicates all scopes, and SPECIFIED indicates the specified MCP services.
   * 
   * @example
   * ALL
   */
  resourceScope?: string;
  /**
   * @remarks
   * The last modification time in RFC 3339 UTC format.
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
      createdAt: 'string',
      credentialId: 'string',
      credentialMetadata: 'string',
      credentialType: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceRefs: { 'type': 'array', 'itemType': CreateCredentialResponseBodyDataResourceRefs },
      resourceScope: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceRefs)) {
      $dara.Model.validateArray(this.resourceRefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCredentialResponseBody extends $dara.Model {
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
   * The information about the created credential.
   */
  data?: CreateCredentialResponseBodyData;
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
      data: CreateCredentialResponseBodyData,
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

