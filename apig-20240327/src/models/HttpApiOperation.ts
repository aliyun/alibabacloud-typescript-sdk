// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiRequestContract } from "./HttpApiRequestContract";
import { HttpApiResponseContract } from "./HttpApiResponseContract";


export class HttpApiOperation extends $dara.Model {
  /**
   * @remarks
   * The authentication configurations.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The deployment configurations.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The operation description.
   * 
   * @example
   * This is a operation description.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The HTTP method.
   * 
   * Valid values:
   * 
   * *   TRACE
   * *   HEAD
   * *   DELETE
   * *   POST
   * *   GET
   * *   CONNECT
   * *   OPTIONS
   * *   PUT
   * *   PATCH
   * 
   * This parameter is required.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The mocking configuration of the operation. This field takes effect only when the API publishing scenario is Mock.
   */
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * The operation name.
   * 
   * This parameter is required.
   * 
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @remarks
   * The operation path.
   * 
   * This parameter is required.
   * 
   * @example
   * /user
   */
  path?: string;
  /**
   * @remarks
   * The request parameters of the operation.
   */
  request?: HttpApiRequestContract;
  /**
   * @remarks
   * The response parameters of the operation.
   */
  response?: HttpApiResponseContract;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      deployConfigs: 'deployConfigs',
      description: 'description',
      enableAuth: 'enableAuth',
      method: 'method',
      mock: 'mock',
      name: 'name',
      path: 'path',
      request: 'request',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: AuthConfig,
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      description: 'string',
      enableAuth: 'boolean',
      method: 'string',
      mock: HttpApiMockContract,
      name: 'string',
      path: 'string',
      request: HttpApiRequestContract,
      response: HttpApiResponseContract,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

