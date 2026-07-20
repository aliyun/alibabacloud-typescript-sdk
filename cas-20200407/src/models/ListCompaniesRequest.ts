// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompaniesRequest extends $dara.Model {
  /**
   * @remarks
   * The company ID.
   * 
   * @example
   * 51001
   */
  companyId?: number;
  /**
   * @remarks
   * The page number of the current page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The search keyword. For example, a keyword for the company name, province, country code, or city.
   * 
   * @example
   * test
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
      companyId: 'CompanyId',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
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

