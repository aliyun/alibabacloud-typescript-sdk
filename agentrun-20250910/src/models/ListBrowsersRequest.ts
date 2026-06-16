// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBrowsersRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by browser name
   * 
   * @example
   * browser
   */
  browserName?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter by status
   * 
   * @example
   * CREATING
   * 
   * **if can be null:**
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      browserName: 'browserName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

