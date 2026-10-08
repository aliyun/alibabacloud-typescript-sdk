// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Mailing address (English).
   * 
   * @example
   * xi hu qu *** jiedao *** xiaoqu *** zhuang 101
   */
  address?: string;
  /**
   * @remarks
   * City (English).
   * 
   * @example
   * hang zhou shi
   */
  city?: string;
  /**
   * @remarks
   * Country code. For example, **CN** represents China and **US** represents the United States.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * Domain registration date.
   * 
   * @example
   * 2019-03-20 11:37:29
   */
  createDate?: string;
  /**
   * @remarks
   * Mailbox.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Postal code.
   * 
   * @example
   * 310024
   */
  postalCode?: string;
  /**
   * @remarks
   * Province (English).
   * 
   * @example
   * zhe jiang
   */
  province?: string;
  /**
   * @remarks
   * Contact name (English).
   * 
   * @example
   * zhang san
   */
  registrantName?: string;
  /**
   * @remarks
   * Registrant name (English).
   * 
   * @example
   * zhang san
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * Unique request access token.
   * 
   * @example
   * C39ECA8A-BB5E-4F92-B013-6A032FA06B04
   */
  requestId?: string;
  /**
   * @remarks
   * The country code for the telephone number. For example, the country code for China is **86**.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * Telephone extension number.
   * 
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @remarks
   * Telephone number.
   * 
   * @example
   * 1820000****
   */
  telephone?: string;
  /**
   * @remarks
   * Mailing address (in Chinese).
   * 
   * @example
   * 西湖区***街道***小区***幢101
   */
  zhAddress?: string;
  /**
   * @remarks
   * City (Chinese).
   * 
   * @example
   * 杭州市
   */
  zhCity?: string;
  /**
   * @remarks
   * Province (Chinese).
   * 
   * @example
   * 浙江
   */
  zhProvince?: string;
  /**
   * @remarks
   * Contact name (Chinese).
   * 
   * @example
   * 张三
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * Registrant name (Chinese).
   * 
   * @example
   * 张三
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      createDate: 'CreateDate',
      email: 'Email',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      requestId: 'RequestId',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      createDate: 'string',
      email: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      requestId: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

