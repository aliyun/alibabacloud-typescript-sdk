// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstancesResponseBodyAppInstanceModelsBindInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the end user bound to the instance.
   * 
   * @example
   * app.test
   */
  endUserId?: string;
  /**
   * @remarks
   * The usage duration of the instance. Unit: seconds.
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
   * The delivery group ID.
   * 
   * @example
   * aig-dk8p95irqfst9****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * @example
   * ai-8dl7dzchklmka****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The binding information between the instance and the user.
   */
  bindInfo?: ListAppInstancesResponseBodyAppInstanceModelsBindInfo;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * > This parameter is returned only when the billing mode of the delivery group to which the instance belongs is set to resource-based billing (ChargeResourceMode=Node).
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-03-07T20:29:19.000+08:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-03-07T20:29:19.000+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The public IP address of the primary network interface controller (NIC). This value is returned only when the network policy (`StrategyType`) of the delivery group is set to mixed mode pattern (`Mixed`). Otherwise, this value is empty.
   * 
   * @example
   * 10.13.13.211
   */
  mainEthPublicIp?: string;
  networkInterfaceId?: string;
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The ID of the node on which the instance runs.
   * > This parameter is returned only when the billing mode of the delivery group to which the instance belongs is set to resource-based billing (ChargeResourceMode=Node).
   * 
   * @example
   * i-bp13********
   */
  nodeId?: string;
  /**
   * @remarks
   * The session connection status. This value is returned only when the instance status is running (`RUNNING`). Otherwise, this value is empty.
   * 
   * @example
   * connect
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The application instance status.
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
      networkInterfaceId: 'NetworkInterfaceId',
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
      networkInterfaceId: 'string',
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
   * The list of queried application instances.
   */
  appInstanceModels?: ListAppInstancesResponseBodyAppInstanceModels[];
  /**
   * @remarks
   * The page number of the query results to display. Specify this parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page. Maximum value: `100`. Specify this parameter.
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
   * The total number of query results.
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

