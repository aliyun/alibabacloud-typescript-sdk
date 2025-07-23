// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword used in the query. For example, you can specify a keyword in names, email addresses, and mobile phone numbers.
   * 
   * @example
   * 186
   */
  keyword?: string;
  /**
   * @remarks
   * The number of contacts per page.
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

