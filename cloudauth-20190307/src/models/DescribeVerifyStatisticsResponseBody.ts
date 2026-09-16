// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyStatisticsResponseBodyResultObjectItems extends $dara.Model {
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 2025-10-11
   */
  date?: string;
  /**
   * @remarks
   * The client-side init pass rate.
   * 
   * @example
   * 60
   */
  initDevicePassRate?: string;
  /**
   * @remarks
   * The number of server-side init requests.
   * 
   * @example
   * 15
   */
  initService?: number;
  /**
   * @remarks
   * The server-side init conversion rate.
   * 
   * @example
   * 26.67
   */
  initServiceConversionRate?: string;
  /**
   * @remarks
   * The server-side init pass rate.
   * 
   * @example
   * 20
   */
  initServicePassRate?: string;
  /**
   * @remarks
   * The pass rate.
   * 
   * @example
   * 75
   */
  passRate?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      initDevicePassRate: 'InitDevicePassRate',
      initService: 'InitService',
      initServiceConversionRate: 'InitServiceConversionRate',
      initServicePassRate: 'InitServicePassRate',
      passRate: 'PassRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      initDevicePassRate: 'string',
      initService: 'number',
      initServiceConversionRate: 'string',
      initServicePassRate: 'string',
      passRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyStatisticsResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The number of client-side init attempts.
   * 
   * @example
   * 73
   */
  initDevice?: number;
  /**
   * @remarks
   * The number of identity deduplication client-side init requests.
   * 
   * @example
   * 9
   */
  initDeviceId?: number;
  /**
   * @remarks
   * The number of successful identity deduplication client-side init requests.
   * 
   * @example
   * 9
   */
  initDeviceIdSuccess?: number;
  /**
   * @remarks
   * The number of client-side init calls.
   * 
   * @example
   * 73
   */
  initDeviceSuccess?: number;
  /**
   * @remarks
   * The number of server-side init attempts.
   * 
   * @example
   * 73
   */
  initService?: number;
  /**
   * @remarks
   * The total number of identity deduplication server-side init requests.
   * 
   * @example
   * 9
   */
  initServiceId?: number;
  /**
   * @remarks
   * The number of successful identity deduplication server-side init requests.
   * 
   * @example
   * 9
   */
  initServiceIdSuccess?: number;
  /**
   * @remarks
   * The number of successful server-side init authentications.
   * 
   * @example
   * 134
   */
  initServiceSuccess?: number;
  /**
   * @remarks
   * The daily pass rate and conversion rate statistics (PV).
   */
  items?: DescribeVerifyStatisticsResponseBodyResultObjectItems[];
  /**
   * @remarks
   * The number of client-side verification attempts.
   * 
   * @example
   * 15
   */
  verifyDevice?: number;
  /**
   * @remarks
   * The number of identity deduplication client-side authentication attempts.
   * 
   * @example
   * 9
   */
  verifyDeviceId?: number;
  /**
   * @remarks
   * The number of successful identity deduplication client-side verifications.
   * 
   * @example
   * 6
   */
  verifyDeviceIdSuccess?: number;
  /**
   * @remarks
   * The number of successful identity deduplication client-side authentications.
   * 
   * @example
   * 3
   */
  verifyDeviceIdSuccessPassed?: number;
  /**
   * @remarks
   * The number of successful client-side authentications.
   * 
   * @example
   * 15
   */
  verifyDeviceSuccess?: number;
  /**
   * @remarks
   * The number of successful client-side authentications.
   * 
   * @example
   * 6
   */
  verifyDeviceSuccessPassed?: number;
  static names(): { [key: string]: string } {
    return {
      initDevice: 'InitDevice',
      initDeviceId: 'InitDeviceId',
      initDeviceIdSuccess: 'InitDeviceIdSuccess',
      initDeviceSuccess: 'InitDeviceSuccess',
      initService: 'InitService',
      initServiceId: 'InitServiceId',
      initServiceIdSuccess: 'InitServiceIdSuccess',
      initServiceSuccess: 'InitServiceSuccess',
      items: 'Items',
      verifyDevice: 'VerifyDevice',
      verifyDeviceId: 'VerifyDeviceId',
      verifyDeviceIdSuccess: 'VerifyDeviceIdSuccess',
      verifyDeviceIdSuccessPassed: 'VerifyDeviceIdSuccessPassed',
      verifyDeviceSuccess: 'VerifyDeviceSuccess',
      verifyDeviceSuccessPassed: 'VerifyDeviceSuccessPassed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initDevice: 'number',
      initDeviceId: 'number',
      initDeviceIdSuccess: 'number',
      initDeviceSuccess: 'number',
      initService: 'number',
      initServiceId: 'number',
      initServiceIdSuccess: 'number',
      initServiceSuccess: 'number',
      items: { 'type': 'array', 'itemType': DescribeVerifyStatisticsResponseBodyResultObjectItems },
      verifyDevice: 'number',
      verifyDeviceId: 'number',
      verifyDeviceIdSuccess: 'number',
      verifyDeviceIdSuccessPassed: 'number',
      verifyDeviceSuccess: 'number',
      verifyDeviceSuccessPassed: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E27D502-1287-526A-910C-881A3F023914
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics result.
   */
  resultObject?: DescribeVerifyStatisticsResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeVerifyStatisticsResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

