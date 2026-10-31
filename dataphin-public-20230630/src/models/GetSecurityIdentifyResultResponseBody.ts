// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityIdentifyResultResponseBodySecurityIdentifyResultInfo extends $dara.Model {
  /**
   * @remarks
   * The business date. Format: YYYY-MM-DD.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The Chinese name of the business unit.
   * 
   * @example
   * LD_test
   */
  bizUnitDisplayName?: string;
  /**
   * @remarks
   * The ID of the business unit.
   * 
   * @example
   * 1
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The name of the business unit.
   * 
   * @example
   * LD_test
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
   * 33
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
   * The creation time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-06-30 10:30:30
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 101121
   */
  datasourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ds1
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
   * The ID of the field.
   * 
   * @example
   * t_test.col1
   */
  fieldId?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * col1
   */
  fieldName?: string;
  /**
   * @remarks
   * Indicates whether a better match is available.
   */
  hasBetterRule?: boolean;
  /**
   * @remarks
   * The recognition result ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the identification record.
   * 
   * @example
   * 99
   */
  identifyRecordId?: number;
  /**
   * @remarks
   * Indicates whether a custom identification rule is used.
   */
  isCustomIdentify?: boolean;
  /**
   * @remarks
   * Indicates whether the item is locked.
   */
  isLocked?: boolean;
  /**
   * @remarks
   * The abbreviation of the classification level.
   * 
   * @example
   * test
   */
  levelAbbreviation?: string;
  /**
   * @remarks
   * The color of the classification level.
   * 
   * @example
   * 1
   */
  levelColor?: number;
  /**
   * @remarks
   * The classification level.
   * 
   * @example
   * 1
   */
  levelIndex?: number;
  /**
   * @remarks
   * The name of the classification level.
   * 
   * @example
   * test
   */
  levelName?: string;
  /**
   * @remarks
   * The modifier.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The modification time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 10:30:30
   */
  modifyTime?: string;
  /**
   * @remarks
   * The Chinese name of the project.
   * 
   * @example
   * test
   */
  projectDisplayName?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 101121
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * @example
   * 11
   */
  scanTaskId?: number;
  /**
   * @remarks
   * The status. Valid values: ENABLE (enabled) and DISABLE (disabled).
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The table catalog.
   * 
   * @example
   * testdb
   */
  tableCatalog?: string;
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
   * The ID of the table.
   * 
   * @example
   * 1
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * t_test
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the table identification task.
   * 
   * @example
   * 22
   */
  tableTaskId?: number;
  /**
   * @remarks
   * The table type. Valid values:
   * - LOGIC_TABLE: logical table
   * - LOGIC_DIM_TABLE: logical dimension table
   * - LOGIC_FACT_TABLE: logical fact table
   * - LOGIC_SUM_TABLE: logical aggregate table
   * - LOGIC_ODM_SOURCE: source table
   * - LOGIC_LABEL_TABLE: logical label table
   * - PHYSICAL_TABLE: physical table
   * - REAL_TIME_LOGIC_TABLE: real-time configured logical table
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

export class GetSecurityIdentifyResultResponseBody extends $dara.Model {
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
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * The identification result details.
   */
  securityIdentifyResultInfo?: GetSecurityIdentifyResultResponseBodySecurityIdentifyResultInfo;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      securityIdentifyResultInfo: 'SecurityIdentifyResultInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      securityIdentifyResultInfo: GetSecurityIdentifyResultResponseBodySecurityIdentifyResultInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.securityIdentifyResultInfo && typeof (this.securityIdentifyResultInfo as any).validate === 'function') {
      (this.securityIdentifyResultInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

