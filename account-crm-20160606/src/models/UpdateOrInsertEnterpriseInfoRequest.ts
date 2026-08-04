// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrInsertEnterpriseInfoRequest extends $dara.Model {
  address?: string;
  alias?: string;
  cityJsonString?: { [key: string]: any };
  enterpriseSize?: string;
  fax?: string;
  name?: string;
  PK?: string;
  phone?: string;
  provinceJsonString?: { [key: string]: any };
  years?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alias: 'Alias',
      cityJsonString: 'CityJsonString',
      enterpriseSize: 'EnterpriseSize',
      fax: 'Fax',
      name: 'Name',
      PK: 'PK',
      phone: 'Phone',
      provinceJsonString: 'ProvinceJsonString',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alias: 'string',
      cityJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enterpriseSize: 'string',
      fax: 'string',
      name: 'string',
      PK: 'string',
      phone: 'string',
      provinceJsonString: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      years: 'string',
    };
  }

  validate() {
    if(this.cityJsonString) {
      $dara.Model.validateMap(this.cityJsonString);
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

