// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbnormalyEventsResponseBodyDataOptsResult extends $dara.Model {
  /**
   * @remarks
   * Diagnosis status
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Diagnosis details URL
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
   * Operation Type
   * 
   * @example
   * diagnose
   */
  label?: string;
  /**
   * @remarks
   * Diagnosis result of the abnormal item
   */
  result?: ListAbnormalyEventsResponseBodyDataOptsResult;
  /**
   * @remarks
   * Diagnosis Type
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
   * End Time
   * 
   * @example
   * 1761814928
   */
  endTime?: number;
  /**
   * @remarks
   * List of metric values.
   */
  metrics?: string[];
  /**
   * @remarks
   * Start Time
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
   * Creation Time
   * 
   * @example
   * 1725801090000
   */
  createdAt?: number;
  /**
   * @remarks
   * Detailed description of the anomalous item.
   * 
   * @example
   * 节点发生OOM, 可查看OOM发生原因
   */
  description?: string;
  /**
   * @remarks
   * Diagnosis status (1 indicates diagnosis ready, 2 indicates running, 3 indicates completed, 4 indicates undiagnosable, 5 indicates failed)
   * 
   * @example
   * 3
   */
  diagStatus?: number;
  /**
   * @remarks
   * End time of the anomalous activity.
   * 
   * @example
   * 1725797727754
   */
  endAt?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * Name of the anomalous item.
   * 
   * @example
   * 节点CPU使用率检测
   */
  item?: string;
  /**
   * @remarks
   * Level of the anomalous item.
   * 
   * @example
   * potential
   */
  level?: string;
  /**
   * @remarks
   * Namespace where the pod is located
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * List of operations for the abnormal item
   */
  opts?: ListAbnormalyEventsResponseBodyDataOpts[];
  /**
   * @remarks
   * Pod name.
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * Raw metrics
   */
  rawMetrics?: ListAbnormalyEventsResponseBodyDataRawMetrics;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Type of abnormal item
   * 
   * @example
   * saturation
   */
  type?: string;
  /**
   * @remarks
   * UUID corresponding to the anomalous activity
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
   * Status code.  
   * - If `code == Success`, authorization succeeded.  
   * - Any other status code indicates authorization failed. When authorization fails, check the `message` field for detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return Result.
   */
  data?: ListAbnormalyEventsResponseBodyData[];
  /**
   * @remarks
   * Error code description; empty if no error
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Total number of records.
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

