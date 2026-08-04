// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMachineGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances in the machine group.
   */
  count?: number;
  /**
   * @remarks
   * The default driver.
   */
  defaultDriver?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is returned only when `PayType` is `PrePay`.
   */
  duration?: string;
  /**
   * @remarks
   * The ECS instance type of the machine group.
   */
  ecsType?: string;
  /**
   * @remarks
   * The time when the machine group was created.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The expiration time. This parameter is returned only when `PayType` is `PrePay`.
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The time when the machine group was last modified.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The time when the machine group started.
   */
  gmtStarted?: string;
  /**
   * @remarks
   * The ID of the machine group.
   */
  machineGroupID?: string;
  /**
   * @remarks
   * The order ID.
   */
  orderID?: string;
  /**
   * @remarks
   * The instance ID of the order.
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The PAI resource ID.
   */
  PAIResourceID?: string;
  /**
   * @remarks
   * The payment type. Valid values: `PostPay` (pay-as-you-go) and `PrePay` (subscription).
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle. This parameter is returned only when `PayType` is `PrePay`.
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID.
   */
  regionID?: string;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the machine group.
   */
  status?: string;
  /**
   * @remarks
   * The drivers that the machine group supports.
   */
  supportedDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      defaultDriver: 'DefaultDriver',
      duration: 'Duration',
      ecsType: 'EcsType',
      gmtCreated: 'GmtCreated',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      gmtStarted: 'GmtStarted',
      machineGroupID: 'MachineGroupID',
      orderID: 'OrderID',
      orderInstanceId: 'OrderInstanceId',
      PAIResourceID: 'PAIResourceID',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionID: 'RegionID',
      requestId: 'RequestId',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      defaultDriver: 'string',
      duration: 'string',
      ecsType: 'string',
      gmtCreated: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      gmtStarted: 'string',
      machineGroupID: 'string',
      orderID: 'string',
      orderInstanceId: 'string',
      PAIResourceID: 'string',
      payType: 'string',
      pricingCycle: 'string',
      regionID: 'string',
      requestId: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

