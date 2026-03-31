// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmBannerResponseBodyBannerStatus extends $dara.Model {
  /**
   * @example
   * 4count
   */
  cause?: string;
  /**
   * @example
   * 9008
   */
  count?: number;
  /**
   * @example
   * true
   */
  status?: boolean;
  /**
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
  bannerStatus?: DescribeAlarmBannerResponseBodyBannerStatus;
  /**
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

