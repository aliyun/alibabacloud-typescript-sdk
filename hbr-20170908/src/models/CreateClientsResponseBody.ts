// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientsResponseBodyInstanceStatusesInstanceStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2zegp3cdu******uj9i
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether an HBR client can be installed on the ECS instance. Valid values:
   * 
   * *   true: An HBR client can be installed on the ECS instance.
   * *   false: An HBR client cannot be installed on the ECS instance.
   * 
   * @example
   * true
   */
  validInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      validInstance: 'ValidInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      validInstance: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBodyInstanceStatuses extends $dara.Model {
  instanceStatus?: CreateClientsResponseBodyInstanceStatusesInstanceStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatus: { 'type': 'array', 'itemType': CreateClientsResponseBodyInstanceStatusesInstanceStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatus)) {
      $dara.Model.validateArray(this.instanceStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status of the ECS instance. If you specify more than one instance IDs in the request and the status of an ECS instance does not meet the requirements to install an HBR client, an error message is returned based on the value of this parameter.
   */
  instanceStatuses?: CreateClientsResponseBodyInstanceStatuses;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A8A9AE4-F798-5E6D-853E-10F9F5A1BD4E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.
   * 
   * @example
   * t-000h9x5t02vhyksf1x7k
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceStatuses: 'InstanceStatuses',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceStatuses: CreateClientsResponseBodyInstanceStatuses,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(this.instanceStatuses && typeof (this.instanceStatuses as any).validate === 'function') {
      (this.instanceStatuses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

