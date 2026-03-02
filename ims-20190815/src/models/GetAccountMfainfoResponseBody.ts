// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountMFAInfoResponseBody extends $dara.Model {
  isMFAEnable?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isMFAEnable: 'IsMFAEnable',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMFAEnable: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

