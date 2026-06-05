// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddHiveEdgeWorkersResponseBodyFailedInstances extends $dara.Model {
  /**
   * @example
   * ew-1226d588c69449209ee963161c067b04
   */
  instanceId?: string;
  /**
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
   * @example
   * ew-1226d588c69449209ee963161c067b04
   */
  instanceId?: string;
  /**
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
   * @example
   * 0
   */
  failedInstanceCount?: number;
  failedInstances?: AddHiveEdgeWorkersResponseBodyFailedInstances[];
  /**
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  successInstanceCount?: number;
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

