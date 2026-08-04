// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountProfileInfoRequest extends $dara.Model {
  accountAttribute?: string;
  address?: string;
  address2?: string;
  bindAlipayNo?: string;
  certType?: string;
  cityJsonString?: { [key: string]: any };
  contactMethod?: string;
  districtJsonString?: { [key: string]: any };
  fax?: string;
  firstName?: string;
  head?: string;
  headColor?: string;
  lastName?: string;
  PK?: string;
  phone?: string;
  postCode?: string;
  provinceJsonString?: { [key: string]: any };
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
      cityJsonString: 'CityJsonString',
      contactMethod: 'ContactMethod',
      districtJsonString: 'DistrictJsonString',
      fax: 'Fax',
      firstName: 'FirstName',
      head: 'Head',
      headColor: 'HeadColor',
      lastName: 'LastName',
      PK: 'PK',
      phone: 'Phone',
      postCode: 'PostCode',
      provinceJsonString: 'ProvinceJsonString',
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
      cityJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contactMethod: 'string',
      districtJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fax: 'string',
      firstName: 'string',
      head: 'string',
      headColor: 'string',
      lastName: 'string',
      PK: 'string',
      phone: 'string',
      postCode: 'string',
      provinceJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      selfServicingBusinessRegNum: 'string',
      selfServicingIdentificationNum: 'string',
      trueName: 'string',
    };
  }

  validate() {
    if(this.cityJsonString) {
      $dara.Model.validateMap(this.cityJsonString);
    }
    if(this.districtJsonString) {
      $dara.Model.validateMap(this.districtJsonString);
    }
    if(this.provinceJsonString) {
      $dara.Model.validateMap(this.provinceJsonString);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

