// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowsersInput extends $dara.Model {
  /**
   * @remarks
   * Filters the results by browser name.
   * 
   * @example
   * my-browser
   */
  browserName?: string;
  /**
   * @remarks
   * The page number of the results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      browserName: 'browserName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserName: 'string',
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

