// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnServiceResponseBodyOperationLocks } from "./DescribeCdnServiceResponseBodyOperationLocks";


export class DescribeCdnServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the metering method for the next cycle takes effect. The time is displayed in GMT.
   * 
   * @example
   * 2019-11-27T16:00:00Z
   */
  changingAffectTime?: string;
  /**
   * @remarks
   * The metering method for the next cycle. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-data-transfer
   * *   **PayByBandwidth**: pay-by-bandwidth
   * 
   * @example
   * PayByTraffic
   */
  changingChargeType?: string;
  changingDynamicBillingType?: string;
  dynamicBillingType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * aliuidxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The current metering method. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-data-transfer
   * *   **PayByBandwidth**: pay-by-bandwidth
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The time when the service was activated. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2019-02-28T13:11:49Z
   */
  openingTime?: string;
  /**
   * @remarks
   * The lock status.
   */
  operationLocks?: DescribeCdnServiceResponseBodyOperationLocks;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changingAffectTime: 'ChangingAffectTime',
      changingChargeType: 'ChangingChargeType',
      changingDynamicBillingType: 'ChangingDynamicBillingType',
      dynamicBillingType: 'DynamicBillingType',
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
      changingDynamicBillingType: 'string',
      dynamicBillingType: 'string',
      instanceId: 'string',
      internetChargeType: 'string',
      openingTime: 'string',
      operationLocks: DescribeCdnServiceResponseBodyOperationLocks,
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

