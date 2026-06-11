// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggTaskGroupRequestTags extends $dara.Model {
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

export class UpdateAggTaskGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the aggregation task group. Currently, only the RecordingRuleYaml format is supported. The configuration must comply with the RecordingRule format of open source Prometheus.
   * 
   * This parameter is required.
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
   * The type of the aggregation task group configuration. The default value is RecordingRuleYaml, which is the RecordingRule format of open source Prometheus.
   * 
   * @example
   * RecordingRuleYaml
   */
  aggTaskGroupConfigType?: string;
  /**
   * @remarks
   * The name of the aggregation task group.
   * 
   * @example
   * test-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * The cron expression for scheduling when the scheduling mode is set to Cron. For example, \\`0/1 \\* \\* \\* \\*\\` indicates that the task is scheduled every 1 minute, starting from the 0th minute.
   * 
   * @example
   * 0/1 * * * *
   */
  cronExpr?: string;
  /**
   * @remarks
   * The fixed delay for scheduling. Unit: seconds. The default value is 30.
   * 
   * @example
   * 30
   */
  delay?: number;
  /**
   * @remarks
   * The description of the aggregation task group.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds that indicates the start time of the scheduling.
   * 
   * @example
   * 1724996015
   */
  fromTime?: number;
  /**
   * @remarks
   * The maximum number of retries to execute the aggregation task. The default value is 20.
   * 
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @remarks
   * The maximum retry time to execute the aggregation task. Unit: seconds. The default value is 600.
   * 
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * The dry run configuration. This parameter is not configured by default. The input string must be a valid JSON string.
   * 
   * @example
   * {"policy":"skip","prometheusId":"xxx","query":"scalar(sum(count_over_time(up{job=\\"_arms/kubelet/cadvisor\\"}[15s])) / 21)","threshold":0.5,"timeout":15,"type":"promql"}
   */
  precheckString?: string;
  /**
   * @remarks
   * The scheduling mode. Valid values: Cron and FixedRate. The default value is FixedRate.
   * 
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @remarks
   * The scheduling time expression. Recommended values are \\`@s\\` and \\`@m\\`. This expression indicates the granularity at which the scheduling time window is snapped. The default value is \\`@m\\`.
   * 
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @remarks
   * The status of the aggregation task group. Valid values: Running and Stopped. The default value is Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource group.
   */
  tags?: UpdateAggTaskGroupRequestTags[];
  /**
   * @remarks
   * The ID of the target Prometheus instance for the aggregation task group.
   * 
   * This parameter is required.
   * 
   * @example
   * rw-pq4apob9jm
   */
  targetPrometheusId?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds that indicates the end time of the scheduling. A value of 0 indicates that the scheduling does not stop.
   * 
   * @example
   * 0
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      aggTaskGroupConfig: 'aggTaskGroupConfig',
      aggTaskGroupConfigType: 'aggTaskGroupConfigType',
      aggTaskGroupName: 'aggTaskGroupName',
      cronExpr: 'cronExpr',
      delay: 'delay',
      description: 'description',
      fromTime: 'fromTime',
      maxRetries: 'maxRetries',
      maxRunTimeInSeconds: 'maxRunTimeInSeconds',
      precheckString: 'precheckString',
      scheduleMode: 'scheduleMode',
      scheduleTimeExpr: 'scheduleTimeExpr',
      status: 'status',
      tags: 'tags',
      targetPrometheusId: 'targetPrometheusId',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggTaskGroupConfig: 'string',
      aggTaskGroupConfigType: 'string',
      aggTaskGroupName: 'string',
      cronExpr: 'string',
      delay: 'number',
      description: 'string',
      fromTime: 'number',
      maxRetries: 'number',
      maxRunTimeInSeconds: 'number',
      precheckString: 'string',
      scheduleMode: 'string',
      scheduleTimeExpr: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': UpdateAggTaskGroupRequestTags },
      targetPrometheusId: 'string',
      toTime: 'number',
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

