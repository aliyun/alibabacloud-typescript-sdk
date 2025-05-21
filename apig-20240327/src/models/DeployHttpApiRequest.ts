// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployHttpApiRequestHttpApiConfig } from "./DeployHttpApiRequestHttpApiConfig";
import { DeployHttpApiRequestRestApiConfig } from "./DeployHttpApiRequestRestApiConfig";


export class DeployHttpApiRequest extends $dara.Model {
  httpApiConfig?: DeployHttpApiRequestHttpApiConfig;
  /**
   * @remarks
   * Rest API deployment configuration. Required when deploying an HTTP API as a Rest API.
   */
  restApiConfig?: DeployHttpApiRequestRestApiConfig;
  /**
   * @remarks
   * Route ID. This must be provided when publishing the route of an HTTP API.
   * 
   * @example
   * hr-cr82undlhtgrl***
   */
  routeId?: string;
  static names(): { [key: string]: string } {
    return {
      httpApiConfig: 'httpApiConfig',
      restApiConfig: 'restApiConfig',
      routeId: 'routeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpApiConfig: DeployHttpApiRequestHttpApiConfig,
      restApiConfig: DeployHttpApiRequestRestApiConfig,
      routeId: 'string',
    };
  }

  validate() {
    if(this.httpApiConfig && typeof (this.httpApiConfig as any).validate === 'function') {
      (this.httpApiConfig as any).validate();
    }
    if(this.restApiConfig && typeof (this.restApiConfig as any).validate === 'function') {
      (this.restApiConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

