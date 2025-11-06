// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactInfoResponseBody extends $dara.Model {
  /**
   * @example
   * xi hu qu *** jiedao *** xiaoqu *** zhuang 101
   */
  address?: string;
  /**
   * @example
   * hang zhou shi
   */
  city?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * 2019-03-20 11:37:29
   */
  createDate?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 310024
   */
  postalCode?: string;
  /**
   * @example
   * zhe jiang
   */
  province?: string;
  /**
   * @example
   * zhang san
   */
  registrantName?: string;
  /**
   * @example
   * zhang san
   */
  registrantOrganization?: string;
  /**
   * @example
   * C39ECA8A-BB5E-4F92-B013-6A032FA06B04
   */
  requestId?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @example
   * 1820000****
   */
  telephone?: string;
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
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

