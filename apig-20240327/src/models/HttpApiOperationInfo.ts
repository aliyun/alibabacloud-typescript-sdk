// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiRequestContract } from "./HttpApiRequestContract";
import { HttpApiResponseContract } from "./HttpApiResponseContract";


export class HttpApiOperationInfo extends $dara.Model {
  /**
   * @remarks
   * The authentication configurations of the operation.
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
   * The backend service deployment information of the operation.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The operation description.
   * 
   * @example
   * A example operation.
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
   * The HTTP method of the operation.
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
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The mocked parameters of the operation.
   */
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * The operation name.
   * 
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @remarks
   * The operation ID.
   * 
   * @example
   * op-xxx
   */
  operationId?: string;
  /**
   * @remarks
   * The operation path.
   * 
   * @example
   * /user/123
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
  /**
   * @remarks
   * The operation publishing status on the instance.
   * 
   * @example
   * Deployed
   */
  status?: string;
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

