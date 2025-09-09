// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList extends $dara.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   */
  ipWhiteList?: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 017453B9-0001-4745-87BF-DD612D850ED0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipWhiteList: 'IpWhiteList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhiteList: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

