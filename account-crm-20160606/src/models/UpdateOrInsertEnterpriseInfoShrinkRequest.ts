// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrInsertEnterpriseInfoShrinkRequest extends $dara.Model {
  address?: string;
  alias?: string;
  cityJsonStringShrink?: string;
  enterpriseSize?: string;
  fax?: string;
  name?: string;
  PK?: string;
  phone?: string;
  provinceJsonStringShrink?: string;
  years?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alias: 'Alias',
      cityJsonStringShrink: 'CityJsonString',
      enterpriseSize: 'EnterpriseSize',
      fax: 'Fax',
      name: 'Name',
      PK: 'PK',
      phone: 'Phone',
      provinceJsonStringShrink: 'ProvinceJsonString',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alias: 'string',
      cityJsonStringShrink: 'string',
      enterpriseSize: 'string',
      fax: 'string',
      name: 'string',
      PK: 'string',
      phone: 'string',
      provinceJsonStringShrink: 'string',
      years: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

