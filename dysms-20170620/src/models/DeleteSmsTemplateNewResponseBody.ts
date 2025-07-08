// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteSmsTemplateNewResponseBodyFailList } from "./DeleteSmsTemplateNewResponseBodyFailList";
import { DeleteSmsTemplateNewResponseBodySuccessList } from "./DeleteSmsTemplateNewResponseBodySuccessList";


export class DeleteSmsTemplateNewResponseBody extends $dara.Model {
  failList?: DeleteSmsTemplateNewResponseBodyFailList;
  requestId?: string;
  successList?: DeleteSmsTemplateNewResponseBodySuccessList;
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: DeleteSmsTemplateNewResponseBodyFailList,
      requestId: 'string',
      successList: DeleteSmsTemplateNewResponseBodySuccessList,
    };
  }

  validate() {
    if(this.failList && typeof (this.failList as any).validate === 'function') {
      (this.failList as any).validate();
    }
    if(this.successList && typeof (this.successList as any).validate === 'function') {
      (this.successList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

