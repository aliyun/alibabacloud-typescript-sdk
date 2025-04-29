// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackendModelRequest extends $dara.Model {
  /**
   * @example
   * 34e94fcd3e2e47a49824a89b8f92cb5e
   */
  backendId?: string;
  /**
   * @example
   * {\\"ServiceAddress\\":\\"http://apigateway-echo-redux.alicloudapi.com:8080\\"}
   */
  backendModelData?: string;
  /**
   * @example
   * HTTP
   */
  backendType?: string;
  /**
   * @example
   * model description
   */
  description?: string;
  securityToken?: string;
  /**
   * @example
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      backendModelData: 'BackendModelData',
      backendType: 'BackendType',
      description: 'Description',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      backendModelData: 'string',
      backendType: 'string',
      description: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

