// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeliveryTaskRequestSinkList extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the sink. The meaning of the key-value pairs depends on the specified sinkType.
   */
  sinkConfigs?: { [key: string]: string };
  /**
   * @remarks
   * The sink type.
   * 
   * @example
   * Prometheus
   * 
   * **if can be null:**
   * true
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

export class UpdateDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The data source ID (Prometheus instance ID).
   * 
   * @example
   * rw-5f2b4sc7es4d66
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Additional labels to attach to all delivered metrics, specified as key-value pairs.
   */
  externalLabels?: { [key: string]: string };
  /**
   * @remarks
   * The labels for filtering metrics. This operation replaces the entire existing filter; incremental updates are not supported.
   */
  labelFilters?: { [key: string]: string };
  /**
   * @remarks
   * The metric filtering mode.
   * 
   * @example
   * Deny
   */
  labelFiltersType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzoiafjtr7zyq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of sinks.
   */
  sinkList?: UpdateDeliveryTaskRequestSinkList[];
  /**
   * @remarks
   * The status of the delivery task.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * updated desc
   */
  taskDescription?: string;
  /**
   * @remarks
   * The name of the delivery task. The name can include Chinese characters, English letters, underscores (_), and hyphens (-).
   * 
   * @example
   * new-task-name
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'dataSourceId',
      externalLabels: 'externalLabels',
      labelFilters: 'labelFilters',
      labelFiltersType: 'labelFiltersType',
      resourceGroupId: 'resourceGroupId',
      sinkList: 'sinkList',
      status: 'status',
      taskDescription: 'taskDescription',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      externalLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      labelFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      labelFiltersType: 'string',
      resourceGroupId: 'string',
      sinkList: { 'type': 'array', 'itemType': UpdateDeliveryTaskRequestSinkList },
      status: 'string',
      taskDescription: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(this.externalLabels) {
      $dara.Model.validateMap(this.externalLabels);
    }
    if(this.labelFilters) {
      $dara.Model.validateMap(this.labelFilters);
    }
    if(Array.isArray(this.sinkList)) {
      $dara.Model.validateArray(this.sinkList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

