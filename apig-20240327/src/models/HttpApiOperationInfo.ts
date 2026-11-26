// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiRequestContract } from "./HttpApiRequestContract";
import { HttpApiResponseContract } from "./HttpApiResponseContract";
import { HttpApiSystemParameters } from "./HttpApiSystemParameters";


export class HttpApiOperationInfo extends $dara.Model {
  /**
   * @remarks
   * The permission authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The API operation backend service deployment information.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Retrieve user information
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether authentication is enabled.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The API operation method.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The API operation mock parameter settings.
   */
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * The API operation name.
   * 
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @remarks
   * The API operation ID.
   * 
   * @example
   * op-xxx
   */
  operationId?: string;
  /**
   * @remarks
   * The API operation path.
   * 
   * @example
   * /user/123
   */
  path?: string;
  /**
   * @remarks
   * The API operation request parameter definition.
   */
  request?: HttpApiRequestContract;
  /**
   * @remarks
   * The API operation response parameter definition.
   */
  response?: HttpApiResponseContract;
  /**
   * @remarks
   * The publish status of the API operation on the gateway.
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * Maps the system parameters of the current API operation to backend request headers or query parameters. Each source can be configured only once across the two locations.
   */
  systemParameters?: HttpApiSystemParameters;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      createTimestamp: 'createTimestamp',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enableAuth: 'enableAuth',
      method: 'method',
      mock: 'mock',
      name: 'name',
      operationId: 'operationId',
      path: 'path',
      request: 'request',
      response: 'response',
      status: 'status',
      systemParameters: 'systemParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: AuthConfig,
      createTimestamp: 'number',
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enableAuth: 'boolean',
      method: 'string',
      mock: HttpApiMockContract,
      name: 'string',
      operationId: 'string',
      path: 'string',
      request: HttpApiRequestContract,
      response: HttpApiResponseContract,
      status: 'string',
      systemParameters: HttpApiSystemParameters,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(this.mock && typeof (this.mock as any).validate === 'function') {
      (this.mock as any).validate();
    }
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    if(this.systemParameters && typeof (this.systemParameters as any).validate === 'function') {
      (this.systemParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

