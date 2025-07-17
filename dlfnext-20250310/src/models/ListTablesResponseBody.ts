// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBody extends $dara.Model {
  /**
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

