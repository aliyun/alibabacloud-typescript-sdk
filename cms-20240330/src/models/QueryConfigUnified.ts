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
   * 是否启用数据完整性检查
   */
  enableDataCompleteCheck?: boolean;
  /**
   * @remarks
   * 实体所属域
   */
  entityDomain?: string;
  /**
   * @remarks
   * 需要附带返回的实体字段
   */
  entityFields?: UmodelEntityField[];
  /**
   * @remarks
   * 实体过滤列表
   */
  entityFilters?: UmodelEntityFilter[];
  /**
   * @remarks
   * 实体类型
   */
  entityType?: string;
  /**
   * @remarks
   * APM 过滤条件列表
   */
  filterList?: ApmFilterConfig[];
  /**
   * @remarks
   * 标签过滤条件
   */
  labelFilters?: UmodelLabelFilter[];
  /**
   * @remarks
   * APM 度量配置列表
   */
  measureList?: ApmMeasureConfig[];
  /**
   * @remarks
   * 指标名称（type=UMODEL_METRICSET_QUERY）
   */
  metric?: string;
  /**
   * @remarks
   * 指标集名称（type=UMODEL_METRICSET_QUERY）
   */
  metricSet?: string;
  /**
   * @remarks
   * Prometheus 查询语句（type=PROMETHEUS_SINGLE_QUERY）
   */
  promQl?: string;
  /**
   * @remarks
   * 服务 ID 列表（type=APM_MULTI_QUERY）
   */
  serviceIdList?: string[];
  /**
   * @remarks
   * 查询类型
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

