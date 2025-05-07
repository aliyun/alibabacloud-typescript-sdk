// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AppStackTaskSteps } from "./AppStackTaskSteps";


export class AppStackTask extends $dara.Model {
  /**
   * @example
   * 1706518652
   */
  createTime?: number;
  /**
   * @example
   * 1706518652
   */
  endTime?: number;
  /**
   * @example
   * i-789y
   */
  instanceId?: string;
  /**
   * @example
   * palworld
   */
  stackId?: string;
  /**
   * @example
   * 1706518652
   */
  startTime?: number;
  /**
   * @example
   * WAIT
   */
  status?: string;
  steps?: AppStackTaskSteps[];
  /**
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

