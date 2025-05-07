// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBodyDatabasesDatabase } from "./DescribeDatabasesResponseBodyDatabasesDatabase";


export class DescribeDatabasesResponseBodyDatabases extends $dara.Model {
  database?: DescribeDatabasesResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.database)) {
      $dara.Model.validateArray(this.database);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

