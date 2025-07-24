// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeContact extends $dara.Model {
  email?: string;
  emailVerify?: boolean;
  extend?: { [key: string]: any };
  gmtCreate?: string;
  gmtModified?: string;
  identifier?: string;
  lang?: string;
  name?: string;
  phone?: string;
  phoneCode?: string;
  phoneVerify?: boolean;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      emailVerify: 'emailVerify',
      extend: 'extend',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      lang: 'lang',
      name: 'name',
      phone: 'phone',
      phoneCode: 'phoneCode',
      phoneVerify: 'phoneVerify',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      emailVerify: 'boolean',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      lang: 'string',
      name: 'string',
      phone: 'string',
      phoneCode: 'string',
      phoneVerify: 'boolean',
      source: 'string',
    };
  }

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

