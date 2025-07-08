// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySendFailDetailsNewResponseBodyListSmsSendDetailResponse } from "./QuerySendFailDetailsNewResponseBodyListSmsSendDetailResponse";


export class QuerySendFailDetailsNewResponseBodyList extends $dara.Model {
  smsSendDetailResponse?: QuerySendFailDetailsNewResponseBodyListSmsSendDetailResponse[];
  static names(): { [key: string]: string } {
    return {
      smsSendDetailResponse: 'SmsSendDetailResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsSendDetailResponse: { 'type': 'array', 'itemType': QuerySendFailDetailsNewResponseBodyListSmsSendDetailResponse },
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

