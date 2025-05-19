// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceResponseBodyConfigDataManagements } from "./GetInstanceResponseBodyConfigDataManagements";
import { GetInstanceResponseBodyConfigEngines } from "./GetInstanceResponseBodyConfigEngines";
import { GetInstanceResponseBodyConfigMonitors } from "./GetInstanceResponseBodyConfigMonitors";


export class GetInstanceResponseBodyConfig extends $dara.Model {
  dataManagements?: GetInstanceResponseBodyConfigDataManagements[];
  engines?: GetInstanceResponseBodyConfigEngines[];
  monitors?: GetInstanceResponseBodyConfigMonitors[];
  static names(): { [key: string]: string } {
    return {
      dataManagements: 'DataManagements',
      engines: 'Engines',
      monitors: 'Monitors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataManagements: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigDataManagements },
      engines: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigEngines },
      monitors: { 'type': 'array', 'itemType': GetInstanceResponseBodyConfigMonitors },
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

