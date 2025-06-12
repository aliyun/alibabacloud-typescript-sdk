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

