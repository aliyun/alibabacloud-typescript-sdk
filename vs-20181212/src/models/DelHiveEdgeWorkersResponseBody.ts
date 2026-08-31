// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelHiveEdgeWorkersResponseBodyFailedInstances extends $dara.Model {
  /**
   * @remarks
   * The workload ID.
   * 
   * @example
   * ew-1226d588c69449209ee963161c067b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The failure reason.
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

export class DelHiveEdgeWorkersResponseBodySuccessInstances extends $dara.Model {
  /**
   * @remarks
   * The workload ID.
   * 
   * @example
   * ew-1226d588c69449209ee963161c067b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The message.
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

export class DelHiveEdgeWorkersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of workload instances that failed to be unbound.
   * 
   * @example
   * 0
   */
  failedInstanceCount?: number;
  /**
   * @remarks
   * The list of workload instances that failed to be unbound.
   */
  failedInstances?: DelHiveEdgeWorkersResponseBodyFailedInstances[];
  /**
   * @remarks
   * **The request ID.**
   * 
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The number of workload instances that were successfully unbound.
   * 
   * @example
   * 5
   */
  successInstanceCount?: number;
  /**
   * @remarks
   * The list of workload instances that were successfully unbound.
   */
  successInstances?: DelHiveEdgeWorkersResponseBodySuccessInstances[];
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
      failedInstances: { 'type': 'array', 'itemType': DelHiveEdgeWorkersResponseBodyFailedInstances },
      requestId: 'string',
      successInstanceCount: 'number',
      successInstances: { 'type': 'array', 'itemType': DelHiveEdgeWorkersResponseBodySuccessInstances },
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

