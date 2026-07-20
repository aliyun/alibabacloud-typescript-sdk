// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number for paged queries. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The search keyword, such as a keyword in the name, email address, or phone number.
   * 
   * @example
   * 186
   */
  keyword?: string;
  /**
   * @remarks
   * The number of contacts to display per page in a paged query.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

