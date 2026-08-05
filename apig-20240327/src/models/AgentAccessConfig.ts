// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentAuthorizationPrincipal } from "./AgentAuthorizationPrincipal";


/**
 */
export class AgentAccessConfigAuthorization extends $dara.Model {
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enabled?: boolean;
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
  aiRequestLogEnabled?: boolean;
  authorization?: AgentAccessConfigAuthorization;
  /**
   * @remarks
   * This parameter is required.
   */
  basePath?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainIds?: string[];
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

