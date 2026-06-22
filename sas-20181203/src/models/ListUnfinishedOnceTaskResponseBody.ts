// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnfinishedOnceTaskResponseBodyOnceTasksTaskImageInfo extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * ack-jenkins-****
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * a765ba1435e7f9446065370e9a41****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name used to query the instance list of a specific cluster under the service.
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
   * The node instance ID.
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
   * The node name.
   * 
   * @example
   * pztest****
   */
  nodeName?: string;
  /**
   * @remarks
   * The image pod information.
   * 
   * @example
   * expoit-law-****
   */
  pod?: string;
  /**
   * @remarks
   * The region where the server image resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The image repository ID.
   * 
   * @example
   * crr-r88w2vryp8m****
   */
  repoId?: string;
  /**
   * @remarks
   * The image repository name.
   * 
   * @example
   * testyyy
   */
  repoName?: string;
  /**
   * @remarks
   * The image namespace.
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
   * The end time.
   * 
   * @example
   * 1670307567000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the task is completed. Valid values:
   * - **0**: not completed
   * - **1**: completed.
   * 
   * @example
   * 1
   */
  finish?: number;
  /**
   * @remarks
   * The number of completed records.
   * 
   * @example
   * 67
   */
  finishCount?: number;
  /**
   * @remarks
   * The export progress percentage (%).
   * 
   * @example
   * 75
   */
  progress?: number;
  /**
   * @remarks
   * The task execution time.
   * 
   * @example
   * 1670307567000
   */
  realRunTime?: number;
  /**
   * @remarks
   * The execution result.
   * 
   * @example
   * TASK_NOT_SUPPORT_REGION
   */
  resultInfo?: string;
  /**
   * @remarks
   * The start time of the task execution.
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
   * The running status of the task. Valid values:
   * - **INIT**: pending
   * - **START**: started
   * - **SUCCESS**: completed
   * - **TIMEOUT**: timed out.
   * 
   * @example
   * SUCCESS
   */
  statusText?: string;
  /**
   * @remarks
   * The task target.
   * 
   * @example
   * 238cf050a7270dd6940602e70f1e5a11eeaf4e02035f445b7f613ff5e064****
   */
  target?: string;
  /**
   * @remarks
   * The scan object type. Valid values:
   * - **IMAGE_REPO**: image repository.
   * - **IMAGE**: image.
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 9fb50f2af8bb67c9fdb684194c83****
   */
  taskId?: string;
  /**
   * @remarks
   * The image scan information.
   */
  taskImageInfo?: ListUnfinishedOnceTaskResponseBodyOnceTasksTaskImageInfo;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of entries. This parameter takes effect for paged query and paging.
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
   * The task details.
   */
  onceTasks?: ListUnfinishedOnceTaskResponseBodyOnceTasks[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

