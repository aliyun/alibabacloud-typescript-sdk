// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountProfileInfoShrinkRequest extends $dara.Model {
  accountAttribute?: string;
  address?: string;
  address2?: string;
  bindAlipayNo?: string;
  certType?: string;
  cityJsonStringShrink?: string;
  contactMethod?: string;
  districtJsonStringShrink?: string;
  fax?: string;
  firstName?: string;
  head?: string;
  headColor?: string;
  lastName?: string;
  PK?: string;
  phone?: string;
  postCode?: string;
  provinceJsonStringShrink?: string;
  selfServicingBusinessRegNum?: string;
  selfServicingIdentificationNum?: string;
  trueName?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttribute: 'AccountAttribute',
      address: 'Address',
      address2: 'Address2',
      bindAlipayNo: 'BindAlipayNo',
      certType: 'CertType',
      cityJsonStringShrink: 'CityJsonString',
      contactMethod: 'ContactMethod',
      districtJsonStringShrink: 'DistrictJsonString',
      fax: 'Fax',
      firstName: 'FirstName',
      head: 'Head',
      headColor: 'HeadColor',
      lastName: 'LastName',
      PK: 'PK',
      phone: 'Phone',
      postCode: 'PostCode',
      provinceJsonStringShrink: 'ProvinceJsonString',
      selfServicingBusinessRegNum: 'SelfServicingBusinessRegNum',
      selfServicingIdentificationNum: 'SelfServicingIdentificationNum',
      trueName: 'TrueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttribute: 'string',
      address: 'string',
      address2: 'string',
      bindAlipayNo: 'string',
      certType: 'string',
      cityJsonStringShrink: 'string',
      contactMethod: 'string',
      districtJsonStringShrink: 'string',
      fax: 'string',
      firstName: 'string',
      head: 'string',
      headColor: 'string',
      lastName: 'string',
      PK: 'string',
      phone: 'string',
      postCode: 'string',
      provinceJsonStringShrink: 'string',
      selfServicingBusinessRegNum: 'string',
      selfServicingIdentificationNum: 'string',
      trueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

