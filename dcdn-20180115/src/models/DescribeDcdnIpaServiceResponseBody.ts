// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why the instance is locked. For example, a value of **financial** indicates that an overdue payment exists.
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

export class DescribeDcdnIpaServiceResponseBodyOperationLocks extends $dara.Model {
  lockReason?: DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason },
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

export class DescribeDcdnIpaServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the change of the billing method starts to take effect. The time is in GMT. This time appears on the frontend only when it is later than the current time.
   * 
   * @example
   * 2018-03-31T16:00:00Z
   */
  changingAffectTime?: string;
  /**
   * @remarks
   * The new billing method to take effect. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-data-transfer
   * *   **PayByBandwidth**: pay-by-bandwidth
   * *   **PayByBandwidth95**: pay-by-95th percentile bandwidth
   * *   **PayByBandwidth_monthavg**: pay-by-monthly average bandwidth
   * *   **PayByBandwidth_month4th**: pay-by-fourth peak bandwidth per month
   * *   **PayByBandwidth_monthday95avg**: pay-by-monthly average 95th percentile bandwidth
   * *   **PayByBandwidth_nighthalf95**: pay-by-95th percentile bandwidth (50% off during nighttime)
   * 
   * @example
   * PayByBandwidth
   */
  changingChargeType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1883927335936173
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-data-transfer
   * *   **PayByBandwidth**: pay-by-bandwidth
   * *   **PayByBandwidth95**: pay-by-95th percentile bandwidth
   * *   **PayByBandwidth_monthavg**: pay-by-monthly average bandwidth
   * *   **PayByBandwidth_month4th**: pay-by-fourth peak bandwidth per month
   * *   **PayByBandwidth_monthday95avg**: pay-by-monthly average 95th percentile bandwidth
   * *   **PayByBandwidth_nighthalf95**: pay-by-95th percentile bandwidth (50% off during nighttime)
   * 
   * @example
   * PayByBandwidth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The time when the DCDN service was activated. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2018-03-19T11:16:11Z
   */
  openingTime?: string;
  /**
   * @remarks
   * The lock status of secure DCDN.
   */
  operationLocks?: DescribeDcdnIpaServiceResponseBodyOperationLocks;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EF2AEBC2-EDBD-41CF-BF64-7E095D42D6EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      openingTime: 'OpeningTime',
      operationLocks: 'OperationLocks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      openingTime: 'string',
      operationLocks: DescribeDcdnIpaServiceResponseBodyOperationLocks,
      requestId: 'string',
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

