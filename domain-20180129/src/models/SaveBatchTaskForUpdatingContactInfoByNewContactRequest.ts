// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveBatchTaskForUpdatingContactInfoByNewContactRequest extends $dara.Model {
  /**
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registrant
   */
  contactType?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alibabacloud.com
   */
  domainName?: string[];
  /**
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 123456
   */
  postalCode?: string;
  /**
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @example
   * 1235
   */
  telExt?: string;
  /**
   * @example
   * 1234567890
   */
  telephone?: string;
  /**
   * @example
   * false
   */
  transferOutProhibited?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      contactType: 'ContactType',
      country: 'Country',
      domainName: 'DomainName',
      email: 'Email',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
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
      contactType: 'string',
      country: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

