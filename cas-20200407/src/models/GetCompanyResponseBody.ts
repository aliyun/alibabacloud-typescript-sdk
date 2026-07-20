// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompanyResponseBody extends $dara.Model {
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
   * The address of the company.
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
   * The email address of the company.
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
   * The phone number of the company.
   * 
   * @example
   * 1511
   */
  companyPhone?: string;
  /**
   * @remarks
   * The company type.
   * 
   * @example
   * 0
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
   * Beijing
   */
  province?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0068247C-A454-5FC9-93BF-C41CBB5CD19E
   */
  requestId?: string;
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
      requestId: 'RequestId',
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
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

