// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOpenGlobalDataResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  httpStatusCode?: number;
  requestId?: string;
  result?: boolean;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      result: 'boolean',
      resultCode: 'string',
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

