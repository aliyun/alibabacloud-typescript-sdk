// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataChannelCredentialsResponseBodyData extends $dara.Model {
  clientId?: string;
  deviceId?: string;
  endpoint?: string;
  expiredTime?: number;
  password?: string;
  topic?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      deviceId: 'DeviceId',
      endpoint: 'Endpoint',
      expiredTime: 'ExpiredTime',
      password: 'Password',
      topic: 'Topic',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      deviceId: 'string',
      endpoint: 'string',
      expiredTime: 'number',
      password: 'string',
      topic: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataChannelCredentialsResponseBody extends $dara.Model {
  code?: string;
  data?: GetDataChannelCredentialsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDataChannelCredentialsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

