// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnfinishedOnceTaskResponseBodyOnceTasksTaskImageInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * ack-jenkins-****
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * a765ba1435e7f9446065370e9a41****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ACK-test-****
   */
  clusterName?: string;
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * default_digest
   */
  digest?: string;
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * ***s.com/sas_test/baseli***
   */
  image?: string;
  /**
   * @remarks
   * The instance ID of the node.
   * 
   * @example
   * i-0xi5mxvtmfw9****
   */
  nodeInstanceId?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 172.18.XXX.XXX
   */
  nodeIp?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * pztest****
   */
  nodeName?: string;
  /**
   * @remarks
   * The pod of the image.
   * 
   * @example
   * expoit-law-****
   */
  pod?: string;
  /**
   * @remarks
   * The region ID of the server image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-r88w2vryp8m****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * testyyy
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * bitn***
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the image repository.
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v1.20-002-a2*****
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      digest: 'Digest',
      image: 'Image',
      nodeInstanceId: 'NodeInstanceId',
      nodeIp: 'NodeIp',
      nodeName: 'NodeName',
      pod: 'Pod',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      digest: 'string',
      image: 'string',
      nodeInstanceId: 'string',
      nodeIp: 'string',
      nodeName: 'string',
      pod: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnfinishedOnceTaskResponseBodyOnceTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task ends.
   * 
   * @example
   * 1670307567000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the task is complete. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  finish?: number;
  /**
   * @remarks
   * The number of assets on which the task is complete.
   * 
   * @example
   * 67
   */
  finishCount?: number;
  /**
   * @remarks
   * The progress percentage of the task.
   * 
   * @example
   * 75
   */
  progress?: number;
  /**
   * @remarks
   * The execution duration of the task.
   * 
   * @example
   * 1670307567000
   */
  realRunTime?: number;
  /**
   * @remarks
   * The execution result of the task.
   * 
   * @example
   * TASK_NOT_SUPPORT_REGION
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the task is started.
   * 
   * @example
   * 1640102400000
   */
  startTime?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **INIT**: The task is not started.
   * *   **START**: The task is started.
   * *   **SUCCESS**: The task is complete.
   * *   **TIMEOUT**: The task timed out.
   * 
   * @example
   * SUCCESS
   */
  statusText?: string;
  /**
   * @remarks
   * The objective of the task.
   * 
   * @example
   * 238cf050a7270dd6940602e70f1e5a11eeaf4e02035f445b7f613ff5e064****
   */
  target?: string;
  /**
   * @remarks
   * The type of the assets that are scanned. Valid values:
   * 
   * *   **IMAGE_REPO**: image repository
   * *   **IMAGE**: image
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 9fb50f2af8bb67c9fdb684194c83****
   */
  taskId?: string;
  /**
   * @remarks
   * The information about the image scan task.
   */
  taskImageInfo?: ListUnfinishedOnceTaskResponseBodyOnceTasksTaskImageInfo;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      finish: 'Finish',
      finishCount: 'FinishCount',
      progress: 'Progress',
      realRunTime: 'RealRunTime',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      statusText: 'StatusText',
      target: 'Target',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskImageInfo: 'TaskImageInfo',
      taskName: 'TaskName',
      taskType: 'TaskType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      finish: 'number',
      finishCount: 'number',
      progress: 'number',
      realRunTime: 'number',
      resultInfo: 'string',
      startTime: 'number',
      status: 'number',
      statusText: 'string',
      target: 'string',
      targetType: 'string',
      taskId: 'string',
      taskImageInfo: ListUnfinishedOnceTaskResponseBodyOnceTasksTaskImageInfo,
      taskName: 'string',
      taskType: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.taskImageInfo && typeof (this.taskImageInfo as any).validate === 'function') {
      (this.taskImageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUnfinishedOnceTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the tasks.
   */
  onceTasks?: ListUnfinishedOnceTaskResponseBodyOnceTasks[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5CF78A7-30AA-59DB-847F-13EE3AE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onceTasks: 'OnceTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onceTasks: { 'type': 'array', 'itemType': ListUnfinishedOnceTaskResponseBodyOnceTasks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onceTasks)) {
      $dara.Model.validateArray(this.onceTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

