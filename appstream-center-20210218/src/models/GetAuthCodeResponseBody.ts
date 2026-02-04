// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetAuthCodeResponseBodyAuthModel extends $dara.Model {
  /**
   * @example
   * acv2ZEq2TNSqOlX+DvyetHGRT08iPhbWg/os1W4HojpBxkMQZkAnbKSfz/wNvS0E149IQZ5TogvBUE8ghCSVV+QBnv48Y+sn4z9fY5ywZA1peI5s4TplQI0TADBhPZXEIzMOdmbNsDGGlGcKOAq8ixd1Epzdu9XfvRzdLOO6o3zQwTZxXsjOgGBW8JTcgCP9W9iYiIjHIdZ2VCAnmMzuyVkyED8gymEevH10QoclyH/O3s8Yq6VF34gMXihDQeiI8PyiAZrW0JWXSWpdy3n4yGtAqMAgv46FzTA+XJ6C********
   */
  authCode?: string;
  /**
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @example
   * 2015-01-23T12:33:18Z
   */
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      endUserId: 'EndUserId',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      endUserId: 'string',
      expireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthCodeResponseBody extends $dara.Model {
  authModel?: GetAuthCodeResponseBodyAuthModel;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authModel: 'AuthModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authModel: GetAuthCodeResponseBodyAuthModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.authModel && typeof (this.authModel as any).validate === 'function') {
      (this.authModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

