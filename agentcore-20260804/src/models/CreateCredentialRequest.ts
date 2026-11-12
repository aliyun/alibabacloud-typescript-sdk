// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialRequestBodyResourceRefs extends $dara.Model {
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

export class CreateCredentialRequestBody extends $dara.Model {
  /**
   * @remarks
   * The credential content, submitted as a JSON string. For the apiKey type, it contains only a non-empty apiKey. For the mcpHeader type, it contains a non-empty headers array, where each item contains a name and a value.
   * 
   * This parameter is required.
   * 
   * @example
   * {"apiKey":"sk-example-value"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The credential type. Valid values: apiKey (API key) and mcpHeader (MCP request header).
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * model-api-key
   */
  name?: string;
  /**
   * @remarks
   * The list of applicable resources for the MCP header credential. This field must be non-empty when resourceScope is set to SPECIFIED, and must be omitted when resourceScope is set to ALL.
   */
  resourceRefs?: CreateCredentialRequestBodyResourceRefs[];
  /**
   * @remarks
   * The applicable scope of the MCP header credential. This field is supported only for the mcpHeader type. ALL indicates all MCP services, and SPECIFIED indicates the MCP services specified in resourceRefs. Do not submit this field for the apiKey type.
   * 
   * @example
   * ALL
   */
  resourceScope?: string;
  static names(): { [key: string]: string } {
    return {
      credentialMetadata: 'credentialMetadata',
      credentialType: 'credentialType',
      description: 'description',
      name: 'name',
      resourceRefs: 'resourceRefs',
      resourceScope: 'resourceScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialMetadata: 'string',
      credentialType: 'string',
      description: 'string',
      name: 'string',
      resourceRefs: { 'type': 'array', 'itemType': CreateCredentialRequestBodyResourceRefs },
      resourceScope: 'string',
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

export class CreateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating a credential.
   */
  body?: CreateCredentialRequestBody;
  /**
   * @remarks
   * Not supported.
   * 
   * @example
   * Not supported
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
      body: CreateCredentialRequestBody,
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

