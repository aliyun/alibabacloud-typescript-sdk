// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceConfig } from "./ServiceConfig";
import { ServiceInstanceLatestDeployment } from "./ServiceInstanceLatestDeployment";
import { Variable } from "./Variable";


export class ServiceInstance extends $dara.Model {
  config?: ServiceConfig;
  latestDeployment?: ServiceInstanceLatestDeployment;
  /**
   * @example
   * {}
   */
  outputs?: { [key: string]: any };
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      latestDeployment: 'latestDeployment',
      outputs: 'outputs',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ServiceConfig,
      latestDeployment: ServiceInstanceLatestDeployment,
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.latestDeployment && typeof (this.latestDeployment as any).validate === 'function') {
      (this.latestDeployment as any).validate();
    }
    if(this.outputs) {
      $dara.Model.validateMap(this.outputs);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

