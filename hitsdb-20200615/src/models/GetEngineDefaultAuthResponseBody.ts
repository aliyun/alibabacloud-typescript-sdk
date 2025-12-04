// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEngineDefaultAuthResponseBodyAuthInfos extends $dara.Model {
  engine?: string;
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEngineDefaultAuthResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  authInfos?: GetEngineDefaultAuthResponseBodyAuthInfos[];
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      authInfos: 'AuthInfos',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      authInfos: { 'type': 'array', 'itemType': GetEngineDefaultAuthResponseBodyAuthInfos },
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authInfos)) {
      $dara.Model.validateArray(this.authInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

