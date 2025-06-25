// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabasesForUserResponseBodyDatabases } from "./ListDatabasesForUserResponseBodyDatabases";


export class ListDatabasesForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The databases returned.
   */
  databases?: ListDatabasesForUserResponseBodyDatabases[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8A665B9-8550-4942-9DEE-73198051856B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of databases returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListDatabasesForUserResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'number',
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

