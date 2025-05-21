// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiRequestContract } from "./HttpApiRequestContract";
import { HttpApiResponseContract } from "./HttpApiResponseContract";


export class HttpApiOperation extends $dara.Model {
  authConfig?: AuthConfig;
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @example
   * 获取用户信息
   */
  description?: string;
  enableAuth?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GET
   */
  method?: string;
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /user
   */
  path?: string;
  request?: HttpApiRequestContract;
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

