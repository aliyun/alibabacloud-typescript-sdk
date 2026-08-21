// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentAuthorizationPrincipal } from "./AgentAuthorizationPrincipal";


/**
 */
export class AgentAccessConfigAuthorization extends $dara.Model {
  /**
   * @remarks
   * The authentication type of the Agent access entry. Specify this parameter only when enabled is set to true.
   * 
   * @example
   * Apikey
   */
  authType?: string;
  /**
   * @remarks
   * Specifies whether to enable consumer authorization. If set to true, authType must be specified and at least one principal must be provided. If set to false, no principals can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of consumers or consumer groups that are granted Agent access permissions. At least one principal must be specified when enabled is set to true.
   */
  principals?: AgentAuthorizationPrincipal[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      enabled: 'enabled',
      principals: 'principals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      enabled: 'boolean',
      principals: { 'type': 'array', 'itemType': AgentAuthorizationPrincipal },
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentAccessConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable AI request logging. Default value if omitted: true.
   * 
   * @example
   * false
   */
  aiRequestLogEnabled?: boolean;
  /**
   * @remarks
   * The consumer authorization configuration for Agent access. If omitted, consumer authorization is not enabled.
   */
  authorization?: AgentAccessConfigAuthorization;
  /**
   * @remarks
   * The base path of the Agent access entry. The path must start with a forward slash (/).
   * 
   * This parameter is required.
   * 
   * @example
   * /agent
   */
  basePath?: string;
  /**
   * @remarks
   * The list of domain name IDs bound to the Agent access entry. At least one domain name must be specified.
   * 
   * This parameter is required.
   */
  domainIds?: string[];
  /**
   * @remarks
   * Specifies whether to remove the base path when forwarding requests to the backend. Default value if omitted: false.
   * 
   * @example
   * true
   */
  removeBasePathOnForward?: boolean;
  static names(): { [key: string]: string } {
    return {
      aiRequestLogEnabled: 'aiRequestLogEnabled',
      authorization: 'authorization',
      basePath: 'basePath',
      domainIds: 'domainIds',
      removeBasePathOnForward: 'removeBasePathOnForward',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRequestLogEnabled: 'boolean',
      authorization: AgentAccessConfigAuthorization,
      basePath: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      removeBasePathOnForward: 'boolean',
    };
  }

  validate() {
    if(this.authorization && typeof (this.authorization as any).validate === 'function') {
      (this.authorization as any).validate();
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

