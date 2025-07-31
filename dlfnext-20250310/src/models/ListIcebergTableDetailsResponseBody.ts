// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IcebergTable } from "./IcebergTable";


export class ListIcebergTableDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  nextPageToken?: string;
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

