// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggTaskGroupRequestTags extends $dara.Model {
  /**
   * @remarks
   * Key of the resource group tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * Value of the resource group tag.
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
   * Aggregation task group configuration.
   * Currently, only the “RecordingRuleYaml” format is supported, which must comply with the format requirements of open-source Prometheus RecordingRules.
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
   * Aggregation task group configuration type, default is “RecordingRuleYaml” (open-source Prometheus RecordingRule format).
   * 
   * @example
   * RecordingRuleYaml
   */
  aggTaskGroupConfigType?: string;
  /**
   * @remarks
   * Aggregation task group name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-group
   */
  aggTaskGroupName?: string;
  /**
   * @remarks
   * When the scheduling mode is selected as “Cron”, this is the specific scheduling expression. For example, “0/1 * * * *” means starting from 0 minutes and scheduling every 1 minute.
   * 
   * @example
   * 0/1 * * * *
   */
  cronExpr?: string;
  /**
   * @remarks
   * Fixed delay time for scheduling, in seconds, default is 30.
   * 
   * @example
   * 30
   */
  delay?: number;
  /**
   * @remarks
   * Description of the aggregation task group.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The second-level timestamp corresponding to the start time of the schedule.
   * 
   * @example
   * 1724996015
   */
  fromTime?: number;
  /**
   * @remarks
   * Maximum number of retries for executing the aggregation task, default is 20.
   * 
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @remarks
   * Maximum retry time for executing the aggregation task, in seconds, default is 600.
   * 
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @remarks
   * Pre-check configuration, no configuration by default. The input string needs to be correctly parsed as JSON.
   * 
   * @example
   * {"policy":"skip","prometheusId":"xxx","query":"scalar(sum(count_over_time(up{job=\\"_arms/kubelet/cadvisor\\"}[15s])) / 21)","threshold":0.5,"timeout":15,"type":"promql"}
   */
  precheckString?: string;
  /**
   * @remarks
   * Scheduling mode, either “Cron” or “FixedRate”, default is “FixedRate”.
   * 
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @remarks
   * Scheduling time expression, recommended “@s” or “@m”, indicating the alignment granularity of the scheduling time window, default is “@m”.
   * 
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @remarks
   * Status of the aggregation task group, either “Running” or “Stopped”. Default is Running.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Resource group tags.
   */
  tags?: CreateAggTaskGroupRequestTags[];
  /**
   * @remarks
   * The target Prometheus instance ID of the aggregation task group.
   * 
   * This parameter is required.
   * 
   * @example
   * rw-pq4apob9jm
   */
  targetPrometheusId?: string;
  /**
   * @remarks
   * The second-level timestamp corresponding to the end time of the schedule, 0 indicates that the scheduling does not stop.
   * 
   * @example
   * 0
   */
  toTime?: number;
  /**
   * @remarks
   * Whether to overwrite and update if a resource with the same name exists when creating an aggregation task group.
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

