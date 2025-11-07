// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyStatisticsResponseBodyResultObjectItems extends $dara.Model {
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 2025-10-11
   */
  date?: string;
  /**
   * @remarks
   * Client initialization pass rate.
   * 
   * @example
   * 60
   */
  initDevicePassRate?: string;
  /**
   * @remarks
   * Number of server initializations.
   * 
   * @example
   * 15
   */
  initService?: number;
  /**
   * @remarks
   * Server initialization conversion rate.
   * 
   * @example
   * 26.67
   */
  initServiceConversionRate?: string;
  /**
   * @remarks
   * Server initialization pass rate.
   * 
   * @example
   * 20
   */
  initServicePassRate?: string;
  /**
   * @remarks
   * Pass rate.
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
   * Number of client initializations.
   * 
   * @example
   * 73
   */
  initDevice?: number;
  /**
   * @remarks
   * Number of identity deduplication client initializations.
   * 
   * @example
   * 9
   */
  initDeviceId?: number;
  /**
   * @remarks
   * Number of successful identity deduplication client initializations.
   * 
   * @example
   * 9
   */
  initDeviceIdSuccess?: number;
  /**
   * @remarks
   * Number of client initialization calls.
   * 
   * @example
   * 73
   */
  initDeviceSuccess?: number;
  /**
   * @remarks
   * Number of service-side initializations.
   * 
   * @example
   * 73
   */
  initService?: number;
  /**
   * @remarks
   * Total number of identity deduplication server initialization requests.
   * 
   * @example
   * 9
   */
  initServiceId?: number;
  /**
   * @remarks
   * Number of successful identity deduplication server initializations.
   * 
   * @example
   * 9
   */
  initServiceIdSuccess?: number;
  /**
   * @remarks
   * Number of successful service-side initialization authentications.
   * 
   * @example
   * 134
   */
  initServiceSuccess?: number;
  /**
   * @remarks
   * Daily pass/conversion rate (PV).
   */
  items?: DescribeVerifyStatisticsResponseBodyResultObjectItems[];
  /**
   * @remarks
   * Number of client verifications.
   * 
   * @example
   * 15
   */
  verifyDevice?: number;
  /**
   * @remarks
   * Number of identity deduplication client authentications.
   * 
   * @example
   * 9
   */
  verifyDeviceId?: number;
  /**
   * @remarks
   * Number of successful identity deduplication client verifications.
   * 
   * @example
   * 6
   */
  verifyDeviceIdSuccess?: number;
  /**
   * @remarks
   * Number of successful identity deduplication client authentications.
   * 
   * @example
   * 3
   */
  verifyDeviceIdSuccessPassed?: number;
  /**
   * @remarks
   * Number of successful client authentications.
   * 
   * @example
   * 15
   */
  verifyDeviceSuccess?: number;
  /**
   * @remarks
   * Number of successful client authentications.
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
   * ID of this request.
   * 
   * @example
   * 4E27D502-1287-526A-910C-881A3F023914
   */
  requestId?: string;
  /**
   * @remarks
   * Statistical results
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

