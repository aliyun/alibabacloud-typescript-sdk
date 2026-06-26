// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergTable } from "./IcebergTable";


export class ListIcebergTableDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is null, all results have been returned.
   * 
   * @example
   * ""
   */
  nextPageToken?: string;
  /**
   * @remarks
   * A list of data tables.
   */
  tableDetails?: IcebergTable[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      tableDetails: 'tableDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      tableDetails: { 'type': 'array', 'itemType': IcebergTable },
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

