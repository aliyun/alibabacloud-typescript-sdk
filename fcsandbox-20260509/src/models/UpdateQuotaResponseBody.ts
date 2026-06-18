// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";


export class UpdateQuotaResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  quota?: Quota;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      quota: 'quota',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      quota: Quota,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

