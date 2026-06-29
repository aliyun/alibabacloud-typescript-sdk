// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyRecordsResponseBodyPageResultIdentifyRecordList extends $dara.Model {
  /**
   * @remarks
   * The actual match rate.
   * 
   * @example
   * 0.1
   */
  actualIdentifyRate?: number;
  /**
   * @remarks
   * The business date.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The display name of the business unit.
   * 
   * @example
   * test_abc
   */
  bizUnitDisplayName?: string;
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 11
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * test
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The classification abbreviation.
   * 
   * @example
   * test
   */
  classifyAbbreviation?: string;
  /**
   * @remarks
   * The classification ID.
   * 
   * @example
   * 1
   */
  classifyId?: number;
  /**
   * @remarks
   * The classification name.
   * 
   * @example
   * test
   */
  classifyName?: string;
  /**
   * @remarks
   * The classification effective status. Valid values:
   * - ENABLE: enabled.
   * - DISABLE: disabled.
   * 
   * @example
   * ENABLE
   */
  classifyStatus?: string;
  /**
   * @remarks
   * The datasource ID.
   * 
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * The datasource name.
   * 
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * test
   */
  fieldDescription?: string;
  /**
   * @remarks
   * The field ID.
   * 
   * @example
   * t_test.col1
   */
  fieldId?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * col1
   */
  fieldName?: string;
  /**
   * @remarks
   * The identification record ID.
   * 
   * @example
   * 22
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether this is a better match.
   */
  isBetterMatch?: boolean;
  /**
   * @remarks
   * Indicates whether a custom tagging rule is used.
   */
  isCustomIdentify?: boolean;
  /**
   * @remarks
   * Indicates whether the record is locked.
   */
  isLocked?: boolean;
  /**
   * @remarks
   * The classification level abbreviation.
   * 
   * @example
   * test
   */
  levelAbbreviation?: string;
  /**
   * @remarks
   * The classification level index.
   * 
   * @example
   * 1
   */
  levelIndex?: number;
  /**
   * @remarks
   * The classification level name.
   * 
   * @example
   * test
   */
  levelName?: string;
  /**
   * @remarks
   * The display name of the project.
   * 
   * @example
   * test_abc
   */
  projectDisplayName?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1001
   */
  projectId?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The table description.
   * 
   * @example
   * test
   */
  tableDescription?: string;
  /**
   * @remarks
   * The table environment.
   * 
   * @example
   * DEV
   */
  tableEnv?: string;
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * 1
   */
  tableId?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  /**
   * @remarks
   * The table type. Valid values:
   * - LOGIC_TABLE: logical table.
   * - LOGIC_DIM_TABLE: logical dimension table.
   * - LOGIC_FACT_TABLE: logical fact table.
   * - LOGIC_SUM_TABLE: logical aggregate table.
   * - LOGIC_ODM_SOURCE: source table.
   * - LOGIC_LABEL_TABLE: logical label table.
   * - PHYSICAL_TABLE: physical table.
   * - REAL_TIME_LOGIC_TABLE: real-time configured logical table.
   * 
   * @example
   * LOGIC_TABLE
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      actualIdentifyRate: 'ActualIdentifyRate',
      bizDate: 'BizDate',
      bizUnitDisplayName: 'BizUnitDisplayName',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      classifyAbbreviation: 'ClassifyAbbreviation',
      classifyId: 'ClassifyId',
      classifyName: 'ClassifyName',
      classifyStatus: 'ClassifyStatus',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      fieldDescription: 'FieldDescription',
      fieldId: 'FieldId',
      fieldName: 'FieldName',
      id: 'Id',
      isBetterMatch: 'IsBetterMatch',
      isCustomIdentify: 'IsCustomIdentify',
      isLocked: 'IsLocked',
      levelAbbreviation: 'LevelAbbreviation',
      levelIndex: 'LevelIndex',
      levelName: 'LevelName',
      projectDisplayName: 'ProjectDisplayName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      tableDescription: 'TableDescription',
      tableEnv: 'TableEnv',
      tableId: 'TableId',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualIdentifyRate: 'number',
      bizDate: 'string',
      bizUnitDisplayName: 'string',
      bizUnitId: 'number',
      bizUnitName: 'string',
      classifyAbbreviation: 'string',
      classifyId: 'number',
      classifyName: 'string',
      classifyStatus: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      fieldDescription: 'string',
      fieldId: 'string',
      fieldName: 'string',
      id: 'number',
      isBetterMatch: 'boolean',
      isCustomIdentify: 'boolean',
      isLocked: 'boolean',
      levelAbbreviation: 'string',
      levelIndex: 'number',
      levelName: 'string',
      projectDisplayName: 'string',
      projectId: 'number',
      projectName: 'string',
      tableDescription: 'string',
      tableEnv: 'string',
      tableId: 'string',
      tableName: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityIdentifyRecordsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of identification records.
   */
  identifyRecordList?: ListSecurityIdentifyRecordsResponseBodyPageResultIdentifyRecordList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identifyRecordList: 'IdentifyRecordList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyRecordList: { 'type': 'array', 'itemType': ListSecurityIdentifyRecordsResponseBodyPageResultIdentifyRecordList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identifyRecordList)) {
      $dara.Model.validateArray(this.identifyRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityIdentifyRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paging query result.
   */
  pageResult?: ListSecurityIdentifyRecordsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListSecurityIdentifyRecordsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

