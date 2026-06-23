// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserKubeConfigStatesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * - Valid values: greater than or equal to 1.
   * 
   * - Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results returned per page.
   * 
   * - Valid values: 1 to 100.
   * 
   * - Default value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

