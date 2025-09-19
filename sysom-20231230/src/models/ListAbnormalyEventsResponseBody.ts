// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAbnormalyEventsResponseBodyDataOptsResult extends $dara.Model {
  status?: string;
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
  label?: string;
  result?: ListAbnormalyEventsResponseBodyDataOptsResult;
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
  endTime?: number;
  metrics?: string[];
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
   * @example
   * 1725801090000
   */
  createdAt?: number;
  description?: string;
  diagStatus?: number;
  endAt?: number;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  item?: string;
  level?: string;
  namespace?: string;
  opts?: ListAbnormalyEventsResponseBodyDataOpts[];
  pod?: string;
  rawMetrics?: ListAbnormalyEventsResponseBodyDataRawMetrics;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * saturation
   */
  type?: string;
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
   * @example
   * Success
   */
  code?: string;
  data?: ListAbnormalyEventsResponseBodyData[];
  message?: string;
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

