// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDatabaseResponseBodySearchDatabaseListSearchDatabase } from "./SearchDatabaseResponseBodySearchDatabaseListSearchDatabase";


export class SearchDatabaseResponseBodySearchDatabaseList extends $dara.Model {
  searchDatabase?: SearchDatabaseResponseBodySearchDatabaseListSearchDatabase[];
  static names(): { [key: string]: string } {
    return {
      searchDatabase: 'SearchDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchDatabase: { 'type': 'array', 'itemType': SearchDatabaseResponseBodySearchDatabaseListSearchDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.searchDatabase)) {
      $dara.Model.validateArray(this.searchDatabase);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

