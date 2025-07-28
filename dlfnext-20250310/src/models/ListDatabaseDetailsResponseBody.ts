// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Database } from "./Database";


export class ListDatabaseDetailsResponseBody extends $dara.Model {
  databaseDetails?: Database[];
  /**
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  static names(): { [key: string]: string } {
    return {
      databaseDetails: 'databaseDetails',
      nextPageToken: 'nextPageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseDetails: { 'type': 'array', 'itemType': Database },
      nextPageToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseDetails)) {
      $dara.Model.validateArray(this.databaseDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

