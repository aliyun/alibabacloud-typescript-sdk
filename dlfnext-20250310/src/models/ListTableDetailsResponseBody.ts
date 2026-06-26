// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Table } from "./Table";


export class ListTableDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token to retrieve the next page of results. A null value indicates that all results have been returned.
   * 
   * @example
   * E8ABEB1C3DB893D16576269017992F57
   */
  nextPageToken?: string;
  /**
   * @remarks
   * A list of tables.
   */
  tableDetails?: Table[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      tableDetails: 'tableDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      tableDetails: { 'type': 'array', 'itemType': Table },
    };
  }

  validate() {
    if(Array.isArray(this.tableDetails)) {
      $dara.Model.validateArray(this.tableDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

