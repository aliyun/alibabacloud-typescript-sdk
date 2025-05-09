// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorizedDatabasesForUserResponseBodyDatabases } from "./ListAuthorizedDatabasesForUserResponseBodyDatabases";


export class ListAuthorizedDatabasesForUserResponseBody extends $dara.Model {
  databases?: ListAuthorizedDatabasesForUserResponseBodyDatabases[];
  /**
   * @example
   * 012AE0B5-4B52-532F-BD7C-1EE9F182089B
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
      databases: { 'type': 'array', 'itemType': ListAuthorizedDatabasesForUserResponseBodyDatabases },
      requestId: 'string',
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

