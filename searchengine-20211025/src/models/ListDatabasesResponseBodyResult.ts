// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabasesResponseBodyResultDatabases } from "./ListDatabasesResponseBodyResultDatabases";


export class ListDatabasesResponseBodyResult extends $dara.Model {
  databases?: ListDatabasesResponseBodyResultDatabases[];
  static names(): { [key: string]: string } {
    return {
      databases: 'databases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListDatabasesResponseBodyResultDatabases },
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

