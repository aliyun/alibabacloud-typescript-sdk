// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogOffAllSessionsInAppInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * Note:
   * - The delivery group must meet the following status requirements:
   * 1. ChargeType=PostPaid
   * 2. NodePool.StrategyType=NODE_SCALING_BY_SCHEDULE
   * 3. Status=PUBLISHED
   * 4. The current time is not within the NodePool.RecurrenceSchedules window.
   * - You can call the ListAppInstanceGroup or GetAppInstanceGroup operation to query the current status of the delivery group.
   * - You can call the CreateAppInstanceGroup operation to create a delivery group that meets the requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

