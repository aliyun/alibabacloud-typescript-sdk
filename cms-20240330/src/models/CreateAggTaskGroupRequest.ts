// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggTaskGroupRequestTags extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
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
   * @example
   * RecordingRuleYaml
   */
  aggTaskGroupConfigType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-group
   */
  aggTaskGroupName?: string;
  /**
   * @example
   * 0/1 * * * *
   */
  cronExpr?: string;
  /**
   * @example
   * 30
   */
  delay?: number;
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * 1724996015
   */
  fromTime?: number;
  /**
   * @example
   * 20
   */
  maxRetries?: number;
  /**
   * @example
   * 600
   */
  maxRunTimeInSeconds?: number;
  /**
   * @example
   * {"policy":"skip","prometheusId":"xxx","query":"scalar(sum(count_over_time(up{job=\\"_arms/kubelet/cadvisor\\"}[15s])) / 21)","threshold":0.5,"timeout":15,"type":"promql"}
   */
  precheckString?: string;
  /**
   * @example
   * FixedRate
   */
  scheduleMode?: string;
  /**
   * @example
   * @m
   */
  scheduleTimeExpr?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: CreateAggTaskGroupRequestTags[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rw-pq4apob9jm
   */
  targetPrometheusId?: string;
  /**
   * @example
   * 0
   */
  toTime?: number;
  /**
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

