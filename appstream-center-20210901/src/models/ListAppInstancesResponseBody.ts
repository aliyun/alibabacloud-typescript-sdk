// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstancesResponseBodyAppInstanceModelsBindInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the end user that is bound to the application instance.
   * 
   * @example
   * app.test
   */
  endUserId?: string;
  /**
   * @remarks
   * The use duration of the application instance. Unit: seconds.
   * 
   * @example
   * 2000
   */
  usageDuration?: number;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      usageDuration: 'UsageDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      usageDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstancesResponseBodyAppInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-dk8p95irqfst9****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the application instance.
   * 
   * @example
   * ai-8dl7dzchklmka****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The information about the binding between the application instance and end users.
   */
  bindInfo?: ListAppInstancesResponseBodyAppInstanceModelsBindInfo;
  /**
   * @remarks
   * The billing method of the app instance. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid**: pay-as-you-go
   * 
   * >  This parameter is returned only if the ChargeResourceMode parameter of the delivery group to which the app instance belongs is set to Node.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the application instance was created.
   * 
   * @example
   * 2023-03-07T20:29:19.000+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the application instance was updated.
   * 
   * @example
   * 2023-03-07T20:29:19.000+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The public IP address associated with the primary NIC. This value is returned only if `StrategyType` is set to `Mixed`.
   * 
   * @example
   * 10.13.13.211
   */
  mainEthPublicIp?: string;
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The ID of the node on which the app instance runs.
   * 
   * >  This parameter is returned only if the ChargeResourceMode parameter of the delivery group to which the app instance belongs is set to Node.
   * 
   * @example
   * i-bp13********
   */
  nodeId?: string;
  /**
   * @remarks
   * The session status. This parameter is returned only if the application instance is in the `RUNNING` state.
   * 
   * Valid values:
   * 
   * *   disconnect: disconnected
   * *   connect: connected
   * 
   * @example
   * connect
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The status of the application instance.
   * 
   * @example
   * BOUND
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      bindInfo: 'BindInfo',
      chargeType: 'ChargeType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      mainEthPublicIp: 'MainEthPublicIp',
      networkInterfaceIp: 'NetworkInterfaceIp',
      nodeId: 'NodeId',
      sessionStatus: 'SessionStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      bindInfo: ListAppInstancesResponseBodyAppInstanceModelsBindInfo,
      chargeType: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      mainEthPublicIp: 'string',
      networkInterfaceIp: 'string',
      nodeId: 'string',
      sessionStatus: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.bindInfo && typeof (this.bindInfo as any).validate === 'function') {
      (this.bindInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The app instances.
   */
  appInstanceModels?: ListAppInstancesResponseBodyAppInstanceModels[];
  /**
   * @remarks
   * The page number of the returned page. We recommend that you configure this parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. The value cannot be greater than `100`. We recommend that you configure this parameter.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceModels: 'AppInstanceModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceModels: { 'type': 'array', 'itemType': ListAppInstancesResponseBodyAppInstanceModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceModels)) {
      $dara.Model.validateArray(this.appInstanceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

