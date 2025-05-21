// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiRequestContract } from "./HttpApiRequestContract";
import { HttpApiResponseContract } from "./HttpApiResponseContract";


export class HttpApiOperationInfo extends $dara.Model {
  authConfig?: AuthConfig;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @example
   * 获取用户信息
   */
  description?: string;
  /**
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @example
   * GET
   */
  method?: string;
  mock?: HttpApiMockContract;
  /**
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @example
   * op-xxx
   */
  operationId?: string;
  /**
   * @example
   * /user/123
   */
  path?: string;
  request?: HttpApiRequestContract;
  response?: HttpApiResponseContract;
  /**
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

