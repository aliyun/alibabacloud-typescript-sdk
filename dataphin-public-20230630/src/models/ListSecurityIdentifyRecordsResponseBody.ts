// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityIdentifyRecordsResponseBodyPageResultIdentifyRecordList extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  actualIdentifyRate?: number;
  /**
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @example
   * test_abc
   */
  bizUnitDisplayName?: string;
  /**
   * @example
   * 11
   */
  bizUnitId?: number;
  /**
   * @example
   * test
   */
  bizUnitName?: string;
  /**
   * @example
   * test
   */
  classifyAbbreviation?: string;
  /**
   * @example
   * 1
   */
  classifyId?: number;
  /**
   * @example
   * test
   */
  classifyName?: string;
  /**
   * @example
   * ENABLE
   */
  classifyStatus?: string;
  /**
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @example
   * test
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
  /**
   * @example
   * 22
   */
  id?: number;
  isBetterMatch?: boolean;
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
  levelIndex?: number;
  /**
   * @example
   * test
   */
  levelName?: string;
  /**
   * @example
   * test_abc
   */
  projectDisplayName?: string;
  /**
   * @example
   * 1001
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
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
  identifyRecordList?: ListSecurityIdentifyRecordsResponseBodyPageResultIdentifyRecordList[];
  /**
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
  pageResult?: ListSecurityIdentifyRecordsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

