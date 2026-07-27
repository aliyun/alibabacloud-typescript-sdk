// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQuerySensResultRequest extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * col
   */
  col?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * - **ODPS.ODPS**
   * - **HOLO.POSTGRES**
   * - **EMR**
   * 
   * @example
   * ODPS.ODPS
   */
  dbType?: string;
  /**
   * @remarks
   * The sensitivity level of the field.
   * 
   * @example
   * 3
   */
  level?: string;
  /**
   * @remarks
   * The classification node name.
   * 
   * @example
   * Personal information
   */
  nodeName?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - DESC: descending.
   * - ASC: ascending.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - gmt_create
   * - gmt_modified
   * 
   * @example
   * gmt_create
   */
  orderField?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. Log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace name.
   * 
   * @example
   * project
   */
  projectName?: string;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The sensitivity status of the field. Valid values:
   * 
   * - sensitive: sensitive.
   * - noIdentify: not identified.
   * - noResult: no result.
   * 
   * @example
   * 1
   */
  sensStatus?: string;
  /**
   * @remarks
   * The ID of the sensitive field.
   * 
   * @example
   * 10241024
   */
  sensitiveId?: string;
  /**
   * @remarks
   * The name of the sensitive field.
   * 
   * @example
   * name
   */
  sensitiveName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
   */
  table?: string;
  /**
   * @remarks
   * The tenant ID. Log on to the [DataWorks console](https://workbench.data.aliyun.com/console), go to the DataStudio page, click the username in the upper-right corner, and choose Menu > User Info to obtain the tenant ID.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
  /**
   * @remarks
   * The query end time in the format of yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-05-19
   */
  endDate?: string;
  /**
   * @remarks
   * The query start time in the format of yyyy-MM-dd or yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2026-05-19
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      col: 'Col',
      dbType: 'DbType',
      level: 'Level',
      nodeName: 'NodeName',
      order: 'Order',
      orderField: 'OrderField',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      schemaName: 'SchemaName',
      sensStatus: 'SensStatus',
      sensitiveId: 'SensitiveId',
      sensitiveName: 'SensitiveName',
      table: 'Table',
      tenantId: 'TenantId',
      endDate: 'endDate',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      col: 'string',
      dbType: 'string',
      level: 'string',
      nodeName: 'string',
      order: 'string',
      orderField: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectName: 'string',
      schemaName: 'string',
      sensStatus: 'string',
      sensitiveId: 'string',
      sensitiveName: 'string',
      table: 'string',
      tenantId: 'string',
      endDate: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

