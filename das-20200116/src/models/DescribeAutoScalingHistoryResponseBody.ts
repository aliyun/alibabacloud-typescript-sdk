// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoScalingHistoryResponseBodyDataSpecHistory extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the internal scaling task. Valid values:
   * 
   * - **Insufficient_Balance**: The account balance is insufficient or there are unpaid orders.
   * - **REACH_SPEC_UPPERBOUND**: The upper limit of the instance specification has been reached.
   * - **Control_Error_Timeout_Msg**: The control task timed out.
   * - **Invoke_Rds_Api_Error_Msg**: Failed to call the RDS API.
   * 
   * @example
   * Insufficient_Balance
   */
  errorCode?: string;
  /**
   * @remarks
   * The number of CPU cores of the original instance.
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
   * The memory size of the original instance. Unit: GB.
   * 
   * @example
   * 8
   */
  originMemory?: number;
  /**
   * @remarks
   * The type of the automatic performance extension task. Valid values:
   * - **SCALE_UP**: Automatic specification extension.
   * - **SCALE_DOWN**: Automatic specification scale-down.
   * 
   * @example
   * SCALE_UP
   */
  scaleType?: string;
  /**
   * @remarks
   * The number of CPU cores of the target instance.
   * 
   * @example
   * 8
   */
  targetCore?: number;
  /**
   * @remarks
   * The target instance type.
   * 
   * @example
   * mysql.n2.xlarge.2c
   */
  targetInstanceClass?: string;
  /**
   * @remarks
   * The memory size of the target instance. Unit: GB.
   * 
   * @example
   * 16
   */
  targetMemory?: number;
  /**
   * @remarks
   * The task execution status. Valid values:
   * - **true**: The task was executed successfully.
   * - **false**: The task failed.
   * 
   * @example
   * true
   */
  taskExcuteStatus?: boolean;
  /**
   * @remarks
   * The task execution time. The value is a UNIX timestamp. Unit: milliseconds.
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
   * The Redis bandwidth elastic scaling history records. This parameter is not supported.
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
   * The Redis resource scaling history records. This parameter is not supported.
   */
  resource?: { [key: string]: any }[];
  /**
   * @remarks
   * The Redis automatic shard scaling history records. This parameter is not supported.
   */
  shard?: { [key: string]: any }[];
  /**
   * @remarks
   * The automatic performance extension history records.
   */
  specHistory?: DescribeAutoScalingHistoryResponseBodyDataSpecHistory[];
  /**
   * @remarks
   * The storage expansion history records. This parameter is not supported.
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
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The elastic scaling history records.
   */
  data?: DescribeAutoScalingHistoryResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
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
   * - **true**: The request was successful.
   * - **false**: The request failed.
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

