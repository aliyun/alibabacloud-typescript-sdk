// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhoneNumberOperatorAttributeAnnualResponseBodyData extends $dara.Model {
  basicCarrier?: string;
  carrier?: string;
  city?: string;
  mts?: string;
  numberPortability?: boolean;
  province?: string;
  static names(): { [key: string]: string } {
    return {
      basicCarrier: 'BasicCarrier',
      carrier: 'Carrier',
      city: 'City',
      mts: 'Mts',
      numberPortability: 'NumberPortability',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicCarrier: 'string',
      carrier: 'string',
      city: 'string',
      mts: 'string',
      numberPortability: 'boolean',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

