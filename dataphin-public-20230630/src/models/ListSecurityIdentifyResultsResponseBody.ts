// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyResultsResponseBodyPageResultSecurityIdentifyResultList extends $dara.Model {
  /**
   * @remarks
   * Business date.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * Business unit display name.
   * 
   * @example
   * LD_test
   */
  bizUnitDisplayName?: string;
  /**
   * @remarks
   * Business unit ID.
   * 
   * @example
   * 1
   */
  bizUnitId?: number;
  /**
   * @remarks
   * Business unit name.
   * 
   * @example
   * LD_test
   */
  bizUnitName?: string;
  /**
   * @remarks
   * Classification abbreviation.
   * 
   * @example
   * test
   */
  classifyAbbreviation?: string;
  /**
   * @remarks
   * Classification ID.
   * 
   * @example
   * 33
   */
  classifyId?: number;
  /**
   * @remarks
   * Classification name.
   * 
   * @example
   * test
   */
  classifyName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2025-06-30 10:30:30
   */
  createTime?: string;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 101121
   */
  datasourceId?: number;
  /**
   * @remarks
   * Data source name.
   * 
   * @example
   * ds1
   */
  datasourceName?: string;
  /**
   * @remarks
   * Field description.
   * 
   * @example
   * test
   */
  fieldDescription?: string;
  /**
   * @remarks
   * Field ID.
   * 
   * @example
   * t_test.col1
   */
  fieldId?: string;
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * col1
   */
  fieldName?: string;
  /**
   * @remarks
   * Whether a better matching result exists.
   */
  hasBetterRule?: boolean;
  /**
   * @remarks
   * Identification result ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Identification record ID.
   * 
   * @example
   * 99
   */
  identifyRecordId?: number;
  /**
   * @remarks
   * Whether it is a custom tagging rule.
   */
  isCustomIdentify?: boolean;
  /**
   * @remarks
   * Whether it is locked.
   */
  isLocked?: boolean;
  /**
   * @remarks
   * Security level abbreviation.
   * 
   * @example
   * test
   */
  levelAbbreviation?: string;
  /**
   * @remarks
   * Security level color.
   * 
   * @example
   * 1
   */
  levelColor?: number;
  /**
   * @remarks
   * Security level index.
   * 
   * @example
   * 1
   */
  levelIndex?: number;
  /**
   * @remarks
   * Security level name.
   * 
   * @example
   * test
   */
  levelName?: string;
  /**
   * @remarks
   * Modifier.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 2025-06-30 10:30:30
   */
  modifyTime?: string;
  /**
   * @remarks
   * Project display name.
   * 
   * @example
   * test
   */
  projectDisplayName?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 101121
   */
  projectId?: number;
  /**
   * @remarks
   * Project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * Scan task ID.
   * 
   * @example
   * 11
   */
  scanTaskId?: number;
  /**
   * @remarks
   * Status. Valid values: ENABLE and DISABLE.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * Table catalog.
   * 
   * @example
   * testdb
   */
  tableCatalog?: string;
  /**
   * @remarks
   * Table description.
   * 
   * @example
   * test
   */
  tableDescription?: string;
  /**
   * @remarks
   * Table environment.
   * 
   * @example
   * DEV
   */
  tableEnv?: string;
  /**
   * @remarks
   * Table ID.
   * 
   * @example
   * 1
   */
  tableId?: string;
  /**
   * @remarks
   * Table name.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  /**
   * @remarks
   * Table identification task ID.
   * 
   * @example
   * 22
   */
  tableTaskId?: number;
  /**
   * @remarks
   * Table type. Valid values: LOGIC_TABLE (logical table), LOGIC_DIM_TABLE (dimension logical table), LOGIC_FACT_TABLE (fact logical table), LOGIC_SUM_TABLE (summary logical table), LOGIC_ODM_SOURCE (source table), LOGIC_LABEL_TABLE (label logical table), PHYSICAL_TABLE (physical table), REAL_TIME_LOGIC_TABLE (real-time configured logical table).
   * 
   * @example
   * LOGIC_TABLE
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      bizUnitDisplayName: 'BizUnitDisplayName',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      classifyAbbreviation: 'ClassifyAbbreviation',
      classifyId: 'ClassifyId',
      classifyName: 'ClassifyName',
      createTime: 'CreateTime',
      creator: 'Creator',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      fieldDescription: 'FieldDescription',
      fieldId: 'FieldId',
      fieldName: 'FieldName',
      hasBetterRule: 'HasBetterRule',
      id: 'Id',
      identifyRecordId: 'IdentifyRecordId',
      isCustomIdentify: 'IsCustomIdentify',
      isLocked: 'IsLocked',
      levelAbbreviation: 'LevelAbbreviation',
      levelColor: 'LevelColor',
      levelIndex: 'LevelIndex',
      levelName: 'LevelName',
      modifier: 'Modifier',
      modifyTime: 'ModifyTime',
      projectDisplayName: 'ProjectDisplayName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      scanTaskId: 'ScanTaskId',
      status: 'Status',
      tableCatalog: 'TableCatalog',
      tableDescription: 'TableDescription',
      tableEnv: 'TableEnv',
      tableId: 'TableId',
      tableName: 'TableName',
      tableTaskId: 'TableTaskId',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      bizUnitDisplayName: 'string',
      bizUnitId: 'number',
      bizUnitName: 'string',
      classifyAbbreviation: 'string',
      classifyId: 'number',
      classifyName: 'string',
      createTime: 'string',
      creator: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      fieldDescription: 'string',
      fieldId: 'string',
      fieldName: 'string',
      hasBetterRule: 'boolean',
      id: 'number',
      identifyRecordId: 'number',
      isCustomIdentify: 'boolean',
      isLocked: 'boolean',
      levelAbbreviation: 'string',
      levelColor: 'number',
      levelIndex: 'number',
      levelName: 'string',
      modifier: 'string',
      modifyTime: 'string',
      projectDisplayName: 'string',
      projectId: 'number',
      projectName: 'string',
      scanTaskId: 'number',
      status: 'string',
      tableCatalog: 'string',
      tableDescription: 'string',
      tableEnv: 'string',
      tableId: 'string',
      tableName: 'string',
      tableTaskId: 'number',
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

export class ListSecurityIdentifyResultsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * Paginated identification result list.
   */
  securityIdentifyResultList?: ListSecurityIdentifyResultsResponseBodyPageResultSecurityIdentifyResultList[];
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      securityIdentifyResultList: 'SecurityIdentifyResultList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIdentifyResultList: { 'type': 'array', 'itemType': ListSecurityIdentifyResultsResponseBodyPageResultSecurityIdentifyResultList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityIdentifyResultList)) {
      $dara.Model.validateArray(this.securityIdentifyResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityIdentifyResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Backend response error details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Paginated query result.
   */
  pageResult?: ListSecurityIdentifyResultsResponseBodyPageResult;
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
   * Whether the request is successful.
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
      pageResult: ListSecurityIdentifyResultsResponseBodyPageResult,
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

