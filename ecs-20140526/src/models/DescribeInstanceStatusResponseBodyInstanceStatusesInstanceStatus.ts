// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceStatusResponseBodyInstanceStatusesInstanceStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp1j4i2jdf3owlhe****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Pending: The instance is being created.
   * *   Running: The instance is running.
   * *   Starting: The instance is being started.
   * *   Stopping: The instance is being stopped.
   * *   Stopped: The instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

