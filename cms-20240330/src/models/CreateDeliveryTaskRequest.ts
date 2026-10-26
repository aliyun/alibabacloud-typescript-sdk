// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryTaskRequestSinkList extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration of the delivery destination. The meanings of the key and value vary based on the sinkType. For more information, see the following descriptions.
   */
  sinkConfigs?: { [key: string]: string };
  /**
   * @remarks
   * The type of the delivery destination.
   * 
   * This parameter is required.
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

export class CreateDeliveryTaskRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * _cms_workspace
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * @example
   * test
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

export class CreateDeliveryTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source, which is the ID of the Prometheus instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rw-xxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The additional labels attached to all delivered metrics. The key is the label name, and the value is the label value.
   */
  externalLabels?: { [key: string]: string };
  /**
   * @remarks
   * The metric filtering conditions. This parameter is used together with labelFiltersType. The key is the metric label name, and the value is the match value.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of delivery destinations.
   * 
   * This parameter is required.
   */
  sinkList?: CreateDeliveryTaskRequestSinkList[];
  /**
   * @remarks
   * The tags of the resource.
   */
  tags?: CreateDeliveryTaskRequestTags[];
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * my delivery task
   */
  taskDescription?: string;
  /**
   * @remarks
   * The name of the task. The name can contain Chinese characters, English letters, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * my-task
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
      tags: 'tags',
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
      sinkList: { 'type': 'array', 'itemType': CreateDeliveryTaskRequestSinkList },
      tags: { 'type': 'array', 'itemType': CreateDeliveryTaskRequestTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

