// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingHistoryResponseBodyDataSpecHistory extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the scaling task. Valid values:
   * 
   * *   **Insufficient_Balance**: The account has insufficient balance or an unpaid order.
   * *   **REACH_SPEC_UPPERBOUND**: The instance type reaches the upper limit.
   * *   **Control_Error_Timeout_Msg**: The management task timed out.
   * *   **Invoke_Rds_Api_Error_Msg**: Failed to call the ApsaraDB RDS API.
   * 
   * @example
   * Insufficient_Balance
   */
  errorCode?: string;
  /**
   * @remarks
   * The original number of CPU cores of the instance.
   * 
   * @example
   * 4
   */
  originCore?: number;
  /**
   * @remarks
   * The original instance type.
   * 
   * @example
   * mysql.n2.large.2c
   */
  originInstanceClass?: string;
  /**
   * @remarks
   * The original memory size of the instance. Unit: GB.
   * 
   * @example
   * 8
   */
  originMemory?: number;
  /**
   * @remarks
   * The type of the automatic performance scaling task. Valid values:
   * 
   * *   **SCALE_UP**: automatic instance type scale-up task.
   * *   **SCALE_DOWN**: automatic instance type scale-down task.
   * 
   * @example
   * SCALE_UP
   */
  scaleType?: string;
  /**
   * @remarks
   * The destination number of CPU cores of the instance.
   * 
   * @example
   * 8
   */
  targetCore?: number;
  /**
   * @remarks
   * The destination instance type.
   * 
   * @example
   * mysql.n2.xlarge.2c
   */
  targetInstanceClass?: string;
  /**
   * @remarks
   * The destination memory size of the instance. Unit: GB.
   * 
   * @example
   * 16
   */
  targetMemory?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **true**: The task was successful.
   * *   **false**: The task failed.
   * 
   * @example
   * true
   */
  taskExcuteStatus?: boolean;
  /**
   * @remarks
   * The time when the task was run. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1684830763000
   */
  taskTime?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      originCore: 'OriginCore',
      originInstanceClass: 'OriginInstanceClass',
      originMemory: 'OriginMemory',
      scaleType: 'ScaleType',
      targetCore: 'TargetCore',
      targetInstanceClass: 'TargetInstanceClass',
      targetMemory: 'TargetMemory',
      taskExcuteStatus: 'TaskExcuteStatus',
      taskTime: 'TaskTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      originCore: 'number',
      originInstanceClass: 'string',
      originMemory: 'number',
      scaleType: 'string',
      targetCore: 'number',
      targetInstanceClass: 'string',
      targetMemory: 'number',
      taskExcuteStatus: 'boolean',
      taskTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The history of automatic bandwidth scaling of ApsaraDB for Redis instances. This feature is not supported.
   */
  bandwidth?: { [key: string]: any }[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The history of resource scale-out of ApsaraDB for Redis instances. This feature is not supported.
   */
  resource?: { [key: string]: any }[];
  /**
   * @remarks
   * The history of automatic shard scale-out of ApsaraDB for Redis instances. This feature is not supported.
   */
  shard?: { [key: string]: any }[];
  /**
   * @remarks
   * The history of automatic performance scaling.
   */
  specHistory?: DescribeAutoScalingHistoryResponseBodyDataSpecHistory[];
  /**
   * @remarks
   * The history of storage expansion. This feature is not supported.
   */
  storage?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      resource: 'Resource',
      shard: 'Shard',
      specHistory: 'SpecHistory',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      resource: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      shard: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      specHistory: { 'type': 'array', 'itemType': DescribeAutoScalingHistoryResponseBodyDataSpecHistory },
      storage: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidth)) {
      $dara.Model.validateArray(this.bandwidth);
    }
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    if(Array.isArray(this.shard)) {
      $dara.Model.validateArray(this.shard);
    }
    if(Array.isArray(this.specHistory)) {
      $dara.Model.validateArray(this.specHistory);
    }
    if(Array.isArray(this.storage)) {
      $dara.Model.validateArray(this.storage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScalingHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The history of auto scaling.
   */
  data?: DescribeAutoScalingHistoryResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request was successful, **Successful** is returned. Otherwise, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAutoScalingHistoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

