// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityIdentifyResultResponseBodySecurityIdentifyResultInfo extends $dara.Model {
  /**
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @example
   * LD_test
   */
  bizUnitDisplayName?: string;
  /**
   * @example
   * 1
   */
  bizUnitId?: number;
  /**
   * @example
   * LD_test
   */
  bizUnitName?: string;
  /**
   * @example
   * test
   */
  classifyAbbreviation?: string;
  /**
   * @example
   * 33
   */
  classifyId?: number;
  /**
   * @example
   * test
   */
  classifyName?: string;
  /**
   * @example
   * 2025-06-30 10:30:30
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * 101121
   */
  datasourceId?: number;
  /**
   * @example
   * ds1
   */
  datasourceName?: string;
  /**
   * @example
   * test
   */
  fieldDescription?: string;
  /**
   * @example
   * t_test.col1
   */
  fieldId?: string;
  /**
   * @example
   * col1
   */
  fieldName?: string;
  hasBetterRule?: boolean;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 99
   */
  identifyRecordId?: number;
  isCustomIdentify?: boolean;
  isLocked?: boolean;
  /**
   * @example
   * test
   */
  levelAbbreviation?: string;
  /**
   * @example
   * 1
   */
  levelColor?: number;
  /**
   * @example
   * 1
   */
  levelIndex?: number;
  /**
   * @example
   * test
   */
  levelName?: string;
  /**
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @example
   * 2025-06-30 10:30:30
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  projectDisplayName?: string;
  /**
   * @example
   * 101121
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * 11
   */
  scanTaskId?: number;
  /**
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @example
   * testdb
   */
  tableCatalog?: string;
  /**
   * @example
   * test
   */
  tableDescription?: string;
  /**
   * @example
   * DEV
   */
  tableEnv?: string;
  /**
   * @example
   * 1
   */
  tableId?: string;
  /**
   * @example
   * t_test
   */
  tableName?: string;
  /**
   * @example
   * 22
   */
  tableTaskId?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
  securityIdentifyResultInfo?: GetSecurityIdentifyResultResponseBodySecurityIdentifyResultInfo;
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

