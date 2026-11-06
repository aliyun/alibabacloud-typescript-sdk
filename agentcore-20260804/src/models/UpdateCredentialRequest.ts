// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialRequestBodyResourceRefs extends $dara.Model {
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
   * The resource name. This field is empty if the resource has been deleted.
   * 
   * @example
   * my-mcp-service
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type. Currently, the value is mcpServer, which indicates an MCP service.
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

export class UpdateCredentialRequestBody extends $dara.Model {
  /**
   * @remarks
   * The credential content, submitted as a JSON string. For the apiKey type, it contains only a non-empty apiKey. For the mcpHeader type, it contains a non-empty headers array, where each item includes a name and a value.
   * 
   * @example
   * {"apiKey":"sk-example-value"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The new credential description. The description can be up to 256 characters in length. If omitted, the original description is retained. It can be updated independently of the credential content or application scope.
   * 
   * @example
   * API key used to call the model service in the production environment
   */
  description?: string;
  /**
   * @remarks
   * The list of applicable resources for the MCP header credential. If submitted, resourceScope must also be submitted. An empty array [] is allowed when the scope is SPECIFIED. Omit this field when the scope is ALL.
   */
  resourceRefs?: UpdateCredentialRequestBodyResourceRefs[];
  /**
   * @remarks
   * The application scope of the MCP header credential. This field is supported only for the mcpHeader type. ALL indicates all MCP services, and SPECIFIED indicates the MCP services specified in resourceRefs. Do not submit this field for the apiKey type.
   * 
   * @example
   * ALL
   */
  resourceScope?: string;
  static names(): { [key: string]: string } {
    return {
      credentialMetadata: 'credentialMetadata',
      description: 'description',
      resourceRefs: 'resourceRefs',
      resourceScope: 'resourceScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialMetadata: 'string',
      description: 'string',
      resourceRefs: { 'type': 'array', 'itemType': UpdateCredentialRequestBodyResourceRefs },
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

export class UpdateCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating the credential.
   */
  body?: UpdateCredentialRequestBody;
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
      body: UpdateCredentialRequestBody,
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

