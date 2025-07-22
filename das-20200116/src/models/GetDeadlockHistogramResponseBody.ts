// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadlockHistogramResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1729998000000
   */
  endTime?: string;
  /**
   * @example
   * pc-bp1u5mas9exx7****
   */
  instanceId?: string;
  /**
   * @example
   * 2
   */
  lockNumber?: number;
  /**
   * @example
   * pi-bp16v3824rt73****
   */
  nodeId?: string;
  /**
   * @example
   * 1729994400000
   */
  startTime?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * B6D17591-B48B-4D31-9CD6-1321B394****
   */
  taskId?: string;
  /**
   * @example
   * 108************
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      lockNumber: 'LockNumber',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      lockNumber: 'number',
      nodeId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeadlockHistogramResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetDeadlockHistogramResponseBodyData[];
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * 0A74B755-98B7-59DB-8724-1321B394****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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
      code: 'number',
      data: { 'type': 'array', 'itemType': GetDeadlockHistogramResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

