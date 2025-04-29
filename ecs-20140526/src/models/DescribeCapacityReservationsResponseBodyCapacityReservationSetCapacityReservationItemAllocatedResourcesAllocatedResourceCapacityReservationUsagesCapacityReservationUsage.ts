// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapacityReservationsResponseBodyCapacityReservationSetCapacityReservationItemAllocatedResourcesAllocatedResourceCapacityReservationUsagesCapacityReservationUsage extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 105909559088****
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * maxcompute.aliyuncs.com
   */
  serviceName?: string;
  /**
   * @remarks
   * The number of instances that are used by the Alibaba Cloud account or service.
   * 
   * @example
   * 20
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      serviceName: 'ServiceName',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      serviceName: 'string',
      usedAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

