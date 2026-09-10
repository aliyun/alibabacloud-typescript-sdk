// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The Bailian business workspace ID.
   * 
   * @example
   * llm-zop7ukgtksltamo4
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs a fuzzy match based on the variable name or display name.
   * 
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

