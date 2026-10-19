// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntranetAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the purchased bandwidth. Valid values:
   * * **true**: Enabled.
   * * **false**: Disabled.
   * 
   * > This parameter is not returned if no bandwidth has been purchased.
   * 
   * @example
   * true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The expiration time of the purchased bandwidth, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format.
   * > This parameter is not returned if no additional bandwidth has been purchased for the instance.
   * 
   * @example
   * 2021-03-06T16:00:00Z
   */
  bandwidthExpireTime?: string;
  /**
   * @remarks
   * The billing method of the bandwidth plan. Valid values:
   * - **0**: pay-as-you-go.
   * - **1**: subscription.
   * 
   * @example
   * 0
   */
  bandwidthPrePaid?: string;
  /**
   * @remarks
   * The expiration time of the temporary bandwidth, in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format.
   * > If no temporary bandwidth adjustment has been performed on the instance or the temporary bandwidth has expired, this parameter returns **0**.
   * 
   * @example
   * 0
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the instance has an unexpired bandwidth plan. Valid values:
   * * **true**: An unexpired bandwidth plan exists.
   * * **false**: No unexpired bandwidth plan exists.
   * > This parameter is not returned if no additional bandwidth has been purchased for the instance.
   * 
   * @example
   * true
   */
  hasPrePaidBandWidthOrderRunning?: boolean;
  intranetBandWidthBurst?: number;
  /**
   * @remarks
   * The current internal network bandwidth of the instance. This parameter indicates the total bandwidth of all shards in the instance. Unit: MB/s.
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

