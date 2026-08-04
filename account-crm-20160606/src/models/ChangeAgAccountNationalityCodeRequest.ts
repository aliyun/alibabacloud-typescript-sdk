// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeAgAccountNationalityCodeRequest extends $dara.Model {
  appName?: string;
  mpk?: string;
  nationalityCode?: string;
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      mpk: 'Mpk',
      nationalityCode: 'NationalityCode',
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      mpk: 'string',
      nationalityCode: 'string',
      PK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

