// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmBannerResponseBodyBannerStatus extends $dara.Model {
  /**
   * @remarks
   * The cause of the alert. If **Type** is set to **sandbox**, valid values:
   * 
   * - **fivefold**: The queries per second (QPS) of your service exceeds five times the upper limit of your plan.
   * 
   * - **4count**: The QPS of your service has exceeded the upper limit of your plan for four or more days.
   * 
   * - **exceed10w**: The peak QPS of your service exceeds 100,000.
   * 
   * - **costProtection**: Billing protection is triggered.
   * 
   * @example
   * 4count
   */
  cause?: string;
  /**
   * @remarks
   * The count associated with the alert at the time it was triggered.
   * 
   * - If **Type** is set to **sandbox**, this parameter indicates the number of days that the QPS has exceeded the upper limit of your plan.
   * 
   * @example
   * 9008
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether an alert is triggered. Valid values:
   * 
   * - **true**: An alert is triggered. If **Type** is set to **sandbox**, the instance is in the sandbox.
   * 
   * - **false**: No alert is triggered. If **Type** is set to **sandbox**, the instance is not in the sandbox.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The alert type. Valid value:
   * 
   * - **sandbox**: a sandbox alert.
   * 
   * @example
   * sandbox
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      count: 'Count',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      count: 'number',
      status: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmBannerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status information of the alert banner.
   */
  bannerStatus?: DescribeAlarmBannerResponseBodyBannerStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5555DC36-0CF2-5AA3-B1C7-D6BD8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bannerStatus: 'BannerStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bannerStatus: DescribeAlarmBannerResponseBodyBannerStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.bannerStatus && typeof (this.bannerStatus as any).validate === 'function') {
      (this.bannerStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

