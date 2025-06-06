// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInstance } from "./ServiceInstance";
import { Variable } from "./Variable";


export class EnvironmentBaseline extends $dara.Model {
  servicesInstances?: { [key: string]: ServiceInstance };
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      servicesInstances: 'servicesInstances',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicesInstances: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceInstance },
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.servicesInstances) {
      $dara.Model.validateMap(this.servicesInstances);
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

