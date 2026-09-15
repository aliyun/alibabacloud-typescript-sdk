// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialRequestBodyResourceRefs extends $dara.Model {
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

export class UpdateCredentialRequestBody extends $dara.Model {
  /**
   * @remarks
   * The new credential content. The value is a JSON string. If credentialType is set to apiKey, only the apiKey field can be included, and the value cannot be empty. At least one of credentialMetadata and description must be specified.
   * 
   * @example
   * {"apiKey":"sk-example-value"}
   */
  credentialMetadata?: string;
  /**
   * @remarks
   * The new credential description. The description can be up to 256 characters in length. At least one of description and credentialMetadata must be specified.
   * 
   * @example
   * API Key used for calling model services in the production environment
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required and must be a non-empty array when resourceScope is set to SPECIFIED. Each item contains resourceType and resourceId. resourceName is optional.
   */
  resourceRefs?: UpdateCredentialRequestBodyResourceRefs[];
  /**
   * @remarks
   * ALL indicates all resources. SPECIFIED indicates that the credential applies only to the resources specified in resourceRefs.
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

