// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsSignResponseBodySignIspRegisterDetailListRegisterStatusReasons extends $dara.Model {
  reasonCode?: string;
  reasonDescList?: string[];
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'ReasonCode',
      reasonDescList: 'ReasonDescList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
      reasonDescList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reasonDescList)) {
      $dara.Model.validateArray(this.reasonDescList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

