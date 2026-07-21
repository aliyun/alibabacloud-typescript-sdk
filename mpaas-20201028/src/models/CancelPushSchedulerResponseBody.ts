// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPushSchedulerResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

