// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeliveryTaskResponseBodyDeliveryTaskExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The names of the associated EventBridge tasks.
   */
  taskNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      taskNameList: 'taskNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskNameList)) {
      $dara.Model.validateArray(this.taskNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryTaskResponseBodyDeliveryTaskSinkList extends $dara.Model {
  /**
   * @remarks
   * The sink configuration. The structure of this object depends on the value of `sinkType`. For details, see CreateDeliveryTask.
   */
  sinkConfigs?: { [key: string]: string };
  /**
   * @remarks
   * The sink type.
   * 
   * @example
   * Prometheus
   */
  sinkType?: string;
  static names(): { [key: string]: string } {
    return {
      sinkConfigs: 'sinkConfigs',
      sinkType: 'sinkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkConfigs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sinkType: 'string',
    };
  }

  validate() {
    if(this.sinkConfigs) {
      $dara.Model.validateMap(this.sinkConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryTaskResponseBodyDeliveryTaskTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * sourcetype
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * production
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

export class GetDeliveryTaskResponseBodyDeliveryTask extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-07-24T02:08:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The data source ID (the Prometheus instance ID).
   * 
   * @example
   * rw-xxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * A map of key-value pairs to add as external labels to all delivered metrics.
   */
  externalLabels?: { [key: string]: string };
  /**
   * @remarks
   * The extra information.
   */
  extraInfo?: GetDeliveryTaskResponseBodyDeliveryTaskExtraInfo;
  /**
   * @remarks
   * The label filters, used with `labelFiltersType`. In each filter, the key is the metric label and the value is the value to match.
   */
  labelFilters?: { [key: string]: string };
  /**
   * @remarks
   * The label filter type.
   * 
   * @example
   * Allow
   */
  labelFiltersType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * An array of sink configurations.
   */
  sinkList?: GetDeliveryTaskResponseBodyDeliveryTaskSinkList[];
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Pending2Running
   */
  status?: string;
  /**
   * @remarks
   * The tags attached to the task.
   */
  tags?: GetDeliveryTaskResponseBodyDeliveryTaskTags[];
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * my delivery task
   */
  taskDescription?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8b07eeac8249866d
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test-task
   */
  taskName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-22T11:50:48Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      dataSourceId: 'dataSourceId',
      externalLabels: 'externalLabels',
      extraInfo: 'extraInfo',
      labelFilters: 'labelFilters',
      labelFiltersType: 'labelFiltersType',
      regionId: 'regionId',
      sinkList: 'sinkList',
      status: 'status',
      tags: 'tags',
      taskDescription: 'taskDescription',
      taskId: 'taskId',
      taskName: 'taskName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dataSourceId: 'string',
      externalLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      extraInfo: GetDeliveryTaskResponseBodyDeliveryTaskExtraInfo,
      labelFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      labelFiltersType: 'string',
      regionId: 'string',
      sinkList: { 'type': 'array', 'itemType': GetDeliveryTaskResponseBodyDeliveryTaskSinkList },
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetDeliveryTaskResponseBodyDeliveryTaskTags },
      taskDescription: 'string',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.externalLabels) {
      $dara.Model.validateMap(this.externalLabels);
    }
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    if(this.labelFilters) {
      $dara.Model.validateMap(this.labelFilters);
    }
    if(Array.isArray(this.sinkList)) {
      $dara.Model.validateArray(this.sinkList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery task details.
   */
  deliveryTask?: GetDeliveryTaskResponseBodyDeliveryTask;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-9A629907C1F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryTask: 'deliveryTask',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryTask: GetDeliveryTaskResponseBodyDeliveryTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliveryTask && typeof (this.deliveryTask as any).validate === 'function') {
      (this.deliveryTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

