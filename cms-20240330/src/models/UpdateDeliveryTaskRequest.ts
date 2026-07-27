// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeliveryTaskRequestSinkList extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the delivery target. The meanings of the key/value pairs vary depending on the sinkType.
   */
  sinkConfigs?: { [key: string]: string };
  /**
   * @remarks
   * The delivery target type. Valid values:
   * - AcsMaxCompute: MaxCompute.
   * - AcsKafka: Message Queue for Apache Kafka.
   * - Prometheus: Managed Service for Prometheus.
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
   * The additional labels attached to all delivered metrics. The key is the label name and the value is the label value.
   */
  externalLabels?: { [key: string]: string };
  /**
   * @remarks
   * The metric filter conditions. The entire value is replaced and not incrementally merged.
   */
  labelFilters?: { [key: string]: string };
  /**
   * @remarks
   * The metric filtering mode. Valid values:
   * - Deny: denied.
   * - Allow: allowed.
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
   * The list of delivery targets.
   */
  sinkList?: UpdateDeliveryTaskRequestSinkList[];
  /**
   * @remarks
   * The task status. This parameter is used to start or stop the task. Valid values:
   * - Running: running.
   * - Enable: enabled.
   * - Disable: disabled.
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
   * The task name. The name can contain letters, digits, underscores (_), and hyphens (-), and can also contain Chinese characters.
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

