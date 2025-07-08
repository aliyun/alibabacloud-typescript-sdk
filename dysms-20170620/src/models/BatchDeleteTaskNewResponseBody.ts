// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteTaskNewResponseBody extends $dara.Model {
  failList?: string[];
  requestId?: string;
  successList?: string[];
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failList)) {
      $dara.Model.validateArray(this.failList);
    }
    if(Array.isArray(this.successList)) {
      $dara.Model.validateArray(this.successList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

