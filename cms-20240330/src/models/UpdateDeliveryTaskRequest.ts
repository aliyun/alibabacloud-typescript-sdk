// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeliveryTaskRequestSinkList extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the shipping destination. The meanings of keys and values vary based on the sink type.
   * 
   * @example
   * {"Url":"https://example.com/api/v1/write","Network":"PublicNetwork","AuthType":"None"}
   */
  sinkConfigs?: { [key: string]: string };
  /**
   * @remarks
   * The type of the shipping destination.
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
   * The data source ID, which is the Prometheus instance ID.
   * 
   * @example
   * rw-5f2b4sc7es4d66
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The additional labels appended to all shipped metrics. The key is the label name, and the value is the label value.
   * 
   * @example
   * {"region":"cn-hangzhou"}
   */
  externalLabels?: { [key: string]: string };
  /**
   * @remarks
   * The metric filtering conditions. The existing conditions are entirely replaced rather than incrementally merged.
   * 
   * @example
   * {"__name__":"up"}
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
   * The list of shipping destinations.
   */
  sinkList?: UpdateDeliveryTaskRequestSinkList[];
  /**
   * @remarks
   * The task status, which is used to start or stop the task. Valid values:
   * 
   * Enable: Starts the task.
   * 
   * Disable: Stops the task.
   * 
   * Running: The task is running.
   * 
   * @example
   * Running
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
   * The task name. Chinese characters, English letters, underscores (_), and hyphens (-) are supported.
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

