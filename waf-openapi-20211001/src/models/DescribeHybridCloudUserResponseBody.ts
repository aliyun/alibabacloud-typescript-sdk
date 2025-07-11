// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudUserResponseBodyUserInfo extends $dara.Model {
  /**
   * @remarks
   * The HTTP ports. The value is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS ports. The value is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 8443,443
   */
  httpsPorts?: string;
  static names(): { [key: string]: string } {
    return {
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpPorts: 'string',
      httpsPorts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9178CB86-285F-5679-A30A-3B3F007E4206
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the ports that can be used by a hybrid cloud cluster.
   */
  userInfo?: DescribeHybridCloudUserResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: DescribeHybridCloudUserResponseBodyUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

