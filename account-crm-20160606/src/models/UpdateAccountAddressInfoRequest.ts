// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountAddressInfoRequest extends $dara.Model {
  address?: string;
  address2?: string;
  cityJsonString?: { [key: string]: any };
  districtJsonString?: { [key: string]: any };
  PK?: string;
  postCode?: string;
  provinceJsonString?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      address2: 'Address2',
      cityJsonString: 'CityJsonString',
      districtJsonString: 'DistrictJsonString',
      PK: 'PK',
      postCode: 'PostCode',
      provinceJsonString: 'ProvinceJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      address2: 'string',
      cityJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      districtJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      PK: 'string',
      postCode: 'string',
      provinceJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

