// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrustDevicesRequest extends $dara.Model {
  labelContent?: string;
  labelId?: string;
  serialNo?: string;
  userCustomId?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      serialNo: 'SerialNo',
      userCustomId: 'UserCustomId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
      serialNo: 'string',
      userCustomId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

