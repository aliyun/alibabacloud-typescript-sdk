// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggTaskGroupRequestTags extends $dara.Model {
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

export class CreateAggTaskGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the aggregation task group. Only the RecordingRuleYaml format is supported. The configuration must meet the format requirements of RecordingRule in open source Prometheus.
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
   * The configuration type of the aggregation task group. Default value: RecordingRuleYaml, which is the RecordingRule format of open source Prometheus.
   * 
   * @example
   * RecordingRuleYaml
   */
  aggTaskGroupConfigType?: string;
  /**
   * @remarks
   * The name of the aggregation task group.
   * 
   * This parameter is required.
   * 
   * @example
   * test-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * The cron expression used when the scheduling mode is set to Cron. For example, 0/1 * * * * indicates that the task is scheduled every 1 minute starting from minute 0.
   * 
   * @example
   * 0/1 * * * *
   */
  cronExpr?: string;
  /**
   * @remarks
   * The fixed delay time for scheduling. Unit: seconds. Default value: 30.
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
   * The UNIX timestamp in seconds for the scheduling start time.
   * 
   * @example
   * 1724996015
   */
  fromTime?: number;
  /**
   * @remarks
   * The maximum number of retries for executing the aggregation task. Default value: 20.
   * 
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @remarks
   * The maximum retry time to execute the aggregation node. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * The precheck configuration. By default, this parameter is not configured. The input string must be valid JSON.
   * 
   * @example
   * {"policy":"skip","prometheusId":"xxx","query":"scalar(sum(count_over_time(up{job=\\"_arms/kubelet/cadvisor\\"}[15s])) / 21)","threshold":0.5,"timeout":15,"type":"promql"}
   */
  precheckString?: string;
  /**
   * @remarks
   * The scheduling mode. Valid values: Cron and FixedRate. Default value: FixedRate.
   * 
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @remarks
   * The scheduling time expression. Use @s or @m to specify the alignment granularity of the scheduling time window. Default value: @m.
   * 
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @remarks
   * The status of the aggregation task group. Valid values: Running and Stopped. Default value: Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags of the resource group.
   */
  tags?: CreateAggTaskGroupRequestTags[];
  /**
   * @remarks
   * The target Prometheus instance ID of the aggregation node group.
   * 
   * This parameter is required.
   * 
   * @example
   * rw-pq4apob9jm
   */
  targetPrometheusId?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds for the scheduling end time. A value of 0 indicates that the scheduling does not stop.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
   * Specifies whether to overwrite the existing resource with the same name when creating the aggregation task group.
   * 
   * @example
   * true
   */
  overrideIfExists?: boolean;
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
      overrideIfExists: 'overrideIfExists',
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
      tags: { 'type': 'array', 'itemType': CreateAggTaskGroupRequestTags },
      targetPrometheusId: 'string',
      toTime: 'number',
      overrideIfExists: 'boolean',
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

