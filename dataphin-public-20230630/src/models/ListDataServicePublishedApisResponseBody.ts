// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 10211
   */
  appId?: number;
  /**
   * @remarks
   * The application key. **[Deprecated]** Use AppKeyStr instead.
   * >Notice: **[Deprecated]** Use AppKeyStr instead.</notice>
   * 
   * @example
   * 200000000
   * 
   * @deprecated
   */
  appKey?: number;
  /**
   * @remarks
   * The application key.
   * 
   * @example
   * APP_200000000
   */
  appKeyStr?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appKeyStr: 'AppKeyStr',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appKey: 'number',
      appKeyStr: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyPageResultApiList extends $dara.Model {
  /**
   * @remarks
   * The API code.
   * 
   * @example
   * 1022
   */
  apiId?: number;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * test
   */
  apiName?: string;
  /**
   * @remarks
   * The number of bound applications.
   * 
   * @example
   * 1
   */
  appCount?: number;
  /**
   * @remarks
   * The list of referenced applications.
   */
  appInfoList?: ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList[];
  /**
   * @remarks
   * The application status. Valid values:
   * - 0: Not fully applied.
   * - 1: Applied.
   * - 2: No application. You must apply for an application first.
   * 
   * @example
   * 1
   */
  applyStatus?: number;
  /**
   * @remarks
   * The number of calls.
   * 
   * @example
   * 21
   */
  callCount?: number;
  /**
   * @remarks
   * The creation type. Valid values:
   * - 0: Custom mode.
   * - 1: Wizard mode.
   * - 2: Direct API connection.
   * 
   * @example
   * 1
   */
  createType?: number;
  /**
   * @remarks
   * The custom content for the update frequency.
   * 
   * @example
   * 0 0 0/1 * * *
   */
  customUpdateRate?: string;
  /**
   * @remarks
   * The publish time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  deployTime?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * test xx
   */
  description?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * - 1: Synchronous.
   * - 2: Asynchronous.
   * 
   * @example
   * 1
   */
  executeMode?: number;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 102131
   */
  groupId?: number;
  /**
   * @remarks
   * The API group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The service unit number.
   * 
   * @example
   * 1022
   */
  logicUnitNo?: number;
  /**
   * @remarks
   * The mode. Valid values:
   * - 0: basic.
   * - 1: dev_prod.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * Zhang San
   */
  ownerUserName?: string;
  /**
   * @remarks
   * The data service project ID.
   * 
   * @example
   * 102101
   */
  projectId?: number;
  /**
   * @remarks
   * The service project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The update frequency. Valid values:
   * - 0: Custom.
   * - 1: Daily.
   * - 2: Hourly.
   * - 3: Every minute.
   * 
   * @example
   * 1
   */
  updateRate?: number;
  /**
   * @remarks
   * The update time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The API version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appCount: 'AppCount',
      appInfoList: 'AppInfoList',
      applyStatus: 'ApplyStatus',
      callCount: 'CallCount',
      createType: 'CreateType',
      customUpdateRate: 'CustomUpdateRate',
      deployTime: 'DeployTime',
      description: 'Description',
      executeMode: 'ExecuteMode',
      groupId: 'GroupId',
      groupName: 'GroupName',
      logicUnitNo: 'LogicUnitNo',
      mode: 'Mode',
      owner: 'Owner',
      ownerUserName: 'OwnerUserName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      updateRate: 'UpdateRate',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      appCount: 'number',
      appInfoList: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList },
      applyStatus: 'number',
      callCount: 'number',
      createType: 'number',
      customUpdateRate: 'string',
      deployTime: 'string',
      description: 'string',
      executeMode: 'number',
      groupId: 'number',
      groupName: 'string',
      logicUnitNo: 'number',
      mode: 'number',
      owner: 'string',
      ownerUserName: 'string',
      projectId: 'number',
      projectName: 'string',
      updateRate: 'number',
      updateTime: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInfoList)) {
      $dara.Model.validateArray(this.appInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paged API list.
   */
  apiList?: ListDataServicePublishedApisResponseBodyPageResultApiList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiList: 'ApiList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiList: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyPageResultApiList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiList)) {
      $dara.Model.validateArray(this.apiList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBody extends $dara.Model {
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
   * The HTTP response code.
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
   * The paged query results.
   */
  pageResult?: ListDataServicePublishedApisResponseBodyPageResult;
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
   * Indicates whether the request is successful.
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
      pageResult: ListDataServicePublishedApisResponseBodyPageResult,
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

