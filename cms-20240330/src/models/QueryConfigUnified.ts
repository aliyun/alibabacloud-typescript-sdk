// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UmodelEntityField } from "./UmodelEntityField";
import { UmodelEntityFilter } from "./UmodelEntityFilter";
import { ApmFilterConfig } from "./ApmFilterConfig";
import { UmodelLabelFilter } from "./UmodelLabelFilter";
import { ApmMeasureConfig } from "./ApmMeasureConfig";


export class QueryConfigUnified extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check for data completeness. A value of `true` enables the check.
   */
  enableDataCompleteCheck?: boolean;
  /**
   * @remarks
   * Specifies the domain of the entity, such as `acs` for Alibaba Cloud services.
   */
  entityDomain?: string;
  /**
   * @remarks
   * A list of entity fields to include in the response.
   */
  entityFields?: UmodelEntityField[];
  /**
   * @remarks
   * A list of filters for selecting specific entities.
   */
  entityFilters?: UmodelEntityFilter[];
  /**
   * @remarks
   * Specifies the type of the entity, such as `EcsInstance`.
   */
  entityType?: string;
  /**
   * @remarks
   * Specifies the expression to post-process query results.
   */
  expr?: string;
  /**
   * @remarks
   * A list of Application Performance Monitoring (APM) filter configurations.
   */
  filterList?: ApmFilterConfig[];
  /**
   * @remarks
   * A list of filters that match labels.
   */
  labelFilters?: UmodelLabelFilter[];
  /**
   * @remarks
   * A list of APM measure configurations.
   */
  measureList?: ApmMeasureConfig[];
  /**
   * @remarks
   * Specifies the name of the metric to query.
   */
  metric?: string;
  /**
   * @remarks
   * Specifies the metric set that contains the metric.
   */
  metricSet?: string;
  /**
   * @remarks
   * Specifies the query string in Prometheus Query Language (PromQL).
   */
  promQl?: string;
  /**
   * @remarks
   * A list of service IDs to query.
   */
  serviceIdList?: string[];
  /**
   * @remarks
   * The query type.
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      enableDataCompleteCheck: 'enableDataCompleteCheck',
      entityDomain: 'entityDomain',
      entityFields: 'entityFields',
      entityFilters: 'entityFilters',
      entityType: 'entityType',
      expr: 'expr',
      filterList: 'filterList',
      labelFilters: 'labelFilters',
      measureList: 'measureList',
      metric: 'metric',
      metricSet: 'metricSet',
      promQl: 'promQl',
      serviceIdList: 'serviceIdList',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDataCompleteCheck: 'boolean',
      entityDomain: 'string',
      entityFields: { 'type': 'array', 'itemType': UmodelEntityField },
      entityFilters: { 'type': 'array', 'itemType': UmodelEntityFilter },
      entityType: 'string',
      expr: 'string',
      filterList: { 'type': 'array', 'itemType': ApmFilterConfig },
      labelFilters: { 'type': 'array', 'itemType': UmodelLabelFilter },
      measureList: { 'type': 'array', 'itemType': ApmMeasureConfig },
      metric: 'string',
      metricSet: 'string',
      promQl: 'string',
      serviceIdList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityFields)) {
      $dara.Model.validateArray(this.entityFields);
    }
    if(Array.isArray(this.entityFilters)) {
      $dara.Model.validateArray(this.entityFilters);
    }
    if(Array.isArray(this.filterList)) {
      $dara.Model.validateArray(this.filterList);
    }
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    if(Array.isArray(this.measureList)) {
      $dara.Model.validateArray(this.measureList);
    }
    if(Array.isArray(this.serviceIdList)) {
      $dara.Model.validateArray(this.serviceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

