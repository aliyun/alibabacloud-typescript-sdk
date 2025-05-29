// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateHttpApiRouteRequestBackendConfig } from "./CreateHttpApiRouteRequestBackendConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpRouteMatch } from "./HttpRouteMatch";
import { CreateHttpApiRouteRequestMcpRouteConfig } from "./CreateHttpApiRouteRequestMcpRouteConfig";


export class CreateHttpApiRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service configurations of the route.
   */
  backendConfig?: CreateHttpApiRouteRequestBackendConfig;
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * User logon route
   */
  description?: string;
  /**
   * @remarks
   * The domain name IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubcv***
   */
  environmentId?: string;
  /**
   * @remarks
   * The rule for matching the route.
   */
  match?: HttpRouteMatch;
  mcpRouteConfig?: CreateHttpApiRouteRequestMcpRouteConfig;
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * login
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      deployConfigs: 'deployConfigs',
      description: 'description',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      match: 'match',
      mcpRouteConfig: 'mcpRouteConfig',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: CreateHttpApiRouteRequestBackendConfig,
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      match: HttpRouteMatch,
      mcpRouteConfig: CreateHttpApiRouteRequestMcpRouteConfig,
      name: 'string',
    };
  }

  validate() {
    if(this.backendConfig && typeof (this.backendConfig as any).validate === 'function') {
      (this.backendConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    if(this.mcpRouteConfig && typeof (this.mcpRouteConfig as any).validate === 'function') {
      (this.mcpRouteConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

