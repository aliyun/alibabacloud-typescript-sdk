// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrationSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the task.
   * 
   * @example
   * 982293332403****
   */
  createUser?: string;
  /**
   * @remarks
   * The URL that is used to download the package of the export task. You can use the URL to download the package of the export task.
   * 
   * @example
   * https://shanghai-xxx-oss.oss-cn-shanghai.aliyuncs.com/pre/store/f10_bf47_b4fa7df0860f.zip?Expires=1639540903&OSSAccessKeyId=XXXXXXeF4Lv5j&Signature=qxxxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1589904000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 1589904000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1234
   */
  migrationId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test_export_01
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user who managed the task.
   * 
   * @example
   * 982293332403****
   */
  opUser?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the migration task belongs.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the migration task. Valid values:
   * 
   * *   INIT
   * *   EDITING
   * *   IMPORTING
   * *   IMPORT_ERROR
   * *   IMPORT_SUCCESS
   * *   EXPORTING
   * *   EXPORT_ERROR
   * *   EXPORT_SUCCESS
   * *   REVOKED
   * *   PARTIAL_SUCCESS
   * 
   * @example
   * EXPORT_SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createUser: 'CreateUser',
      downloadUrl: 'DownloadUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      migrationId: 'MigrationId',
      name: 'Name',
      opUser: 'OpUser',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUser: 'string',
      downloadUrl: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      migrationId: 'number',
      name: 'string',
      opUser: 'string',
      projectId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the migration task.
   */
  data?: GetMigrationSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * 19999A96-71BA-2845-B455-ED620EF4E37F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMigrationSummaryResponseBodyData,
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

