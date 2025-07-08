// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAuthorizationResponseBodyResult } from "./QueryAuthorizationResponseBodyResult";


export class QueryAuthorizationResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: QueryAuthorizationResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryAuthorizationResponseBodyResult },
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

