// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySendDetailsByPhoneNumNewResponseBodyListSmsSendDetailResponse } from "./QuerySendDetailsByPhoneNumNewResponseBodyListSmsSendDetailResponse";


export class QuerySendDetailsByPhoneNumNewResponseBodyList extends $dara.Model {
  smsSendDetailResponse?: QuerySendDetailsByPhoneNumNewResponseBodyListSmsSendDetailResponse[];
  static names(): { [key: string]: string } {
    return {
      smsSendDetailResponse: 'SmsSendDetailResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsSendDetailResponse: { 'type': 'array', 'itemType': QuerySendDetailsByPhoneNumNewResponseBodyListSmsSendDetailResponse },
    };
  }

  validate() {
    if(Array.isArray(this.smsSendDetailResponse)) {
      $dara.Model.validateArray(this.smsSendDetailResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

