// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityFields } from "./EntityFields";
import { EntityFilters } from "./EntityFilters";
import { FilterList } from "./FilterList";
import { PrometheusMetricFilterValue } from "./PrometheusMetricFilterValue";
import { Joinings } from "./Joinings";
import { LabelFilters } from "./LabelFilters";
import { MeasureList } from "./MeasureList";
import { PrometheusMetricParamValue } from "./PrometheusMetricParamValue";
import { Queries } from "./Queries";


export class QueryConfigUnified extends $dara.Model {
  aggregate?: string;
  /**
   * @deprecated
   */
  checkAfterDataComplete?: boolean;
  dimensions?: { [key: string]: string }[];
  durationSecs?: number;
  enableDataCompleteCheck?: boolean;
  entityDomain?: string;
  entityFields?: EntityFields[];
  entityFilters?: EntityFilters[];
  entityType?: string;
  expr?: string;
  filterList?: FilterList[];
  filterValues?: PrometheusMetricFilterValue[];
  groupFieldList?: string[];
  groupId?: string;
  groupType?: string;
  joinings?: Joinings[];
  labelFilters?: LabelFilters[];
  legacyRaw?: string;
  legacyType?: string;
  logSet?: string;
  measureGroupKey?: string;
  measureList?: MeasureList[];
  metric?: string;
  metricGroupId?: string;
  metricId?: string;
  /**
   * @deprecated
   */
  metricIds?: string[];
  metricSet?: string;
  namespace?: string;
  offsetSecs?: number;
  paramValues?: PrometheusMetricParamValue[];
  /**
   * @deprecated
   */
  promQl?: string;
  queries?: Queries[];
  relationType?: string;
  serviceIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  windowSecs?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      checkAfterDataComplete: 'checkAfterDataComplete',
      dimensions: 'dimensions',
      durationSecs: 'durationSecs',
      enableDataCompleteCheck: 'enableDataCompleteCheck',
      entityDomain: 'entityDomain',
      entityFields: 'entityFields',
      entityFilters: 'entityFilters',
      entityType: 'entityType',
      expr: 'expr',
      filterList: 'filterList',
      filterValues: 'filterValues',
      groupFieldList: 'groupFieldList',
      groupId: 'groupId',
      groupType: 'groupType',
      joinings: 'joinings',
      labelFilters: 'labelFilters',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      logSet: 'logSet',
      measureGroupKey: 'measureGroupKey',
      measureList: 'measureList',
      metric: 'metric',
      metricGroupId: 'metricGroupId',
      metricId: 'metricId',
      metricIds: 'metricIds',
      metricSet: 'metricSet',
      namespace: 'namespace',
      offsetSecs: 'offsetSecs',
      paramValues: 'paramValues',
      promQl: 'promQl',
      queries: 'queries',
      relationType: 'relationType',
      serviceIdList: 'serviceIdList',
      type: 'type',
      windowSecs: 'windowSecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      checkAfterDataComplete: 'boolean',
      dimensions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      durationSecs: 'number',
      enableDataCompleteCheck: 'boolean',
      entityDomain: 'string',
      entityFields: { 'type': 'array', 'itemType': EntityFields },
      entityFilters: { 'type': 'array', 'itemType': EntityFilters },
      entityType: 'string',
      expr: 'string',
      filterList: { 'type': 'array', 'itemType': FilterList },
      filterValues: { 'type': 'array', 'itemType': PrometheusMetricFilterValue },
      groupFieldList: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      groupType: 'string',
      joinings: { 'type': 'array', 'itemType': Joinings },
      labelFilters: { 'type': 'array', 'itemType': LabelFilters },
      legacyRaw: 'string',
      legacyType: 'string',
      logSet: 'string',
      measureGroupKey: 'string',
      measureList: { 'type': 'array', 'itemType': MeasureList },
      metric: 'string',
      metricGroupId: 'string',
      metricId: 'string',
      metricIds: { 'type': 'array', 'itemType': 'string' },
      metricSet: 'string',
      namespace: 'string',
      offsetSecs: 'number',
      paramValues: { 'type': 'array', 'itemType': PrometheusMetricParamValue },
      promQl: 'string',
      queries: { 'type': 'array', 'itemType': Queries },
      relationType: 'string',
      serviceIdList: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      windowSecs: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    if(Array.isArray(this.entityFields)) {
      $dara.Model.validateArray(this.entityFields);
    }
    if(Array.isArray(this.entityFilters)) {
      $dara.Model.validateArray(this.entityFilters);
    }
    if(Array.isArray(this.filterList)) {
      $dara.Model.validateArray(this.filterList);
    }
    if(Array.isArray(this.filterValues)) {
      $dara.Model.validateArray(this.filterValues);
    }
    if(Array.isArray(this.groupFieldList)) {
      $dara.Model.validateArray(this.groupFieldList);
    }
    if(Array.isArray(this.joinings)) {
      $dara.Model.validateArray(this.joinings);
    }
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    if(Array.isArray(this.measureList)) {
      $dara.Model.validateArray(this.measureList);
    }
    if(Array.isArray(this.metricIds)) {
      $dara.Model.validateArray(this.metricIds);
    }
    if(Array.isArray(this.paramValues)) {
      $dara.Model.validateArray(this.paramValues);
    }
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
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

