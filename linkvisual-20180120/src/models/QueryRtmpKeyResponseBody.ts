// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRtmpKeyResponseBodyData extends $dara.Model {
  pullAuthKey?: string;
  pullKeyExpireTime?: number;
  pushAuthKey?: string;
  pushKeyExpireTime?: number;
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      pullAuthKey: 'PullAuthKey',
      pullKeyExpireTime: 'PullKeyExpireTime',
      pushAuthKey: 'PushAuthKey',
      pushKeyExpireTime: 'PushKeyExpireTime',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pullAuthKey: 'string',
      pullKeyExpireTime: 'number',
      pushAuthKey: 'string',
      pushKeyExpireTime: 'number',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRtmpKeyResponseBody extends $dara.Model {
  code?: string;
  data?: QueryRtmpKeyResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRtmpKeyResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

