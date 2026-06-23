// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParameterVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * Specifies the page number of the results to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specifies the number of entries to return per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies the sort criterion in the format \\<sort field> \\<sort order>. You can omit Asc for ascending order. The only valid value for the sort field is:
   * 
   * - Version (Desc/Asc)
   * 
   * @example
   * Version Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

