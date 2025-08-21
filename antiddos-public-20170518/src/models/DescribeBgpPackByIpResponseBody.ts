// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeBgpPackByIpResponseBodyDdosbgpInfo extends $dara.Model {
  /**
   * @remarks
   * The basic protection threshold of the instance. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  baseThreshold?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  ddosbgpInstanceId?: string;
  /**
   * @remarks
   * The burstable protection threshold of the instance. Unit: Gbit/s.
   * 
   * @example
   * 301
   */
  elasticThreshold?: number;
  /**
   * @remarks
   * The expiration time of the instance. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640448000000
   */
  expireTime?: number;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 118.31.XX.XX
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      baseThreshold: 'BaseThreshold',
      ddosbgpInstanceId: 'DdosbgpInstanceId',
      elasticThreshold: 'ElasticThreshold',
      expireTime: 'ExpireTime',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseThreshold: 'number',
      ddosbgpInstanceId: 'string',
      elasticThreshold: 'number',
      expireTime: 'number',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBgpPackByIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * For more information about status codes, see [Common parameters](https://help.aliyun.com/document_detail/118841.html).
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The configurations of the instance that is associated with the asset.
   */
  ddosbgpInfo?: DescribeBgpPackByIpResponseBodyDdosbgpInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E46A08E4-A1CD-5BE9-B580-C4D6E9BC5484
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ddosbgpInfo: 'DdosbgpInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ddosbgpInfo: DescribeBgpPackByIpResponseBodyDdosbgpInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ddosbgpInfo && typeof (this.ddosbgpInfo as any).validate === 'function') {
      (this.ddosbgpInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

