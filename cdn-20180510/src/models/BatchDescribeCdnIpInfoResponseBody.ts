// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDescribeCdnIpInfoResponseBodyIpInfoList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address belongs to an Alibaba Cloud CDN point of presence (POP).
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  cdnIp?: string;
  /**
   * @remarks
   * The city to which the IP address belongs.
   * 
   * @example
   * Beijing
   */
  city?: string;
  /**
   * @remarks
   * The country to which the IP address belongs.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 111.XXX.XXX.230
   */
  ipAddress?: string;
  /**
   * @remarks
   * The ISP to which the IP address belongs.
   * 
   * @example
   * Move
   */
  ispName?: string;
  /**
   * @remarks
   * The province to which the IP address belongs.
   * 
   * @example
   * Beijing
   */
  province?: string;
  static names(): { [key: string]: string } {
    return {
      cdnIp: 'CdnIp',
      city: 'City',
      country: 'Country',
      ipAddress: 'IpAddress',
      ispName: 'IspName',
      province: 'Province',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnIp: 'string',
      city: 'string',
      country: 'string',
      ipAddress: 'string',
      ispName: 'string',
      province: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDescribeCdnIpInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results about IP addresses returned.
   */
  ipInfoList?: BatchDescribeCdnIpInfoResponseBodyIpInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55ADD936-763F-5E1A-BF54-2EA3F6E94A52
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipInfoList: 'IpInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipInfoList: { 'type': 'array', 'itemType': BatchDescribeCdnIpInfoResponseBodyIpInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipInfoList)) {
      $dara.Model.validateArray(this.ipInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

