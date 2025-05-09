// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogicDatabaseResponseBodyLogicDatabaseDatabaseIds extends $dara.Model {
  databaseIds?: number[];
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.databaseIds)) {
      $dara.Model.validateArray(this.databaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

