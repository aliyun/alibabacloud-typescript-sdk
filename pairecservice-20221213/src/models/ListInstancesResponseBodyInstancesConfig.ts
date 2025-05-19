// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyInstancesConfigDataManagements } from "./ListInstancesResponseBodyInstancesConfigDataManagements";
import { ListInstancesResponseBodyInstancesConfigEngines } from "./ListInstancesResponseBodyInstancesConfigEngines";
import { ListInstancesResponseBodyInstancesConfigMonitors } from "./ListInstancesResponseBodyInstancesConfigMonitors";


export class ListInstancesResponseBodyInstancesConfig extends $dara.Model {
  dataManagements?: ListInstancesResponseBodyInstancesConfigDataManagements[];
  engines?: ListInstancesResponseBodyInstancesConfigEngines[];
  monitors?: ListInstancesResponseBodyInstancesConfigMonitors[];
  static names(): { [key: string]: string } {
    return {
      dataManagements: 'DataManagements',
      engines: 'Engines',
      monitors: 'Monitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataManagements: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigDataManagements },
      engines: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigEngines },
      monitors: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesConfigMonitors },
    };
  }

  validate() {
    if(Array.isArray(this.dataManagements)) {
      $dara.Model.validateArray(this.dataManagements);
    }
    if(Array.isArray(this.engines)) {
      $dara.Model.validateArray(this.engines);
    }
    if(Array.isArray(this.monitors)) {
      $dara.Model.validateArray(this.monitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

