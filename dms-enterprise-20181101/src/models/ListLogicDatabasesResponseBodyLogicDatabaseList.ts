// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase } from "./ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase";


export class ListLogicDatabasesResponseBodyLogicDatabaseList extends $dara.Model {
  logicDatabase?: ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase[];
  static names(): { [key: string]: string } {
    return {
      logicDatabase: 'LogicDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicDatabase: { 'type': 'array', 'itemType': ListLogicDatabasesResponseBodyLogicDatabaseListLogicDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.logicDatabase)) {
      $dara.Model.validateArray(this.logicDatabase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

