// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableRequest extends $dara.Model {
  /**
   * @example
   * llm-zop7ukgtksltamo4
   */
  businessUnitId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * age
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

