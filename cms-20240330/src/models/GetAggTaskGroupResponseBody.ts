// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggTaskGroupResponseBodyAggTaskGroupTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource group tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource group tag.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggTaskGroupResponseBodyAggTaskGroup extends $dara.Model {
  /**
   * @remarks
   * The configuration of the aggregation task group.
   * 
   * @example
   * groups:
   * - name: "node.rules"
   *   interval: "60s"
   *   rules:
   *   - record: "node_namespace_pod:kube_pod_info:"
   *     expr: "max(label_replace(kube_pod_info{job=\\"kubernetes-pods-kube-state-metrics\\"\\
   *       }, \\"pod\\", \\"$1\\", \\"pod\\", \\"(.*)\\")) by (node, namespace, pod, cluster)"
   */
  aggTaskGroupConfig?: string;
  /**
   * @remarks
   * The summary of the aggregation task group configuration.
   * 
   * @example
   * a54136xxx
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @remarks
   * The ID of the aggregation task group.
   * 
   * @example
   * aggTaskGroup-xx
   */
  aggTaskGroupId?: string;
  /**
   * @remarks
   * The name of the aggregation task group.
   * 
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * The scheduling expression of the aggregation task group when the scheduling mode is set to Cron.
   * 
   * @example
   * 0 1 3 * * ? *
   */
  cronExpr?: string;
  /**
   * @remarks
   * The fixed delay time for scheduling, in seconds.
   * 
   * @example
   * 2
   */
  delay?: number;
  /**
   * @remarks
   * The description of the aggregation task group.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds that corresponds to the start time of the scheduling. This parameter is not yet in effect.
   * 
   * @example
   * 1757409495
   */
  fromTime?: number;
  /**
   * @remarks
   * The maximum number of retries to execute the aggregation task.
   * 
   * @example
   * 2
   */
  maxRetries?: number;
  /**
   * @remarks
   * The maximum runtime of the aggregation task, in seconds.
   * 
   * @example
   * 50
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * The dry run configuration.
   * 
   * @example
   * {"policy":"skip","prometheusId":"rw-xx","query":"noPrecheck","threshold":0.5,"timeout":15,"type":"none"}
   */
  precheckString?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling mode.
   * 
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @remarks
   * The scheduling time expression.
   * 
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @remarks
   * The ID of the source Prometheus instance for the aggregation task group.
   * 
   * @example
   * rw-xxx
   */
  sourcePrometheusId?: string;
  /**
   * @remarks
   * The status of the aggregation task group.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource group.
   */
  tags?: GetAggTaskGroupResponseBodyAggTaskGroupTags[];
  /**
   * @remarks
   * The ID of the target Prometheus instance for the aggregation task group.
   * 
   * @example
   * rw-xxx
   */
  targetPrometheusId?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds that corresponds to the end time of the scheduling.
   * 
   * @example
   * 1757409495
   */
  toTime?: number;
  /**
   * @remarks
   * The time when the aggregation task group was updated. This is a timestamp.
   * 
   * @example
   * 1757409499000
   */
  updateTime?: string;
  /**
   * @remarks
   * The user to which the aggregation task group belongs.
   * 
   * @example
   * 123xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroupConfig: 'aggTaskGroupConfig',
      aggTaskGroupConfigHash: 'aggTaskGroupConfigHash',
      aggTaskGroupId: 'aggTaskGroupId',
      aggTaskGroupName: 'aggTaskGroupName',
      cronExpr: 'cronExpr',
      delay: 'delay',
      description: 'description',
      fromTime: 'fromTime',
      maxRetries: 'maxRetries',
      maxRunTimeInSeconds: 'maxRunTimeInSeconds',
      precheckString: 'precheckString',
      regionId: 'regionId',
      scheduleMode: 'scheduleMode',
      scheduleTimeExpr: 'scheduleTimeExpr',
      sourcePrometheusId: 'sourcePrometheusId',
      status: 'status',
      tags: 'tags',
      targetPrometheusId: 'targetPrometheusId',
      toTime: 'toTime',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroupConfig: 'string',
      aggTaskGroupConfigHash: 'string',
      aggTaskGroupId: 'string',
      aggTaskGroupName: 'string',
      cronExpr: 'string',
      delay: 'number',
      description: 'string',
      fromTime: 'number',
      maxRetries: 'number',
      maxRunTimeInSeconds: 'number',
      precheckString: 'string',
      regionId: 'string',
      scheduleMode: 'string',
      scheduleTimeExpr: 'string',
      sourcePrometheusId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetAggTaskGroupResponseBodyAggTaskGroupTags },
      targetPrometheusId: 'string',
      toTime: 'number',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggTaskGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The aggregation task group.
   */
  aggTaskGroup?: GetAggTaskGroupResponseBodyAggTaskGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68DAF543-35DF-5762-BE90-F5C00B5DC036
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroup: 'aggTaskGroup',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroup: GetAggTaskGroupResponseBodyAggTaskGroup,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.aggTaskGroup && typeof (this.aggTaskGroup as any).validate === 'function') {
      (this.aggTaskGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

