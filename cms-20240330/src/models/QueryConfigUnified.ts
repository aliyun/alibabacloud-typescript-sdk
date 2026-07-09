// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UmodelEntityField } from "./UmodelEntityField";
import { UmodelEntityFilter } from "./UmodelEntityFilter";
import { ApmFilterConfig } from "./ApmFilterConfig";
import { UmodelLabelFilter } from "./UmodelLabelFilter";
import { ApmMeasureConfig } from "./ApmMeasureConfig";
import { MetricSetNamedQueryEntry } from "./MetricSetNamedQueryEntry";


export class QueryConfigUnified extends $dara.Model {
  aggregate?: string;
  dimensions?: { [key: string]: string }[];
  enableDataCompleteCheck?: boolean;
  entityDomain?: string;
  entityFields?: UmodelEntityField[];
  entityFilters?: UmodelEntityFilter[];
  entityType?: string;
  expr?: string;
  filterList?: ApmFilterConfig[];
  groupId?: string;
  labelFilters?: UmodelLabelFilter[];
  legacyRaw?: string;
  legacyType?: string;
  logSet?: string;
  measureList?: ApmMeasureConfig[];
  metric?: string;
  metricSet?: string;
  namespace?: string;
  offsetSecs?: number;
  /**
   * @deprecated
   */
  promQl?: string;
  queries?: MetricSetNamedQueryEntry[];
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
      dimensions: 'dimensions',
      enableDataCompleteCheck: 'enableDataCompleteCheck',
      entityDomain: 'entityDomain',
      entityFields: 'entityFields',
      entityFilters: 'entityFilters',
      entityType: 'entityType',
      expr: 'expr',
      filterList: 'filterList',
      groupId: 'groupId',
      labelFilters: 'labelFilters',
      legacyRaw: 'legacyRaw',
      legacyType: 'legacyType',
      logSet: 'logSet',
      measureList: 'measureList',
      metric: 'metric',
      metricSet: 'metricSet',
      namespace: 'namespace',
      offsetSecs: 'offsetSecs',
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
      dimensions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      enableDataCompleteCheck: 'boolean',
      entityDomain: 'string',
      entityFields: { 'type': 'array', 'itemType': UmodelEntityField },
      entityFilters: { 'type': 'array', 'itemType': UmodelEntityFilter },
      entityType: 'string',
      expr: 'string',
      filterList: { 'type': 'array', 'itemType': ApmFilterConfig },
      groupId: 'string',
      labelFilters: { 'type': 'array', 'itemType': UmodelLabelFilter },
      legacyRaw: 'string',
      legacyType: 'string',
      logSet: 'string',
      measureList: { 'type': 'array', 'itemType': ApmMeasureConfig },
      metric: 'string',
      metricSet: 'string',
      namespace: 'string',
      offsetSecs: 'number',
      promQl: 'string',
      queries: { 'type': 'array', 'itemType': MetricSetNamedQueryEntry },
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
    if(Array.isArray(this.labelFilters)) {
      $dara.Model.validateArray(this.labelFilters);
    }
    if(Array.isArray(this.measureList)) {
      $dara.Model.validateArray(this.measureList);
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

