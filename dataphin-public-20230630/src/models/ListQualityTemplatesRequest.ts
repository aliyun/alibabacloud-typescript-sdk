// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityTemplatesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The rule type. Valid values:
   * - CONSISTENT: consistency
   * - EFFECTIVE: validity
   * - TIMELINESE: timeliness
   * - ACCURATE: accuracy
   * - UNIQUENESS: uniqueness
   * - COMPLETENESS: completeness
   * - STABILITY: stability
   * - CUSTOM: custom.
   */
  catalogList?: string[];
  /**
   * @remarks
   * Specifies whether to query only templates owned by the current user.
   */
  currentUserOwned?: boolean;
  /**
   * @remarks
   * The search keyword. Template name filtering is supported.
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
   * The number of records per page. Default value: 20.
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
   * The template source. Valid values:
   * - SYSTEM: system template
   * - CUSTOM: custom template.
   */
  templateSourceList?: string[];
  /**
   * @remarks
   * The templatetype. Valid values:
   * - FIELD_NULL_VALUE_VALIDATE: field null value check
   * - FIELD_EMPTY_STRING_VALIDATE: field empty character string check
   * - FIELD_UNIQUE_VALIDATE: field uniqueness check
   * - FIELD_GROUP_COUNT_VALIDATE: field unique value count check
   * - FIELD_DUPLICATE_VALUE_COUNT_VALIDATE: field duplicate value count check
   * - FUNCTION_TIME_COMPARE: time function comparison
   * - SINGLE_TABLE_TIME_COMPARE: non-partitioned table time field comparison
   * - DOUBLE_TABLE_TIME_COMPARE: two-table time field comparison
   * - FIELD_FORMAT_VALIDATE: field format check
   * - FIELD_LENGTH_VALIDATE: field length check
   * - FIELD_VALUE_RANGE_VALIDATE: field value range check
   * - CODE_TABLE_COMPARE: lookup table reference comparison
   * - STANDARD_CODE_TABLE_COMPARE: data standard lookup table reference comparison
   * - SINGLE_TABLE_FIELD_VALUE_COMPARE: non-partitioned table field value consistency comparison
   * - SINGLE_TABLE_FIELD_STATISTICAL_COMPARE: non-partitioned table field statistical value consistency comparison
   * - SINGLE_TABLE_FIELD_EXP_COMPARE: non-partitioned table field business logic consistency comparison
   * - DOUBLE_TABLE_FIELD_VALUE_COMPARE: two-table field value consistency comparison
   * - DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: two-table field statistical value consistency comparison
   * - CROSS_DOUBLE_TABLE_FIELD_STATISTICAL_COMPARE: cross-source two-table field statistical value consistency comparison
   * - DOUBLE_TABLE_FIELD_EXP_COMPARE: two-table field business logic consistency comparison
   * - TABLE_STABILITY_VALIDATE: table stability check
   * - TABLE_FLUCTUATION_VALIDATE: table fluctuation check
   * - FIELD_STABILITY_VALIDATE: field stability check
   * - FIELD_FLUCTUATION_VALIDATE: field fluctuation check
   * - CUSTOM_STATISTICAL_VALIDATE: custom statistical metric check
   * - CUSTOM_DATA_DETAILS_VALIDATE: custom data details check
   * - DATASOURCE_AVAILABLE_CHECK: data source connectivity monitoring
   * - TABLE_SCHEMA_CHECK: table schema change monitoring
   * - REAL_TIME_OFFLINE_COMPARE: real-time and offline comparison
   * - REAL_TIME_STATISTICAL_VALIDATE: real-time statistical value monitoring
   * - REAL_TIME_MULTI_CHAIN_COMPARE: real-time multi-link comparison.
   */
  templateTypeList?: string[];
  /**
   * @remarks
   * The monitored object type. Valid values:
   * - TABLE: Dataphin table
   * - DATASOURCE_TABLE: full-domain table
   * - DATASOURCE: data source
   * - INDEX: metric
   * - REALTIME_LOGICAL_TABLE: real-time meta table.
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
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListQualityTemplatesRequestListQuery,
      opTenantId: 'number',
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

