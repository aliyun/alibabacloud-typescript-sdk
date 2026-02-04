// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntranetAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the extra internal bandwidth that you purchased. Valid values:
   * 
   * *   **true**: Auto-renewal is enabled.
   * *   **false**: Auto-renewal is disabled.
   * 
   * > If no extra internal bandwidth is purchased, this parameter is not returned.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The expiration time of the purchased bandwidth. The time follows the ISO 8601 standard in the *yyyy-MM-dd* T *HH:mm:ss* Z format.
   * 
   * > If no extra internal bandwidth is purchased, this parameter is not returned.
   * 
   * @example
   * 2021-03-06T16:00:00Z
   */
  bandwidthExpireTime?: string;
  /**
   * @remarks
   * The billing method of the bandwidth plan. Valid values:
   * 
   * *   **0**: pay-as-you-go
   * *   **1**: subscription
   * 
   * @example
   * 0
   */
  bandwidthPrePaid?: string;
  /**
   * @remarks
   * The time when the extra internal bandwidth that you purchased for temporary use expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > If no extra internal bandwidth for temporary use is purchased or the extra internal bandwidth that you purchased for temporary use has expired, **0** is returned for this parameter.
   * 
   * @example
   * 0
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether the instance has unexpired bandwidth plans. Valid values:
   * 
   * *   **true**: The instance has unexpired bandwidth plans.
   * *   **false**: The instance does not have unexpired bandwidth plans.
   * 
   * > If no extra internal bandwidth is purchased, this parameter is not returned.
   * 
   * @example
   * true
   */
  hasPrePaidBandWidthOrderRunning?: boolean;
  intranetBandWidthBurst?: number;
  /**
   * @remarks
   * The internal bandwidth of the instance. This parameter indicates the combined bandwidth of all shards in the instance. Unit: Mbit/s.
   * 
   * @example
   * 102
   */
  intranetBandwidth?: number;
  /**
   * @remarks
   * The ID of the request.
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

