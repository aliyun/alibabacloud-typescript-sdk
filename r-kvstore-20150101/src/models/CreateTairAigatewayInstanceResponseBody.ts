// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTairAIGatewayInstanceResponseBodyInstanceResultsInstanceResults extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  instanceId?: string;
  orderId?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      orderId: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTairAIGatewayInstanceResponseBodyInstanceResults extends $dara.Model {
  instanceResults?: CreateTairAIGatewayInstanceResponseBodyInstanceResultsInstanceResults[];
  static names(): { [key: string]: string } {
    return {
      instanceResults: 'instanceResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceResults: { 'type': 'array', 'itemType': CreateTairAIGatewayInstanceResponseBodyInstanceResultsInstanceResults },
    };
  }

  validate() {
    if(Array.isArray(this.instanceResults)) {
      $dara.Model.validateArray(this.instanceResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTairAIGatewayInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that failed to be created in a batch. This parameter is not returned when a single instance is created.
   * 
   * @example
   * true
   */
  failCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * tg-bp1zxszhcgatnx****
   */
  instanceId?: string;
  instanceResults?: CreateTairAIGatewayInstanceResponseBodyInstanceResults;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. The ID of the virtual node.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 20881824000****
   */
  orderId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D622714-AEDD-4609-9167-F5DDD3D1****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances successfully created in a batch. This parameter is not returned when a single instance is created.
   * 
   * @example
   * 2
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of instances created in a batch. This parameter is not returned when a single instance is created.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. The ID of the virtual cluster.
   * 
   * @example
   * vc-16965a9267*****-*****
   */
  VClusterId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. The instance ID of the VCluster virtual cluster where the VNode resides.
   * 
   * @example
   * tk-2ze4bba3c8fe****
   */
  vkName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-l
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      instanceId: 'InstanceId',
      instanceResults: 'InstanceResults',
      nodeId: 'NodeId',
      orderId: 'OrderId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      totalCount: 'TotalCount',
      VClusterId: 'VClusterId',
      vkName: 'VkName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      instanceId: 'string',
      instanceResults: CreateTairAIGatewayInstanceResponseBodyInstanceResults,
      nodeId: 'string',
      orderId: 'number',
      regionId: 'string',
      requestId: 'string',
      successCount: 'number',
      totalCount: 'number',
      VClusterId: 'string',
      vkName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.instanceResults && typeof (this.instanceResults as any).validate === 'function') {
      (this.instanceResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

