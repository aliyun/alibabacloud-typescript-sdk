// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ServiceInstance } from "./ServiceInstance";


export class EnvironmentStatus extends $dara.Model {
  latestEnvironmentDeploymentName?: string;
  /**
   * @example
   * 1
   */
  observedGeneration?: number;
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  observedTime?: string;
  servicesInstances?: { [key: string]: ServiceInstance };
  servicesWithPendingChanges?: string[];
  static names(): { [key: string]: string } {
    return {
      latestEnvironmentDeploymentName: 'latestEnvironmentDeploymentName',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      servicesInstances: 'servicesInstances',
      servicesWithPendingChanges: 'servicesWithPendingChanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestEnvironmentDeploymentName: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      servicesInstances: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceInstance },
      servicesWithPendingChanges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.servicesInstances) {
      $dara.Model.validateMap(this.servicesInstances);
    }
    if(Array.isArray(this.servicesWithPendingChanges)) {
      $dara.Model.validateArray(this.servicesWithPendingChanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

