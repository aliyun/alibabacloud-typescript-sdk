// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { HttpApiMockContract } from "./HttpApiMockContract";
import { HttpApiRequestContract } from "./HttpApiRequestContract";
import { HttpApiResponseContract } from "./HttpApiResponseContract";
import { HttpApiSystemParameters } from "./HttpApiSystemParameters";


export class HttpApiOperation extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The deployment configurations.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The API description.
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
   * The method.
   * 
   * This parameter is required.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The API mock configuration. This configuration takes effect only when the API publishing scenario is Mock.
   */
  mock?: HttpApiMockContract;
  /**
   * @remarks
   * The API name.
   * 
   * This parameter is required.
   * 
   * @example
   * GetUserInfo
   */
  name?: string;
  /**
   * @remarks
   * The API path.
   * 
   * This parameter is required.
   * 
   * @example
   * /user
   */
  path?: string;
  /**
   * @remarks
   * The request parameter definition.
   */
  request?: HttpApiRequestContract;
  /**
   * @remarks
   * The response parameter definition.
   */
  response?: HttpApiResponseContract;
  /**
   * @remarks
   * The system parameter configuration. This is supported only for operations of standard REST APIs. If you omit this parameter or set it to null during creation, no configuration is applied. If you omit this parameter or set it to null during an update, the original configuration is retained. To clear the configuration, explicitly pass an object without mappings, such as {}. Saving only modifies the draft, and the changes take effect after publishing.
   */
  systemParameters?: HttpApiSystemParameters;
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
      systemParameters: 'systemParameters',
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

