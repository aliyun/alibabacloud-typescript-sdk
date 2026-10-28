// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupMachineGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the machine group creator.
   * 
   * @example
   * 1612285282502326
   */
  creatorID?: string;
  /**
   * @remarks
   * The cloud disk performance level for filtering.
   * 
   * @example
   * PL2
   */
  diskPL?: string;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The IDs of the machine groups. Separate multiple IDs with commas.
   * 
   * @example
   * mg105ecqwfe49hwb
   */
  machineGroupIDs?: string;
  /**
   * @remarks
   * The name of the machine group.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - Asc: Ascending order.
   * - Desc: Descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The purchased instance ID.
   * 
   * @example
   * 236553689400333
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing duration. If PaymentDurationUnit is set to Month, valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  paymentDuration?: string;
  /**
   * @remarks
   * The billing duration unit of the machine group.
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - Creating: The instance is being created.
   * - Ready: The instance is running.
   * - Expiring: The instance is about to expire.
   * - Expired: The instance has expired.
   * - Stopping: The instance is being stopped.
   * - Stopped: The instance is stopped.
   * 
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      diskPL: 'DiskPL',
      ecsSpec: 'EcsSpec',
      machineGroupIDs: 'MachineGroupIDs',
      name: 'Name',
      order: 'Order',
      orderInstanceId: 'OrderInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      diskPL: 'string',
      ecsSpec: 'string',
      machineGroupIDs: 'string',
      name: 'string',
      order: 'string',
      orderInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      sortBy: 'string',
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

