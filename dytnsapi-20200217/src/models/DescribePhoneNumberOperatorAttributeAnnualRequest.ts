// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOperatorAttributeAnnualRequest extends $dara.Model {
  authCode?: string;
  mask?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      mask: 'Mask',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      mask: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

