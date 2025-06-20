// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckShrinkRequestInfluenceInfoSensitiveCustomersCustomerInfo extends $dara.Model {
  extraInfo?: { [key: string]: any };
  type?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

