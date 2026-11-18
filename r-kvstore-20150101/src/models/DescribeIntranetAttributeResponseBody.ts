// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntranetAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether auto-renewal is enabled for the purchased bandwidth. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * > This parameter is not returned if no bandwidth is purchased.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The expiration time of the purchased bandwidth. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format.
   * > This parameter is not returned if no additional bandwidth is purchased for the instance.
   * 
   * @example
   * 2021-03-06T16:00:00Z
   */
  bandwidthExpireTime?: string;
  /**
   * @remarks
   * The billing method of the bandwidth plan. Valid values:
   * - **0**: Pay-as-you-go.
   * - **1**: Subscription.
   * 
   * @example
   * 0
   */
  bandwidthPrePaid?: string;
  /**
   * @remarks
   * The expiration time of the temporary bandwidth. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format.
   * > If no temporary bandwidth adjustment has been performed on the instance or the temporary bandwidth has expired, this parameter returns **0**.
   * 
   * @example
   * 0
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies whether the instance has unexpired bandwidth plans. Valid values:
   * * **true**: The instance has unexpired bandwidth plans.
   * * **false**: The instance does not have unexpired bandwidth plans.
   * 
   * > This parameter is not returned if no additional bandwidth is purchased for the instance.
   * 
   * @example
   * true
   */
  hasPrePaidBandWidthOrderRunning?: boolean;
  /**
   * @remarks
   * The burst quota for the internal network bandwidth.
   * 
   * @example
   * 0
   */
  intranetBandWidthBurst?: number;
  /**
   * @remarks
   * The current internal network bandwidth of the instance. This value is the sum of the bandwidth of all shards in the instance. Unit: MB/s.
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

