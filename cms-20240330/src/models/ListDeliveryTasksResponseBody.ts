// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeliveryTasksResponseBodyDeliveryTasksExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The list of EventBridge tasks.
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

export class ListDeliveryTasksResponseBodyDeliveryTasksSinkList extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the delivery target. The meanings of key/value pairs vary depending on the sinkType.
   */
  sinkConfigs?: { [key: string]: string };
  /**
   * @remarks
   * The delivery target type.
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

export class ListDeliveryTasksResponseBodyDeliveryTasksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class ListDeliveryTasksResponseBodyDeliveryTasks extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * The time is in the ISO 8601 standard format (YYYY-MM-DDThh:mm:ssZ) in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-22T09:02:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The data source ID (Prometheus instance ID).
   * 
   * @example
   * rw-5f2b4c7e66342s
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The additional labels attached to all delivered metrics. The key is the label name and the value is the label value.
   */
  externalLabels?: { [key: string]: string };
  /**
   * @remarks
   * The extended information.
   */
  extraInfo?: ListDeliveryTasksResponseBodyDeliveryTasksExtraInfo;
  /**
   * @remarks
   * The metric filter conditions. Used together with labelFiltersType. The key is the metric label name and the value is the match value.
   */
  labelFilters?: { [key: string]: string };
  /**
   * @remarks
   * The metric filtering mode.
   * 
   * @example
   * Allow
   */
  labelFiltersType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of delivery targets. Multiple sinks can be configured.
   */
  sinkList?: ListDeliveryTasksResponseBodyDeliveryTasksSinkList[];
  /**
   * @remarks
   * The current status of the task.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListDeliveryTasksResponseBodyDeliveryTasksTags[];
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
   * db21f8a126d96953
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
   * The time is in the ISO 8601 standard format (YYYY-MM-DDThh:mm:ssZ) in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-22T09:02:01Z
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
      resourceGroupId: 'resourceGroupId',
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
      extraInfo: ListDeliveryTasksResponseBodyDeliveryTasksExtraInfo,
      labelFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      labelFiltersType: 'string',
      resourceGroupId: 'string',
      sinkList: { 'type': 'array', 'itemType': ListDeliveryTasksResponseBodyDeliveryTasksSinkList },
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDeliveryTasksResponseBodyDeliveryTasksTags },
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

export class ListDeliveryTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of delivery tasks.
   */
  deliveryTasks?: ListDeliveryTasksResponseBodyDeliveryTasks[];
  /**
   * @remarks
   * The maximum number of entries returned. Maximum value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D7DF334-B2F2-5453-AD51-A27B337E3191
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryTasks: 'deliveryTasks',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryTasks: { 'type': 'array', 'itemType': ListDeliveryTasksResponseBodyDeliveryTasks },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryTasks)) {
      $dara.Model.validateArray(this.deliveryTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

