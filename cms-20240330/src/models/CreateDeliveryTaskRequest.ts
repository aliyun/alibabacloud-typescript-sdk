// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryTaskRequestSinkList extends $dara.Model {
  /**
   * @remarks
   * The configuration for the sink, specified as key-value pairs. The valid keys and values depend on the value of `sinkType`.
   */
  sinkConfigs?: { [key: string]: string };
  /**
   * @remarks
   * The type of the delivery destination (sink).
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
   * The ID of the Prometheus instance that serves as the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * rw-xxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * A map of key-value pairs to attach as additional labels to all delivered metrics.
   */
  externalLabels?: { [key: string]: string };
  /**
   * @remarks
   * The label conditions for filtering metrics. The key is the label name and the value is the value to match. The filtering behavior is controlled by `labelFiltersType`.
   */
  labelFilters?: { [key: string]: string };
  /**
   * @remarks
   * The mode for applying the label filters.
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
   * An array of delivery destination objects.
   * 
   * This parameter is required.
   */
  sinkList?: CreateDeliveryTaskRequestSinkList[];
  /**
   * @remarks
   * An array of resource tags.
   */
  tags?: CreateDeliveryTaskRequestTags[];
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

