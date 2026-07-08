// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddHiveEdgeWorkersResponseBodyFailedInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ew-1226d588c69449209ee963161c067b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Error 1062 (23000): Duplicate entry \\"hive-4fbf3928d40e43948b98acdb4fb5aaed-ew-1226d588c69449209ee9631\\" for key \\"PRIMARY\\"
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHiveEdgeWorkersResponseBodySuccessInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ew-1226d588c69449209ee963161c067b04
   */
  instanceId?: string;
  /**
   * @remarks
   * A message indicating the result of the operation.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddHiveEdgeWorkersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that failed to be added.
   * 
   * @example
   * 0
   */
  failedInstanceCount?: number;
  /**
   * @remarks
   * A list of instances that failed to be added.
   */
  failedInstances?: AddHiveEdgeWorkersResponseBodyFailedInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances that were successfully added.
   * 
   * @example
   * 5
   */
  successInstanceCount?: number;
  /**
   * @remarks
   * A list of successfully added instances.
   */
  successInstances?: AddHiveEdgeWorkersResponseBodySuccessInstances[];
  static names(): { [key: string]: string } {
    return {
      failedInstanceCount: 'FailedInstanceCount',
      failedInstances: 'FailedInstances',
      requestId: 'RequestId',
      successInstanceCount: 'SuccessInstanceCount',
      successInstances: 'SuccessInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedInstanceCount: 'number',
      failedInstances: { 'type': 'array', 'itemType': AddHiveEdgeWorkersResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'number',
      successInstances: { 'type': 'array', 'itemType': AddHiveEdgeWorkersResponseBodySuccessInstances },
    };
  }

  validate() {
    if(Array.isArray(this.failedInstances)) {
      $dara.Model.validateArray(this.failedInstances);
    }
    if(Array.isArray(this.successInstances)) {
      $dara.Model.validateArray(this.successInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

