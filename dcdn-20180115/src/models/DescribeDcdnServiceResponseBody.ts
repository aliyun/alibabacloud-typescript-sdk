// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnServiceResponseBodyOperationLocksLockReason extends $dara.Model {
  /**
   * @remarks
   * The reason why secure DCDN was locked. For example, a value of financial indicates that an overdue payment exists.
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

export class DescribeDcdnServiceResponseBodyOperationLocks extends $dara.Model {
  lockReason?: DescribeDcdnServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnServiceResponseBodyOperationLocksLockReason },
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

export class DescribeDcdnServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the renewed secure DCDN takes effect. The time is displayed in UTC.
   * 
   * @example
   * 2018-03-31T16:00:00Z
   */
  changingAffectTime?: string;
  /**
   * @remarks
   * The new metering method for the renewed secure DCDN. Valid values:
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
   * The ID of the instance.
   * 
   * @example
   * FP-mkqgwxxxx
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
   * The time when the DCDN service was activated. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2018-03-19T11:16:11Z
   */
  openingTime?: string;
  /**
   * @remarks
   * The lock status of DCDN.
   */
  operationLocks?: DescribeDcdnServiceResponseBodyOperationLocks;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF2AEBC2-EDBD-41CF-BF64-7E095D42D6EF
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the changes of the WebSocket configuration take effect. The value is the same as that of the ChangingAffectTime parameter. This parameter can be displayed in the console only if the specified time is later than the current time.
   * 
   * @example
   * 2018-03-19T11:16:11Z
   */
  websocketChangingTime?: string;
  /**
   * @remarks
   * The next effective billing method of WebSocket. Valid values: **websockettraffic** and **websocketbps**. A value of websockettraffic indicates that you are billed based on the traffic volume. A value of websocketbps indicates that you are billed based on the bandwidth.
   * 
   * @example
   * websocketbps
   */
  websocketChangingType?: string;
  /**
   * @remarks
   * The current billing method of WebSocket. Valid values: **websockettraffic** and **websocketbps**. A value of websockettraffic indicates that you are billed based on the traffic volume. A value of websocketbps indicates that you are billed based on the bandwidth.
   * 
   * @example
   * websocketbps
   */
  websocketType?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      instanceId: 'InstanceId',
      internetChargeType: 'InternetChargeType',
      openingTime: 'OpeningTime',
      operationLocks: 'OperationLocks',
      requestId: 'RequestId',
      websocketChangingTime: 'WebsocketChangingTime',
      websocketChangingType: 'WebsocketChangingType',
      websocketType: 'WebsocketType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingAffectTime: 'string',
      changingChargeType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      openingTime: 'string',
      operationLocks: DescribeDcdnServiceResponseBodyOperationLocks,
      requestId: 'string',
      websocketChangingTime: 'string',
      websocketChangingType: 'string',
      websocketType: 'string',
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

