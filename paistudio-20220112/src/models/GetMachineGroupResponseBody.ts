// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMachineGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The default driver version.
   * 
   * @example
   * 535
   */
  defaultDriver?: string;
  /**
   * @remarks
   * The purchase duration.
   * 
   * @example
   * 2
   */
  duration?: string;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.c6.large
   */
  ecsType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-10T03:17:31Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 2023-08-22T00:00:00Z
   */
  gmtExpired?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStarted?: string;
  /**
   * @remarks
   * The machine group ID.
   * 
   * @example
   * mg1
   */
  machineGroupID?: string;
  /**
   * @remarks
   * The order ID.
   */
  orderID?: string;
  /**
   * @remarks
   * The order instance ID.
   * 
   * @example
   * 236553689400333
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The PAI resource ID.
   */
  PAIResourceID?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PrePay
   */
  payType?: string;
  /**
   * @remarks
   * The pricing cycle.
   * 
   * @example
   * Monthly
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionID?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2D0392B-D749-5C48-A98A-3FAE5C9444A6
   */
  requestId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The supported driver versions.
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

