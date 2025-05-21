// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateHttpApiRouteRequestBackendConfig } from "./UpdateHttpApiRouteRequestBackendConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpRouteMatch } from "./HttpRouteMatch";


export class UpdateHttpApiRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The backend service configurations of the route.
   */
  backendConfig?: UpdateHttpApiRouteRequestBackendConfig;
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The route description.
   * 
   * @example
   * test route
   */
  description?: string;
  /**
   * @remarks
   * The domain IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cquqsollhtgid***
   */
  environmentId?: string;
  /**
   * @remarks
   * The rules for matching the route.
   */
  match?: HttpRouteMatch;
  static names(): { [key: string]: string } {
    return {
      backendConfig: 'backendConfig',
      deployConfigs: 'deployConfigs',
      description: 'description',
      domainIds: 'domainIds',
      environmentId: 'environmentId',
      match: 'match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendConfig: UpdateHttpApiRouteRequestBackendConfig,
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      match: HttpRouteMatch,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

