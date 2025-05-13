// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListActionRecordsResponseBodyResult } from "./ListActionRecordsResponseBodyResult";


export class ListActionRecordsResponseBody extends $dara.Model {
  requestId?: string;
  result?: ListActionRecordsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListActionRecordsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

