// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";


export class ListQuotaResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  nextToken?: string;
  quotas?: Quota[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      nextToken: 'nextToken',
      quotas: 'quotas',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      quotas: { 'type': 'array', 'itemType': Quota },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

