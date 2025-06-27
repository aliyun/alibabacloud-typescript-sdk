// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAndroidInstancesResponseBodyInstanceModelPhoneDataInfo extends $dara.Model {
  phoneDataId?: string;
  phoneDataVolume?: number;
  static names(): { [key: string]: string } {
    return {
      phoneDataId: 'PhoneDataId',
      phoneDataVolume: 'PhoneDataVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneDataId: 'string',
      phoneDataVolume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

