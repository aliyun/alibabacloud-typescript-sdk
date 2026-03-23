// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTDEResponseBodyDatabasesDatabase extends $dara.Model {
  DBName?: string;
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeDBInstanceTDEResponseBody extends $dara.Model {
  databases?: DescribeDBInstanceTDEResponseBodyDatabases;
  encryptionKey?: string;
  requestId?: string;
  TDEMode?: string;
  TDEStatus?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      encryptionKey: 'EncryptionKey',
      requestId: 'RequestId',
      TDEMode: 'TDEMode',
      TDEStatus: 'TDEStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDBInstanceTDEResponseBodyDatabases,
      encryptionKey: 'string',
      requestId: 'string',
      TDEMode: 'string',
      TDEStatus: 'string',
    };
  }

  validate() {
    if(this.databases && typeof (this.databases as any).validate === 'function') {
      (this.databases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

