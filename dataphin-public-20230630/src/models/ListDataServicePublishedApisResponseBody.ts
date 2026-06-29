// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList extends $dara.Model {
  /**
   * @remarks
   * Application ID.
   * 
   * @example
   * 10211
   */
  appId?: number;
  /**
   * @remarks
   * Application key.
   * >Notice: Deprecated. Use AppKeyStr instead.
   * 
   * @example
   * 200000000
   * 
   * @deprecated
   */
  appKey?: number;
  /**
   * @remarks
   * Application key.
   * 
   * @example
   * APP_200000000
   */
  appKeyStr?: string;
  /**
   * @remarks
   * Application name.
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
   * API ID.
   * 
   * @example
   * 1022
   */
  apiId?: number;
  /**
   * @remarks
   * API name.
   * 
   * @example
   * test
   */
  apiName?: string;
  /**
   * @remarks
   * Number of bound applications.
   * 
   * @example
   * 1
   */
  appCount?: number;
  /**
   * @remarks
   * List of referenced application information.
   */
  appInfoList?: ListDataServicePublishedApisResponseBodyPageResultApiListAppInfoList[];
  /**
   * @remarks
   * Application status. Valid values: 0 (not all applied), 1 (applied), 2 (no app, need to apply for an app first).
   * 
   * @example
   * 1
   */
  applyStatus?: number;
  /**
   * @remarks
   * Number of calls.
   * 
   * @example
   * 21
   */
  callCount?: number;
  /**
   * @remarks
   * Creation type. Valid values: 0 (custom mode), 1 (wizard mode), 2 (direct connection API).
   * 
   * @example
   * 1
   */
  createType?: number;
  /**
   * @remarks
   * Custom update frequency content.
   * 
   * @example
   * 0 0 0/1 * * *
   */
  customUpdateRate?: string;
  /**
   * @remarks
   * Publish time. Time format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  deployTime?: string;
  /**
   * @remarks
   * API description.
   * 
   * @example
   * test xx
   */
  description?: string;
  /**
   * @remarks
   * Call type. Valid values: 1 (synchronous), 2 (asynchronous).
   * 
   * @example
   * 1
   */
  executeMode?: number;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * 102131
   */
  groupId?: number;
  /**
   * @remarks
   * API group name.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * Service unit number.
   * 
   * @example
   * 1022
   */
  logicUnitNo?: number;
  /**
   * @remarks
   * Mode. Valid values: 0 (basic), 1 (dev_prod).
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * Owner ID.
   * 
   * @example
   * 30012011
   */
  owner?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * 张三
   */
  ownerUserName?: string;
  /**
   * @remarks
   * Data service project ID.
   * 
   * @example
   * 102101
   */
  projectId?: number;
  /**
   * @remarks
   * Service project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * Update frequency. Valid values: 0 (custom), 1 (daily), 2 (hourly), 3 (per minute).
   * 
   * @example
   * 1
   */
  updateRate?: number;
  /**
   * @remarks
   * Modification time. Time format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * API version.
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
   * Paginated API list.
   */
  apiList?: ListDataServicePublishedApisResponseBodyPageResultApiList[];
  /**
   * @remarks
   * Total number of records.
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
   * Backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Paginated query result.
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
   * Indicates whether the request was successful.
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

