// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsSaasTaskDetailNewResponseBodyPhoneList extends $dara.Model {
  phoneNum?: string[];
  static names(): { [key: string]: string } {
    return {
      phoneNum: 'phoneNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNum: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.phoneNum)) {
      $dara.Model.validateArray(this.phoneNum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

