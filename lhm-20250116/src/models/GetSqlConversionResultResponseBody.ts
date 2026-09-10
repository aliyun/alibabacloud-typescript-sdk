// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlConversionResultResponseBodyDataTableMappingList extends $dara.Model {
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The source type. Valid values: DB and Schema.
   * 
   * @example
   * db_demo
   */
  sourceSchema?: string;
  /**
   * @remarks
   * The source table name.
   * 
   * @example
   * table_demo
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The target table name.
   * 
   * @example
   * table_demo
   */
  targetTableName?: string;
  /**
   * @remarks
   * The target type. Valid values: DB and Schema.
   * 
   * @example
   * hive
   */
  targetType?: string;
  /**
   * @remarks
   * The SQL conversion task ID.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 10001
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      sourceSchema: 'sourceSchema',
      sourceTableName: 'sourceTableName',
      targetTableName: 'targetTableName',
      targetType: 'targetType',
      taskId: 'taskId',
      tenantId: 'tenantId',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      sourceSchema: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
      targetType: 'string',
      taskId: 'number',
      tenantId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConversionResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error reason.
   * 
   * @example
   * connection timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2026-01-16T10:00:00Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 1234567890
   */
  scriptId?: number;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * node_script_demo
   */
  scriptName?: string;
  /**
   * @remarks
   * The script conversion status. In conversion job scenarios: pass for conversion succeeded, turning for converting, and fail for conversion failed. In some scenarios: success for succeeded, failed for failed, and skipped for skipped.
   * 
   * @example
   * pass
   */
  scriptTransformStatus?: string;
  /**
   * @remarks
   * The converted script content.
   * 
   * @example
   * SELECT * FROM t;
   */
  sqlResultContent?: string;
  /**
   * @remarks
   * The original script content.
   * 
   * @example
   * SELECT * FROM t;
   */
  sqlSourceContent?: string;
  /**
   * @remarks
   * The table name mapping.
   */
  tableMappingList?: GetSqlConversionResultResponseBodyDataTableMappingList[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      finishTime: 'finishTime',
      scriptId: 'scriptId',
      scriptName: 'scriptName',
      scriptTransformStatus: 'scriptTransformStatus',
      sqlResultContent: 'sqlResultContent',
      sqlSourceContent: 'sqlSourceContent',
      tableMappingList: 'tableMappingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      finishTime: 'string',
      scriptId: 'number',
      scriptName: 'string',
      scriptTransformStatus: 'string',
      sqlResultContent: 'string',
      sqlSourceContent: 'string',
      tableMappingList: { 'type': 'array', 'itemType': GetSqlConversionResultResponseBodyDataTableMappingList },
    };
  }

  validate() {
    if(Array.isArray(this.tableMappingList)) {
      $dara.Model.validateArray(this.tableMappingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConversionResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list returned by the operation. For the structure of each element, see the child parameters.
   */
  data?: GetSqlConversionResultResponseBodyData[];
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size, which is the number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues with this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, check errCode and errMessage for troubleshooting.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the query conditions. This value is used for pagination.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSqlConversionResultResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

