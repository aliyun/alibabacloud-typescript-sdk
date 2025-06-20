// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTaskResponseBodyStepsSubTasks } from "./DescribeTaskResponseBodyStepsSubTasks";


export class DescribeTaskResponseBodySteps extends $dara.Model {
  /**
   * @remarks
   * The error message of the step.
   * 
   * @example
   * get taskinfo failed
   */
  message?: string;
  /**
   * @remarks
   * The stage marker.
   * 
   * Valid values:
   * 
   * *   机器释放: Machine release.
   * *   节点并发初始化: Node concurrent initialization.
   * *   节点释放: Node release.
   * *   机器替换: Machine replacement.
   * *   节点缩容: Node scale-in.
   * *   提前续费: Early renewal.
   * *   物理机清理: Physical machine cleanup.
   * *   节点清理: Node cleanup.
   * *   创建K8s集群: Create Kubernetes cluster.
   * *   网络初始化: Network initialization.
   * *   节点重启: Node restart.
   * *   节点退订: Node unsubscribe.
   * *   集群扩容: Cluster scale-out.
   * *   异常机器释放: Abnormal machine release.
   * 
   * @example
   * 节点缩容
   */
  stageTag?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2022-11-30T2:00:00.852Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the step.
   * 
   * @example
   * create_vpd
   */
  stepName?: string;
  /**
   * @remarks
   * The step status.
   * 
   * Valid values:
   * 
   * *   execution_success
   * *   execution_failed
   * 
   * @example
   * execution_success
   */
  stepState?: string;
  /**
   * @remarks
   * The type of the step.
   * 
   * Valid values:
   * 
   * *   normal: A normal step has only one successor step.
   * *   dispersive: A dispersive step has multiple successor steps.
   * 
   * @example
   * normal
   */
  stepType?: string;
  /**
   * @remarks
   * The sub tasks.
   */
  subTasks?: DescribeTaskResponseBodyStepsSubTasks[];
  /**
   * @remarks
   * The update time.
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

