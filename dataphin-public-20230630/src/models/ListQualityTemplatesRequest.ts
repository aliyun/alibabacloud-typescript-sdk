// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityTemplatesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The rule types. Valid values:
   * - CONSISTENT: Consistency.
   * - EFFECTIVE: Effectiveness.
   * - TIMELINESE: Timeliness.
   * - ACCURATE: Accuracy.
   * - UNIQUENESS: Uniqueness.
   * - COMPLETENESS: Completeness.
   * - STABILITY: Stability.
   * - CUSTOM: Custom.
   */
  catalogList?: string[];
  /**
   * @remarks
   * Specifies whether the template is owned by the current user.
   */
  currentUserOwned?: boolean;
  /**
   * @remarks
   * The search keyword filter, which supports template names.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The supported data source types, such as MAX_COMPUTE, MYSQL, and HIVE.
   */
  supportDataSourceTypeList?: string[];
  /**
   * @remarks
   * The template owners.
   */
  templateOwnerList?: string[];
  /**
   * @remarks
   * The template sources. Valid values:
   * - SYSTEM: System template.
   * - CUSTOM: Custom template.
   */
  templateSourceList?: string[];
  /**
   * @remarks
   * The templatetype. Valid values:
   * - FIELD_NULL_VALUE_VALIDATE: Field null value check.
   * - FIELD_EMPTY_STRING_VALIDATE: Field empty character check.
   * - FIELD_UNIQUE_VALIDATE: Field uniqueness check.
   * - FIELD_GROUP_COUNT_VALIDATE: Field unique value count check.
   * - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: Field duplicate value count check.
   * - FUNCTION_TIME_COMPARE: Time function comparison.
   * - SINGLE_TABLE_TIME_COMPARE: Non-partitioned table time field comparison.
   * - DOUBLE_TABLE_TIME_COMPARE: Two-table time field comparison.
   * - FIELD_FORMAT_VALIDATE: Field format check.
   * - FIELD_LENGTH_VALIDATE: Field length check.
   * - FIELD_VALUE_RANGE_VALIDATE: Field value range check.
   * - CODE_TABLE_COMPARE: Lookup table reference comparison.
   * - STANDARD_CODE_TABLE_COMPARE: Data standard lookup table reference comparison.
   * - SINGLE_TABLE_FIELD_VALUE_COMPARE: Non-partitioned table field value consistency comparison.
   * - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: Non-partitioned table field statistical value consistency comparison.
   * - SINGLE_TABLE_FIELD_EXP_COMPARE: Non-partitioned table field business logic consistency comparison.
   * - DOUBLE_TABLE_FIELD_VALUE_COMPARE: Two-table field value consistency comparison.
   * - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Two-table field statistical value consistency comparison.
   * - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: Cross-source two-table field statistical value consistency comparison.
   * - DOUBLE_TABLE_FIELD_EXP_COMPARE: Two-table field business logic consistency comparison.
   * - TABLE_STABILITY_VALIDATE: Table stability check.
   * - TABLE_FLUCTUATION_VALIDATE: Table fluctuation check.
   * - FIELD_STABILITY_VALIDATE: Field stability check.
   * - FIELD_FLUCTUATION_VALIDATE: Field fluctuation check.
   * - CUSTOM_STATISTICAL_VALIDATE: Custom statistical metric check.
   * - CUSTOM_DATA_DETAILS_VALIDATE: Custom data details check.
   * - DATASOURCE_AVAILABLE_CHECK: Data source connectivity monitoring.
   * - TABLE_SCHEMA_CHECK: Table schema change monitoring.
   * - REAL_TIME_OFFLINE_COMPARE: Real-time and offline comparison.
   * - REAL_TIME_STATISTICAL_VALIDATE: Real-time statistical value monitoring.
   * - REAL_TIME_MULTI_CHAIN_COMPARE: Real-time multi-link comparison.
   */
  templateTypeList?: string[];
  /**
   * @remarks
   * The monitored object types. Valid values:
   * - TABLE: Dataphin table.
   * - DATASOURCE_TABLE: Global table.
   * - DATASOURCE: Data source.
   * - INDEX: Metric.
   * - REALTIME_LOGICAL_TABLE: Real-time metadata table.
   */
  watchTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      catalogList: 'CatalogList',
      currentUserOwned: 'CurrentUserOwned',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      supportDataSourceTypeList: 'SupportDataSourceTypeList',
      templateOwnerList: 'TemplateOwnerList',
      templateSourceList: 'TemplateSourceList',
      templateTypeList: 'TemplateTypeList',
      watchTypeList: 'WatchTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogList: { 'type': 'array', 'itemType': 'string' },
      currentUserOwned: 'boolean',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      supportDataSourceTypeList: { 'type': 'array', 'itemType': 'string' },
      templateOwnerList: { 'type': 'array', 'itemType': 'string' },
      templateSourceList: { 'type': 'array', 'itemType': 'string' },
      templateTypeList: { 'type': 'array', 'itemType': 'string' },
      watchTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.catalogList)) {
      $dara.Model.validateArray(this.catalogList);
    }
    if(Array.isArray(this.supportDataSourceTypeList)) {
      $dara.Model.validateArray(this.supportDataSourceTypeList);
    }
    if(Array.isArray(this.templateOwnerList)) {
      $dara.Model.validateArray(this.templateOwnerList);
    }
    if(Array.isArray(this.templateSourceList)) {
      $dara.Model.validateArray(this.templateSourceList);
    }
    if(Array.isArray(this.templateTypeList)) {
      $dara.Model.validateArray(this.templateTypeList);
    }
    if(Array.isArray(this.watchTypeList)) {
      $dara.Model.validateArray(this.watchTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The paged query conditions.
   */
  listQuery?: ListQualityTemplatesRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListQualityTemplatesRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

