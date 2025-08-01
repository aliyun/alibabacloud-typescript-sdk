// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFiltersResponseBodyFilters } from "./ListFiltersResponseBodyFilters";


export class ListFiltersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the default filter.
   * 
   * @example
   * My Filters
   */
  defaultFilterName?: string;
  /**
   * @remarks
   * The configurations of the filter.
   */
  filters?: ListFiltersResponseBodyFilters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA39FB9C-CB74-5E73-8DFE-3A2B096F0759
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultFilterName: 'DefaultFilterName',
      filters: 'Filters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultFilterName: 'string',
      filters: { 'type': 'array', 'itemType': ListFiltersResponseBodyFilters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

