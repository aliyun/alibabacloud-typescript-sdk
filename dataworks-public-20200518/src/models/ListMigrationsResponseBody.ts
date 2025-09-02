// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationsResponseBodyDataMigrations extends $dara.Model {
  /**
   * @remarks
   * The time when the migration task was created.
   * 
   * @example
   * 123124123123123
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the migration task.
   * 
   * @example
   * 123123****
   */
  createUser?: string;
  /**
   * @remarks
   * The name of the user who created the migration task.
   * 
   * @example
   * 3h1_test
   */
  createUserName?: string;
  /**
   * @remarks
   * The description of the export task.
   * 
   * @example
   * Automated Test creation
   */
  description?: string;
  /**
   * @remarks
   * The URL that is used to download the package of the export task. You can use the URL to download the package of the export task.
   * 
   * @example
   * http://geoip-sdk-user.oss-cn-zhangjiakou.aliyuncs.com/product/v1/ipv4/trace/v1.20220424123842.dex?Expires=1650780849&OSSAccessKeyId=XXXXXXeF4Lv5j&Signature=qxxxxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 436064
   */
  id?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * An internal system error occurred. datasource kafka region is not cn-chengdu, can\\"t open network for it
   */
  message?: string;
  /**
   * @remarks
   * The type of the migration task. Valid values:
   * 
   * *   IMPORT
   * *   EXPORT
   * 
   * @example
   * EXPORT
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the migration task.
   * 
   * @example
   * test_task_1638498642279
   */
  name?: string;
  /**
   * @remarks
   * The type of the import or export package. Valid values:
   * 
   * *   DWMA (standard format)
   * *   DATAWORKS_MODEL (standard format)
   * *   DATAWORKS_V2 (Apsara Stack DataWorks V3.6.1 to V3.11)
   * *   DATAWORKS_V3 (Apsara Stack DataWorks V3.12 and later)
   * 
   * The DWMA and DATAWORKS_MODEL types are interchangeable.
   * 
   * @example
   * DATAWORKS_MODEL
   */
  packageType?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the task belongs.
   * 
   * @example
   * 72132
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the migration task. Valid values:
   * 
   * *   INIT: The migration task is in the initial state.
   * *   EDITING: The migration task is being edited.
   * *   RUNNING: The migration task is running.
   * *   FAILURE: The migration task fails to run.
   * *   SUCCESS: The migration task is successfully run.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 16307
   */
  tenantId?: number;
  /**
   * @remarks
   * The time when the migration task was last updated.
   * 
   * @example
   * 123123123123123
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user who last updated the migration task.
   * 
   * @example
   * 1231****
   */
  updateUser?: string;
  /**
   * @remarks
   * The name of the user who last updated the migration task.
   * 
   * @example
   * 3h1_test
   */
  updateUserName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserName: 'CreateUserName',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      id: 'Id',
      message: 'Message',
      migrationType: 'MigrationType',
      name: 'Name',
      packageType: 'PackageType',
      projectId: 'ProjectId',
      status: 'Status',
      tenantId: 'TenantId',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      updateUserName: 'UpdateUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      createUserName: 'string',
      description: 'string',
      downloadUrl: 'string',
      id: 'number',
      message: 'string',
      migrationType: 'string',
      name: 'string',
      packageType: 'string',
      projectId: 'number',
      status: 'string',
      tenantId: 'number',
      updateTime: 'number',
      updateUser: 'string',
      updateUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of migration tasks.
   */
  migrations?: ListMigrationsResponseBodyDataMigrations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      migrations: 'Migrations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      migrations: { 'type': 'array', 'itemType': ListMigrationsResponseBodyDataMigrations },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.migrations)) {
      $dara.Model.validateArray(this.migrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListMigrationsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9198AA3-9010-53D5-9714-DC4461427D3E
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
      data: ListMigrationsResponseBodyData,
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

