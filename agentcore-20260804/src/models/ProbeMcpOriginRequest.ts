// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProbeMcpOriginRequestBodyAuthDirectProxy extends $dara.Model {
  /**
   * @remarks
   * The name of the backend authentication header.
   * 
   * @example
   * Authorization
   */
  name?: string;
  /**
   * @remarks
   * The value of the backend authentication header.
   * 
   * @example
   * example-api-key
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginRequestBodyAuthHttpToMcp extends $dara.Model {
  /**
   * @remarks
   * The credential for the backend authentication.
   * 
   * @example
   * example-api-key
   */
  credential?: string;
  /**
   * @remarks
   * The ID of the backend authentication configuration.
   * 
   * @example
   * api-key-auth
   */
  id?: string;
  /**
   * @remarks
   * The name of the API key parameter.
   * 
   * @example
   * X-API-Key
   */
  name?: string;
  /**
   * @remarks
   * The location where the API key is passed.
   * 
   * @example
   * header
   */
  position?: string;
  /**
   * @remarks
   * The type of the backend authentication.
   * 
   * @example
   * apiKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      credential: 'credential',
      id: 'id',
      name: 'name',
      position: 'position',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: 'string',
      id: 'string',
      name: 'string',
      position: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginRequestBodyAuth extends $dara.Model {
  /**
   * @remarks
   * The backend authentication configuration for the direct proxy.
   */
  directProxy?: ProbeMcpOriginRequestBodyAuthDirectProxy;
  /**
   * @remarks
   * Specifies whether to enable this configuration.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of backend authentication configurations for HTTP to MCP.
   */
  httpToMcp?: ProbeMcpOriginRequestBodyAuthHttpToMcp[];
  static names(): { [key: string]: string } {
    return {
      directProxy: 'directProxy',
      enabled: 'enabled',
      httpToMcp: 'httpToMcp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directProxy: ProbeMcpOriginRequestBodyAuthDirectProxy,
      enabled: 'boolean',
      httpToMcp: { 'type': 'array', 'itemType': ProbeMcpOriginRequestBodyAuthHttpToMcp },
    };
  }

  validate() {
    if(this.directProxy && typeof (this.directProxy as any).validate === 'function') {
      (this.directProxy as any).validate();
    }
    if(Array.isArray(this.httpToMcp)) {
      $dara.Model.validateArray(this.httpToMcp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginRequestBody extends $dara.Model {
  /**
   * @remarks
   * A single HTTP(S) URL that reuses the addresses of the origin server from the creation API. Embedded credentials, multiple addresses, or protected targets are not accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * https://mcp.example.com/mcp
   */
  address?: string;
  /**
   * @remarks
   * Reuses the enabled, directProxy, and httpToMcp origin server authentication fields and validations from the creation API. If enabled is set to true, you must provide a configuration that matches the access type. codePackage or additional headers are not accepted.
   */
  auth?: ProbeMcpOriginRequestBodyAuth;
  /**
   * @remarks
   * Used only for HTTP. Reuses the JSON or YAML string semantics from the creation API. This field is required when validating the definition. Remote documents or references are not automatically fetched.
   * 
   * @example
   * {"openapi":"3.0.3","info":{"title":"Inventory API","version":"1.0.0"},"paths":{"/inventory":{"get":{"operationId":"listInventory","responses":{"200":{"description":"OK"}}}}}}
   */
  swaggerConfig?: string;
  /**
   * @remarks
   * The access type. Valid values: DIRECT_PROXY and HTTP_TO_MCP. CODE_PACKAGE is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECT_PROXY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      auth: 'auth',
      swaggerConfig: 'swaggerConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      auth: ProbeMcpOriginRequestBodyAuth,
      swaggerConfig: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProbeMcpOriginRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of the origin server configuration does not exceed that of the creation API. The control fields for this validation only restrict the validation scope and do not extend the origin server onboarding configuration.
   * 
   * This parameter is required.
   */
  body?: ProbeMcpOriginRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ProbeMcpOriginRequestBody,
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

