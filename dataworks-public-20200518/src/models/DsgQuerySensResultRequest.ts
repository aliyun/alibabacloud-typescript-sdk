// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQuerySensResultRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * col
   */
  col?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   **ODPS.ODPS**
   * *   **HOLO.POSTGRES**
   * *   **EMR**
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
   * The name of a data category.
   * 
   * @example
   * Personal information
   */
  nodeName?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   DESC
   * *   ASC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * *   gmt_create
   * *   gmt_modified
   * 
   * @example
   * gmt_create
   */
  orderField?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
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
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace name.
   * 
   * @example
   * project
   */
  projectName?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The sensitivity status of the field.
   * 
   * *   1: indicates sensitive.
   * *   \\-1: indicates non-sensitive.
   * 
   * @example
   * 1
   */
  sensStatus?: string;
  /**
   * @remarks
   * The sensitive field ID.
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
   * The name of the table.
   * 
   * @example
   * table
   */
  table?: string;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * This parameter is required.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

