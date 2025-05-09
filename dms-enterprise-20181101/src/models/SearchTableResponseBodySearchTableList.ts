// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchTableResponseBodySearchTableListSearchTable } from "./SearchTableResponseBodySearchTableListSearchTable";


export class SearchTableResponseBodySearchTableList extends $dara.Model {
  searchTable?: SearchTableResponseBodySearchTableListSearchTable[];
  static names(): { [key: string]: string } {
    return {
      searchTable: 'SearchTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchTable: { 'type': 'array', 'itemType': SearchTableResponseBodySearchTableListSearchTable },
    };
  }

  validate() {
    if(Array.isArray(this.searchTable)) {
      $dara.Model.validateArray(this.searchTable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

