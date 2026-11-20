// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmBannerResponseBodyBannerStatus extends $dara.Model {
  /**
   * @remarks
   * The cause of the alerting. If the Alarm Metric is sandbox (**Type** is set to **sandbox**), valid values are:
   * 
   * - **fivefold**: The clean queries per second (QPS) exceeds the current specifications.
   * - **4count**: The accumulated actual clean QPS exceeds the current specifications.
   * - **exceed10w**: The actual peak clean QPS exceeds 100,000.
   * - **costProtection**: Billing protection is triggered.
   * 
   * @example
   * 4count
   */
  cause?: string;
  /**
   * @remarks
   * The usage when alerting is triggered.
   * 
   * - If the Alarm Metric is sandbox (**Type** is set to **sandbox**), this parameter indicates the number of days the quota is exceeded.
   * 
   * @example
   * 9008
   */
  count?: number;
  /**
   * @remarks
   * The alerting status. Valid values:
   * - **true**: Alerting is triggered. If the Alarm Metric is sandbox (**Type** is set to **sandbox**), the instance is in the sandbox.
   * - **false**: No alerting is triggered. If the Alarm Metric is sandbox (**Type** is set to **sandbox**), the instance is not in the sandbox.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The Alarm Metric. Valid values:
   * 
   * - **sandbox**: sandbox alerting.
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
   * The alert banner status information.
   */
  bannerStatus?: DescribeAlarmBannerResponseBodyBannerStatus;
  /**
   * @remarks
   * The ID of the request.
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

