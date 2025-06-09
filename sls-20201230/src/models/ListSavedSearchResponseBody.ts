// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SavedSearch } from "./SavedSearch";


export class ListSavedSearchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of saved searches returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The saved searches.
   * 
   * @example
   * [ "test-1", "test-2" ]
   */
  savedsearchItems?: SavedSearch[];
  /**
   * @remarks
   * The total number of saved searches that meet the query conditions.
   * 
   * @example
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      savedsearchItems: 'savedsearchItems',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      savedsearchItems: { 'type': 'array', 'itemType': SavedSearch },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.savedsearchItems)) {
      $dara.Model.validateArray(this.savedsearchItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

