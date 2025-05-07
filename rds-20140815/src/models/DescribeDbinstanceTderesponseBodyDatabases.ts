// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceTDEResponseBodyDatabasesDatabase } from "./DescribeDbinstanceTderesponseBodyDatabasesDatabase";


export class DescribeDBInstanceTDEResponseBodyDatabases extends $dara.Model {
  database?: DescribeDBInstanceTDEResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDBInstanceTDEResponseBodyDatabasesDatabase },
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

