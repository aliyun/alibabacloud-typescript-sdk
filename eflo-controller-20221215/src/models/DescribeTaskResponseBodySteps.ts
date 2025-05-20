// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTaskResponseBodyStepsSubTasks } from "./DescribeTaskResponseBodyStepsSubTasks";


export class DescribeTaskResponseBodySteps extends $dara.Model {
  /**
   * @remarks
   * Step Failure Message
   * 
   * @example
   * get taskinfo failed
   */
  message?: string;
  /**
   * @remarks
   * Stage Tag
   * 
   * @example
   * Node scaling
   */
  stageTag?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  startTime?: string;
  /**
   * @remarks
   * Step Name
   * 
   * @example
   * create_vpd
   */
  stepName?: string;
  /**
   * @remarks
   * Step Execution State
   * 
   * @example
   * execution_success
   */
  stepState?: string;
  /**
   * @remarks
   * Step Type
   * 
   * @example
   * normal
   */
  stepType?: string;
  /**
   * @remarks
   * Subtasks
   */
  subTasks?: DescribeTaskResponseBodyStepsSubTasks[];
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2022-11-30T02:20:14.852Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      stageTag: 'StageTag',
      startTime: 'StartTime',
      stepName: 'StepName',
      stepState: 'StepState',
      stepType: 'StepType',
      subTasks: 'SubTasks',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      stageTag: 'string',
      startTime: 'string',
      stepName: 'string',
      stepState: 'string',
      stepType: 'string',
      subTasks: { 'type': 'array', 'itemType': DescribeTaskResponseBodyStepsSubTasks },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subTasks)) {
      $dara.Model.validateArray(this.subTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

