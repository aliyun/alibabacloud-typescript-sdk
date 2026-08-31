// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityArchiveTablesResponseBodyDataArchiveTableList extends $dara.Model {
  /**
   * @remarks
   * The ID of the archived table. This ID is used when you update, switch to active, or delete the archived table.
   * 
   * @example
   * 7673533
   */
  archiveTableId?: number;
  /**
   * @remarks
   * The full table name in the format of project_name.table_name.
   * 
   * @example
   * Train.a01_reanme_exception_data
   */
  archiveTableName?: string;
  /**
   * @remarks
   * The DDL statement for creating the archived table, which includes dataphin_quality_* system fields and the dataphin_quality_validate_date partition field definition.
   * 
   * @example
   * create table mfg_fin_cdm.a_shixin_b_exception_data\\n         (  \\n            dataphin_quality_tenant_id varchar(64) comment \\"Tenant ID\\"\\n         , \\n            dataphin_quality_rule_id varchar(64) comment \\"Quality rule ID\\"\\n         , \\n            dataphin_quality_rule_name string comment \\"Quality rule name\\"\\n         , \\n            dataphin_quality_column_name varchar(1024) comment \\"Validation field name\\"\\n         , \\n            dataphin_quality_watch_task_id varchar(128) comment \\"Monitored object task ID\\"\\n         , \\n            dataphin_quality_rule_task_id varchar(64) comment \\"Rule task ID\\"\\n         , \\n            dataphin_quality_validate_time varchar(64) comment \\"Quality validation time\\"\\n         , \\n            dataphin_quality_archive_mode varchar(32) comment \\"Anomaly archiving mode, ONLY_ERROR_FIELD/FULL_RECORD\\"\\n         , \\n            dataphin_quality_error_data string comment \\"Anomaly data\\"\\n         , \\n            执行依据文号 string comment \\"\\"\\n         , \\n            立案时间 string comment \\"\\"\\n         , \\n            案号 string comment \\"\\"\\n         , \\n            执行法院 string comment \\"\\"\\n         , \\n            性别 string comment \\"\\"\\n         , \\n            省份 string comment \\"\\"\\n         , \\n            被执行人的履行情况 string comment \\"\\"\\n         , \\n            发布时间 string comment \\"\\"\\n         , \\n            姓名 string comment \\"\\"\\n         , \\n            身份证号 string comment \\"\\"\\n         , \\n            失信被执行人行为具体情形 string comment \\"\\"\\n         ) \\n        partitioned by (dataphin_quality_validate_date string comment \\"Validation date (partition field)\\")
   */
  ddl?: string;
  /**
   * @remarks
   * Indicates whether this is the active archived table. At least one active archived table must exist under the same monitored object.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The lifecycle in days. An empty value indicates no lifecycle is configured.
   * 
   * @example
   * 30
   */
  lifecycle?: number;
  /**
   * @remarks
   * The maximum number of records to archive per validation. A value of -1 indicates full archiving.
   * 
   * @example
   * 10000
   */
  maxArchiveCount?: number;
  static names(): { [key: string]: string } {
    return {
      archiveTableId: 'ArchiveTableId',
      archiveTableName: 'ArchiveTableName',
      ddl: 'Ddl',
      isDefault: 'IsDefault',
      lifecycle: 'Lifecycle',
      maxArchiveCount: 'MaxArchiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveTableId: 'number',
      archiveTableName: 'string',
      ddl: 'string',
      isDefault: 'boolean',
      lifecycle: 'number',
      maxArchiveCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityArchiveTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of anomaly archived tables.
   */
  archiveTableList?: ListQualityArchiveTablesResponseBodyDataArchiveTableList[];
  /**
   * @remarks
   * The number of custom anomaly archived tables.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      archiveTableList: 'ArchiveTableList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveTableList: { 'type': 'array', 'itemType': ListQualityArchiveTablesResponseBodyDataArchiveTableList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.archiveTableList)) {
      $dara.Model.validateArray(this.archiveTableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityArchiveTablesResponseBody extends $dara.Model {
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
   * The result of querying the anomaly archived table list.
   */
  data?: ListQualityArchiveTablesResponseBodyData;
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
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListQualityArchiveTablesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

