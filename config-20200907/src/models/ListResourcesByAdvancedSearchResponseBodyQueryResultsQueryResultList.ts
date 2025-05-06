// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList extends $dara.Model {
  /**
   * @remarks
   * The field names.
   */
  columns?: string[];
  /**
   * @remarks
   * The resource data.
   */
  values?: any[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

