// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggTaskGroupResponseBodyAggTaskGroupTags extends $dara.Model {
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

export class GetAggTaskGroupResponseBodyAggTaskGroup extends $dara.Model {
  /**
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
   * a54136xxx
   */
  aggTaskGroupConfigHash?: string;
  /**
   * @example
   * aggTaskGroup-xx
   */
  aggTaskGroupId?: string;
  /**
   * @example
   * pipeline-aggtask-group
   */
  aggTaskGroupName?: string;
  /**
   * @example
   * 0 1 3 * * ? *
   */
  cronExpr?: string;
  /**
   * @example
   * 2
   */
  delay?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1757409495
   */
  fromTime?: number;
  /**
   * @example
   * 2
   */
  maxRetries?: number;
  /**
   * @example
   * 50
   */
  maxRunTimeInSeconds?: number;
  /**
   * @example
   * {"policy":"skip","prometheusId":"rw-xx","query":"noPrecheck","threshold":0.5,"timeout":15,"type":"none"}
   */
  precheckString?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
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
   * rw-xxx
   */
  sourcePrometheusId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  tags?: GetAggTaskGroupResponseBodyAggTaskGroupTags[];
  /**
   * @example
   * rw-xxx
   */
  targetPrometheusId?: string;
  /**
   * @example
   * 1757409495
   */
  toTime?: number;
  /**
   * @example
   * 1757409499000
   */
  updateTime?: string;
  /**
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
  aggTaskGroup?: GetAggTaskGroupResponseBodyAggTaskGroup;
  /**
   * @example
   * 68DAF543-35DF-5762-BE90-F5C00B5DC036
   */
  requestId?: string;
  /**
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

