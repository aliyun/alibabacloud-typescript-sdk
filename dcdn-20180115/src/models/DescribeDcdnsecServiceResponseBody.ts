// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnsecServiceResponseBodyOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the instance was locked.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnsecServiceResponseBodyOperationLocks extends $dara.Model {
  lockReason?: DescribeDcdnsecServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnsecServiceResponseBodyOperationLocksLockReason },
    };
  }

  validate() {
    if(Array.isArray(this.lockReason)) {
      $dara.Model.validateArray(this.lockReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnsecServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the renewed service takes effect. The time is displayed in UTC.
   * 
   * @example
   * 2021-09-30T16:00:00Z
   */
  changingAffectTime?: string;
  /**
   * @remarks
   * The new metering method for the renewed DCDN. Valid values:
   * 
   * *   **PayByTraffic**: pay by data transfer
   * *   **PayByBandwidth**: pay by bandwidth
   * *   **PayByBandwidth95**: pay by 95th percentile bandwidth
   * *   **PayByBandwidth_monthavg**: pay by monthly average bandwidth
   * *   **PayByBandwidth_month4th**: pay by fourth peak bandwidth per month
   * *   **PayByBandwidth_monthday95avg**: pay by monthly average 95th percentile bandwidth
   * *   **PayByBandwidth_nighthalf95**: pay by 95th percentile bandwidth (50% off during nighttime)
   * 
   * @example
   * PayByBandwidth
   */
  changingChargeType?: string;
  /**
   * @remarks
   * The number of accelerated domain names that use DCDN.
   * 
   * @example
   * 130
   */
  domainNum?: string;
  /**
   * @remarks
   * The service expiration time.
   * 
   * @example
   * 2021-09-26T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metering method for traffic.
   * 
   * @example
   * PayBySecTraffic
   */
  flowType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dcdn_dcdnsec_public_cn-123***
   */
  instanceId?: string;
  /**
   * @remarks
   * The current metering method. Valid values:
   * 
   * *   **PayByTraffic**: pay by data transfer
   * *   **PayByBandwidth**: pay by bandwidth
   * *   **PayByBandwidth95**: pay by 95th percentile bandwidth
   * *   **PayByBandwidth_monthavg**: pay by monthly average bandwidth
   * *   **PayByBandwidth_month4th**: pay by fourth peak bandwidth per month
   * *   **PayByBandwidth_monthday95avg**: pay by monthly average 95th percentile bandwidth
   * *   **PayByBandwidth_nighthalf95**: pay by 95th percentile bandwidth (50% off during nighttime)
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The lock status of DCDN.
   */
  operationLocks?: DescribeDcdnsecServiceResponseBodyOperationLocks;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E20B46E1-9BCD-10E5-AAEF-6D7B737467A1
   */
  requestId?: string;
  /**
   * @remarks
   * The metering method for requests.
   * 
   * @example
   * PayBySecRequest
   */
  requestType?: string;
  /**
   * @remarks
   * The service activation time.
   * 
   * @example
   * 2021-08-26T02:52:08Z
   */
  startTime?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * enterprise
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      domainNum: 'DomainNum',
      endTime: 'EndTime',
      flowType: 'FlowType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      operationLocks: 'OperationLocks',
      requestId: 'RequestId',
      requestType: 'RequestType',
      startTime: 'StartTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      domainNum: 'string',
      endTime: 'string',
      flowType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      operationLocks: DescribeDcdnsecServiceResponseBodyOperationLocks,
      requestId: 'string',
      requestType: 'string',
      startTime: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

