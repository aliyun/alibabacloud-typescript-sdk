// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompaniesResponseBodyCompanyList extends $dara.Model {
  /**
   * @remarks
   * The city.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The company address.
   * 
   * @example
   * test
   */
  companyAddress?: string;
  /**
   * @remarks
   * The company code.
   * 
   * @example
   * xxx
   */
  companyCode?: string;
  /**
   * @remarks
   * The company email address.
   * 
   * @example
   * test@163.com
   */
  companyEmail?: string;
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
   * The name of the company or organization.
   * 
   * @example
   * testYanwen045
   */
  companyName?: string;
  /**
   * @remarks
   * The company phone number.
   * 
   * @example
   * 1511
   */
  companyPhone?: string;
  /**
   * @remarks
   * The company code.
   * 
   * @example
   * xxx
   */
  companyType?: number;
  /**
   * @remarks
   * The country code.
   * 
   * @example
   * CN
   */
  countryCode?: string;
  /**
   * @remarks
   * The department.
   * 
   * @example
   * test
   */
  department?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The postal code.
   * 
   * @example
   * 100000
   */
  postCode?: string;
  /**
   * @remarks
   * The province.
   * 
   * @example
   * test
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      companyAddress: 'CompanyAddress',
      companyCode: 'CompanyCode',
      companyEmail: 'CompanyEmail',
      companyId: 'CompanyId',
      companyName: 'CompanyName',
      companyPhone: 'CompanyPhone',
      companyType: 'CompanyType',
      countryCode: 'CountryCode',
      department: 'Department',
      lang: 'Lang',
      postCode: 'PostCode',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      companyAddress: 'string',
      companyCode: 'string',
      companyEmail: 'string',
      companyId: 'number',
      companyName: 'string',
      companyPhone: 'string',
      companyType: 'number',
      countryCode: 'string',
      department: 'string',
      lang: 'string',
      postCode: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompaniesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of companies.
   */
  companyList?: ListCompaniesResponseBodyCompanyList[];
  /**
   * @remarks
   * Settings the page number of the current page in a paged query for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 285BBE08-F12B-5A04-97BC-09EA7FF18646
   */
  requestId?: string;
  /**
   * @remarks
   * The number of certificates to display per page in a paged query. Default value: 10.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of search results.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      companyList: 'CompanyList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyList: { 'type': 'array', 'itemType': ListCompaniesResponseBodyCompanyList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.companyList)) {
      $dara.Model.validateArray(this.companyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

