// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppStackTaskSteps extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The step duration.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1706518652
   */
  endTime?: number;
  /**
   * @remarks
   * The step ID.
   * 
   * @example
   * VPC_CREATE_NETWORK
   */
  id?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The step name.
   * 
   * @example
   * Initialize VPC network
   */
  name?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1706518652
   */
  startTime?: number;
  /**
   * @remarks
   * The step status.
   * 
   * @example
   * WAIT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      endTime: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      startTime: 'number',
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

export class AppStackTask extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1706518652
   */
  createTime?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1706518652
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-789y
   */
  instanceId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * palworld
   */
  stackId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1706518652
   */
  startTime?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * WAIT
   */
  status?: string;
  /**
   * @remarks
   * The step list.
   */
  steps?: AppStackTaskSteps[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-789y-deploy
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      stackId: 'StackId',
      startTime: 'StartTime',
      status: 'Status',
      steps: 'Steps',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      stackId: 'string',
      startTime: 'number',
      status: 'string',
      steps: { 'type': 'array', 'itemType': AppStackTaskSteps },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

