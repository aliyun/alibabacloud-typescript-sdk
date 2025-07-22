// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserConfigResponseBodyFreeTier extends $dara.Model {
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 个
   */
  initBaseUnit?: string;
  /**
   * @example
   * 5000
   */
  initBaseValue?: number;
  /**
   * @example
   * 个
   */
  initShowUnit?: string;
  /**
   * @example
   * 5000
   */
  initShowValue?: string;
  /**
   * @example
   * true
   */
  isFreeTierUser?: boolean;
  /**
   * @example
   * 个
   */
  periodBaseUnit?: string;
  /**
   * @example
   * 3000
   */
  periodBaseValue?: number;
  /**
   * @example
   * 个
   */
  periodShowUnit?: string;
  /**
   * @example
   * 3000
   */
  periodShowValue?: string;
  /**
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      initBaseUnit: 'InitBaseUnit',
      initBaseValue: 'InitBaseValue',
      initShowUnit: 'InitShowUnit',
      initShowValue: 'InitShowValue',
      isFreeTierUser: 'IsFreeTierUser',
      periodBaseUnit: 'PeriodBaseUnit',
      periodBaseValue: 'PeriodBaseValue',
      periodShowUnit: 'PeriodShowUnit',
      periodShowValue: 'PeriodShowValue',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      initBaseUnit: 'string',
      initBaseValue: 'number',
      initShowUnit: 'string',
      initShowValue: 'string',
      isFreeTierUser: 'boolean',
      periodBaseUnit: 'string',
      periodBaseValue: 'number',
      periodShowUnit: 'string',
      periodShowValue: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  accountSufficient?: boolean;
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * true
   */
  enableEciDisk?: boolean;
  freeTier?: GetUserConfigResponseBodyFreeTier;
  /**
   * @example
   * true
   */
  freeTierSpecAvailable?: boolean;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "Access denied"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountSufficient: 'AccountSufficient',
      code: 'Code',
      enableEciDisk: 'EnableEciDisk',
      freeTier: 'FreeTier',
      freeTierSpecAvailable: 'FreeTierSpecAvailable',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSufficient: 'boolean',
      code: 'string',
      enableEciDisk: 'boolean',
      freeTier: GetUserConfigResponseBodyFreeTier,
      freeTierSpecAvailable: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.freeTier && typeof (this.freeTier as any).validate === 'function') {
      (this.freeTier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

