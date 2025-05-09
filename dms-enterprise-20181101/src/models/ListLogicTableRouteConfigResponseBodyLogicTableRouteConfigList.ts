// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig } from "./ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig";


export class ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigList extends $dara.Model {
  logicTableRouteConfig?: ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig[];
  static names(): { [key: string]: string } {
    return {
      logicTableRouteConfig: 'LogicTableRouteConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicTableRouteConfig: { 'type': 'array', 'itemType': ListLogicTableRouteConfigResponseBodyLogicTableRouteConfigListLogicTableRouteConfig },
    };
  }

  validate() {
    if(Array.isArray(this.logicTableRouteConfig)) {
      $dara.Model.validateArray(this.logicTableRouteConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

