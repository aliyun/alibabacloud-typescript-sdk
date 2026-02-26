// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFiltersResponseBodyFilters extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  filterConfiguration?: string;
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterConfiguration: 'FilterConfiguration',
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConfiguration: 'string',
      filterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFiltersResponseBody extends $dara.Model {
  defaultFilterName?: string;
  filters?: ListFiltersResponseBodyFilters[];
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

