// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountAddressInfoShrinkRequest extends $dara.Model {
  address?: string;
  address2?: string;
  cityJsonStringShrink?: string;
  districtJsonStringShrink?: string;
  PK?: string;
  postCode?: string;
  provinceJsonStringShrink?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      address2: 'Address2',
      cityJsonStringShrink: 'CityJsonString',
      districtJsonStringShrink: 'DistrictJsonString',
      PK: 'PK',
      postCode: 'PostCode',
      provinceJsonStringShrink: 'ProvinceJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      address2: 'string',
      cityJsonStringShrink: 'string',
      districtJsonStringShrink: 'string',
      PK: 'string',
      postCode: 'string',
      provinceJsonStringShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

