// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhitelistIpsResponseBodyData extends $dara.Model {
  /**
   * @example
   * www.test123.com
   */
  domain?: string;
  /**
   * @example
   * 127.0.0.1,192.168.1.0/24
   */
  ipWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ipWhitelist: 'IpWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ipWhitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistIpsResponseBody extends $dara.Model {
  data?: DescribeWhitelistIpsResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeWhitelistIpsResponseBodyData,
      message: 'string',
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

