// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachLabelsRequest extends $dara.Model {
  labelIds?: string;
  serialNo?: string;
  serialNoList?: string;
  static names(): { [key: string]: string } {
    return {
      labelIds: 'LabelIds',
      serialNo: 'SerialNo',
      serialNoList: 'SerialNoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelIds: 'string',
      serialNo: 'string',
      serialNoList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

