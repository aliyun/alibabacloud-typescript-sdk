// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbnormalyEventsResponseBodyDataOptsResult extends $dara.Model {
  /**
   * @remarks
   * The diagnostic status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The URL of the diagnostic details.
   * 
   * @example
   * /diagnose/result/PhfFg456
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponseBodyDataOpts extends $dara.Model {
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * diagnose
   */
  label?: string;
  /**
   * @remarks
   * The diagnostic result of the anomaly item.
   */
  result?: ListAbnormalyEventsResponseBodyDataOptsResult;
  /**
   * @remarks
   * The diagnostic type.
   * 
   * @example
   * auto
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      result: 'result',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      result: ListAbnormalyEventsResponseBodyDataOptsResult,
      type: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponseBodyDataRawMetrics extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1761814928
   */
  endTime?: number;
  /**
   * @remarks
   * The list of metric values.
   */
  metrics?: string[];
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1761814928
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'end_time',
      metrics: 'metrics',
      startTime: 'start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      metrics: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1725801090000
   */
  createdAt?: number;
  /**
   * @remarks
   * The detailed description of the anomaly item.
   * 
   * @example
   * 节点发生OOM, 可查看OOM发生原因
   */
  description?: string;
  /**
   * @remarks
   * The diagnostic status. Valid values:
   * - 1: diagnosis ready.
   * - 2: diagnosis in progress.
   * - 3: diagnosis completed.
   * - 4: not diagnosable.
   * - 5: diagnosis failed.
   * 
   * @example
   * 3
   */
  diagStatus?: number;
  /**
   * @remarks
   * The end time of the anomaly event.
   * 
   * @example
   * 1725797727754
   */
  endAt?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The name of the anomaly item.
   * 
   * @example
   * 节点CPU使用率检测
   */
  item?: string;
  /**
   * @remarks
   * The level of the anomaly item.
   * 
   * @example
   * potential
   */
  level?: string;
  /**
   * @remarks
   * The namespace of the pod.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The list of operations for the anomaly item.
   */
  opts?: ListAbnormalyEventsResponseBodyDataOpts[];
  /**
   * @remarks
   * The pod name.
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * The raw metrics.
   */
  rawMetrics?: ListAbnormalyEventsResponseBodyDataRawMetrics;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the anomaly item.
   * 
   * @example
   * saturation
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the anomaly event.
   * 
   * @example
   * 43f05b46-1034-42e8-a528-6e5ca1108277
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      diagStatus: 'diag_status',
      endAt: 'end_at',
      instance: 'instance',
      item: 'item',
      level: 'level',
      namespace: 'namespace',
      opts: 'opts',
      pod: 'pod',
      rawMetrics: 'raw_metrics',
      regionId: 'region_id',
      type: 'type',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      description: 'string',
      diagStatus: 'number',
      endAt: 'number',
      instance: 'string',
      item: 'string',
      level: 'string',
      namespace: 'string',
      opts: { 'type': 'array', 'itemType': ListAbnormalyEventsResponseBodyDataOpts },
      pod: 'string',
      rawMetrics: ListAbnormalyEventsResponseBodyDataRawMetrics,
      regionId: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.opts)) {
      $dara.Model.validateArray(this.opts);
    }
    if(this.rawMetrics && typeof (this.rawMetrics as any).validate === 'function') {
      (this.rawMetrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization was successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: ListAbnormalyEventsResponseBodyData[];
  /**
   * @remarks
   * The error code description. This value is empty if no error occurred.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAbnormalyEventsResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

