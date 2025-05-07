// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBodyDatabases } from "./DescribeDatabasesResponseBodyDatabases";


export class DescribeDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the databases.
   */
  databases?: DescribeDatabasesResponseBodyDatabases;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2603CA96-B17D-4903-BC04-61A2C829CD94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDatabasesResponseBodyDatabases,
      requestId: 'string',
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

