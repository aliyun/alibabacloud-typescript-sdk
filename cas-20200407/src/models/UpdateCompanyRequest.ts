// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCompanyRequest extends $dara.Model {
  /**
   * @remarks
   * The city.
   * 
   * This parameter is required.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The address of the company.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  companyAddress?: string;
  /**
   * @remarks
   * The company code.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * 51001
   */
  companyId?: number;
  /**
   * @remarks
   * The name of the company or organization.
   * 
   * This parameter is required.
   * 
   * @example
   * testYanwen045
   */
  companyName?: string;
  /**
   * @remarks
   * The phone number of the company.
   * 
   * This parameter is required.
   * 
   * @example
   * 1511
   */
  companyPhone?: string;
  /**
   * @remarks
   * The company type.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  companyType?: number;
  /**
   * @remarks
   * The country code.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * 100000
   */
  postCode?: string;
  /**
   * @remarks
   * The province.
   * 
   * This parameter is required.
   * 
   * @example
   * Beijing
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

