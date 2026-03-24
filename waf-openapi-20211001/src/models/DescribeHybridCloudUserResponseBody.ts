// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudUserResponseBodyUserInfo extends $dara.Model {
  /**
   * @remarks
   * The available HTTP ports. The value is a string. If multiple ports are returned, they are separated by commas (,). Example: **port1,port2,port3**.
   * 
   * @example
   * 80,8080
   */
  httpPorts?: string;
  /**
   * @remarks
   * The available HTTPS ports. The value is a string. If multiple ports are returned, they are separated by commas (,). Example: **port1,port2,port3**.
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
   * The request ID.
   * 
   * @example
   * 9178CB86-285F-5679-A30A-3B3F007E4206
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the available HTTP and HTTPS port ranges for hybrid cloud access.
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

