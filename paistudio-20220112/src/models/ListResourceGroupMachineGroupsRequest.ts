// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupMachineGroupsRequest extends $dara.Model {
  /**
   * @example
   * 1612285282502326
   */
  creatorID?: string;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  machineGroupIDs?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 236553689400333
   */
  orderInstanceId?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  paymentDuration?: string;
  /**
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
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

