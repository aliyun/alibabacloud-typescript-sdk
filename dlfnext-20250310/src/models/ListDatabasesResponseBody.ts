// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The databases.
   */
  databases?: string[];
  /**
   * @remarks
   * The token for the next page of results. A null value indicates that this is the last page.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'databases',
      nextPageToken: 'nextPageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': 'string' },
      nextPageToken: 'string',
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

