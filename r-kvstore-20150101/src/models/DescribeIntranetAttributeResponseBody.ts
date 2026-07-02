// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntranetAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the bandwidth package. Valid values:
   * 
   * - **true**: Auto-renewal is enabled.
   * 
   * - **false**: Auto-renewal is disabled.
   * 
   * > This parameter is not returned if no additional bandwidth is purchased.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The expiration time of the bandwidth package. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format.
   * 
   * > This parameter is not returned if no additional bandwidth is purchased.
   * 
   * @example
   * 2021-03-06T16:00:00Z
   */
  bandwidthExpireTime?: string;
  /**
   * @remarks
   * The billing method of the bandwidth package. Valid values:
   * 
   * - **0**: pay-as-you-go.
   * 
   * - **1**: subscription.
   * 
   * @example
   * 0
   */
  bandwidthPrePaid?: string;
  /**
   * @remarks
   * The expiration time of the temporary bandwidth. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format.
   * 
   * > This parameter returns **0** if the instance has no temporary bandwidth or if the temporary bandwidth has expired.
   * 
   * @example
   * 0
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the instance has an unexpired bandwidth package. Valid values:
   * 
   * - **true**: An unexpired bandwidth package exists.
   * 
   * - **false**: No unexpired bandwidth package exists.
   * 
   * > This parameter is not returned if no additional bandwidth is purchased.
   * 
   * @example
   * true
   */
  hasPrePaidBandWidthOrderRunning?: boolean;
  intranetBandWidthBurst?: number;
  /**
   * @remarks
   * The total intranet bandwidth across all shards in the instance, in MB/s.
   * 
   * @example
   * 102
   */
  intranetBandwidth?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25D42CC3-FBA1-4AEC-BCE2-B8DD3137****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      bandwidthExpireTime: 'BandwidthExpireTime',
      bandwidthPrePaid: 'BandwidthPrePaid',
      expireTime: 'ExpireTime',
      hasPrePaidBandWidthOrderRunning: 'HasPrePaidBandWidthOrderRunning',
      intranetBandWidthBurst: 'IntranetBandWidthBurst',
      intranetBandwidth: 'IntranetBandwidth',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      bandwidthExpireTime: 'string',
      bandwidthPrePaid: 'string',
      expireTime: 'string',
      hasPrePaidBandWidthOrderRunning: 'boolean',
      intranetBandWidthBurst: 'number',
      intranetBandwidth: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

