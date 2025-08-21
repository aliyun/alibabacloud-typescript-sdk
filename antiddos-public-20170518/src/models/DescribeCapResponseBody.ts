// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapResponseBodyCapUrl extends $dara.Model {
  /**
   * @remarks
   * The download link to the traffic data.
   * 
   * @example
   * http://beaver-pack****.oss-cn-hangzhou.aliyuncs.com/ddos-2021****-121.89.XX.XX.cap?Expires=1637****&OSSAccessKeyId=LTAI****************&Signature=******
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download link to the traffic data that is captured when a DDoS attack event occurs.
   */
  capUrl?: DescribeCapResponseBodyCapUrl;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C728D7E9-9A39-52E0-966B-5C33118BDBB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      capUrl: 'CapUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capUrl: DescribeCapResponseBodyCapUrl,
      requestId: 'string',
    };
  }

  validate() {
    if(this.capUrl && typeof (this.capUrl as any).validate === 'function') {
      (this.capUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

